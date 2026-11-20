import { Resend } from 'resend';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function field(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

const LEVELS = ['专科', '本科', '在职研究生', '职业技能培训'];

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.CONTACT_FORM_TO_EMAIL) {
    console.error('Contact form email environment variables are not configured.');
    return json({ ok: false, error: '邮件服务暂未配置，请稍后再试或到校咨询。' }, 503);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 16_384) {
    return json({ ok: false, error: '提交内容过长。' }, 413);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: '提交数据格式有误。' }, 400);
  }

  const data = {
    name: field(payload?.name, 60),
    phone: field(payload?.phone, 30),
    level: field(payload?.level, 40),
    message: field(payload?.message, 500),
  };

  if (!data.name || !data.phone) {
    return json({ ok: false, error: '请填写姓名和联系电话。' }, 400);
  }
  if (!/^[0-9+\-\s]{7,20}$/.test(data.phone)) {
    return json({ ok: false, error: '请填写有效的联系电话。' }, 400);
  }
  if (data.level && !LEVELS.includes(data.level)) {
    data.level = '';
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const safeName = data.name.replace(/[\r\n]+/g, ' ');
  const subject = `官网咨询：${safeName}（${data.level || '未选择层次'}）`;
  const text = [
    '官网新咨询线索',
    '',
    `姓名：${data.name}`,
    `联系电话：${data.phone}`,
    `意向层次：${data.level || '未填写'}`,
    `留言：${data.message || '无'}`,
    '',
    `提交时间：${new Date().toISOString()}`,
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from: `官网咨询 <${env.RESEND_FROM_EMAIL}>`,
      to: [env.CONTACT_FORM_TO_EMAIL],
      subject,
      text,
    });

    if (error) {
      console.error('Resend rejected contact email:', error.name, error.message);
      return json({ ok: false, error: '提交失败，请稍后再试或直接到校咨询。' }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return json({ ok: false, error: '提交失败，请稍后再试或直接到校咨询。' }, 502);
  }
}

export function onRequest() {
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}
