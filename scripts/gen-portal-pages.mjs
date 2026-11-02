import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('src/pages/news', { recursive: true });
mkdirSync('src/pages/notices', { recursive: true });
mkdirSync('src/pages/training', { recursive: true });
mkdirSync('src/pages/universities', { recursive: true });
mkdirSync('src/pages/majors', { recursive: true });
mkdirSync('src/pages/signup', { recursive: true });
mkdirSync('src/pages/jobs', { recursive: true });
mkdirSync('src/pages/contact', { recursive: true });

const head = (title, desc, kicker) => `---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { getLocaleConfig, getSiteSettings } from '../../lib/site-content';

const { defaultLocale } = await getLocaleConfig();
const site = await getSiteSettings(defaultLocale);
---

<Layout
  title="${title}"
  description="${desc}"
  lang={defaultLocale}
  siteName={site.brandName}
  defaultDescription={site.defaultMetaDescription}
  faviconHref={site.logoPath}
  ogImage={site.defaultOgImage}
>
  <Navbar site={site} locale={defaultLocale} currentPath="/" />
  <main id="main">
    <section class="page-hero">
      <div class="container">
        <span class="kicker">${kicker}</span>
        <h1>${title}</h1>
      </div>
    </section>
    <div class="page-body">
      <div class="container">
`;
const tail = () => `      </div>
    </div>
  </main>
  <Footer site={site} locale={defaultLocale} />
</Layout>
`;

// 学院新闻（真实动态，取自编年史与荣誉档案）
writeFileSync('src/pages/news/index.astro', head('学院新闻', '硕学教育与院校合作、教学表彰等最新动态。', 'NEWS CENTER') + `
      <div class="sec-block">
        <ul class="news-list">
          <li>
            <a href="/universities/">硕学获评浙江师范大学“优秀校外教学点”（2025 年度）</a>
            <span class="date">2025-12</span>
            <span class="snippet">浙江师范大学高等学历继续教育授予硕学“优秀校外教学点”称号，肯定我校在教学组织与学员服务方面的持续投入。</span>
          </li>
          <li>
            <a href="/universities/">浙江国际海运职业技术学院授予我校“2024 年度优秀校外教学点”</a>
            <span class="date">2024-12</span>
            <span class="snippet">继 2021、2023 年度之后，我校再次获评该院优秀校外教学点，函授教学与服务质量保持稳定。</span>
          </li>
          <li>
            <a href="/universities/">浙江海洋大学“优秀函授站”授牌（2021 年度）</a>
            <span class="date">2022-01</span>
            <span class="snippet">浙江海洋大学为我校授牌“优秀函授站”（2021 年度），双方在成人继续教育领域的合作进一步深化。</span>
          </li>
          <li>
            <a href="/universities/">浙江工商职业技术学院授予我校“教学管理优秀教学点”</a>
            <span class="date">2019-01</span>
            <span class="snippet">2018 年度教学管理考核中，我校获评该院“教学管理优秀教学点”。</span>
          </li>
          <li>
            <a href="/universities/">浙江农林大学获评“校外合作办学进步单位”</a>
            <span class="date">2013-12</span>
            <span class="snippet">我校成为浙江农林大学指定宁波教学点，并获评该校“校外合作办学进步单位”。</span>
          </li>
          <li>
            <a href="/about/">硕学教育正式创校，首年招生 950 名学员</a>
            <span class="date">2012-09</span>
            <span class="snippet">经江东区教育局审批，硕学教育第一家校区正式设立，首年招生 950 人，“硕学”商标同步注册。</span>
          </li>
        </ul>
      </div>
` + tail());

// 教务通知（通用真实信息，注明以官方为准）
writeFileSync('src/pages/notices/index.astro', head('教务通知', '成人高考、自学考试、开放教育等报名与考试安排的常见教务提示。', 'NOTICES') + `
      <div class="sec-block">
        <ul class="news-list">
          <li>
            <span>浙江省成人高考报名与考试时间以浙江省教育考试院当年公布为准</span>
            <span class="date">教务提示</span>
            <span class="snippet">成人高考报名一般在每年 8 至 9 月进行，考试安排在 10 月下旬。请以浙江省教育考试院官网发布的当年通知为准，我校各接待点可协助学员完成报名流程。</span>
          </li>
          <li>
            <span>成人高考报名材料清单</span>
            <span class="date">报名须知</span>
            <span class="snippet">报名一般需准备：居民身份证、前置学历证书原件及复印件、近期免冠证件照，外省户籍考生需关注社保或居住证相关要求，具体以当年报名公告为准。</span>
          </li>
          <li>
            <span>国家开放大学春、秋两季注册</span>
            <span class="date">教务提示</span>
            <span class="snippet">国家开放大学实行春季、秋季两季注册入学，具体注册时间与招生计划以当季通知为准，欢迎到各分校咨询。</span>
          </li>
          <li>
            <span>学士学位申请条件以各主考高校规定为准</span>
            <span class="date">学位须知</span>
            <span class="snippet">本科毕业生申请学士学位一般需满足课程成绩、学位外语及论文要求，具体条件以各高校继续教育学院发布的学位授予细则为准。</span>
          </li>
          <li>
            <span>学籍与学历信息统一以学信网查询结果为准</span>
            <span class="date">教务提示</span>
            <span class="snippet">学籍注册、学历查询均可通过中国高等教育学生信息网（学信网）核验，入学后我校教务老师会协助学员完成学籍核对。</span>
          </li>
        </ul>
        <p class="disclaimer">以上为常见教务事项提示，具体政策与时间安排均以教育主管部门及各高校当年正式发布为准。</p>
      </div>
` + tail());

// 职业培训
writeFileSync('src/pages/training/index.astro', head('职业培训', '硕学自设面授课程与考证辅导、企业内训服务。', 'TRAINING') + `
      <div class="sec-block">
        <h2 class="sec-title">自设面授课程</h2>
        <div class="tile-grid">
          <div class="tile">会计面授课</div>
          <div class="tile">新媒体运营面授课</div>
          <div class="tile">办公软件面授课</div>
          <div class="tile">硕学电商面授课</div>
        </div>
        <p class="disclaimer">以上为硕学自设的面授课程，在宁波各分校滚动开班，具体课表与开班时间请到就近分校咨询。</p>
      </div>
      <div class="page-body alt">
        <div class="container">
          <h2 class="sec-title">考证辅导与企业内训</h2>
          <div class="major-cols">
            <div class="info-card">
              <h3>考证辅导</h3>
              <div class="chip-wrap" style="margin-top:0.9rem">
                <span class="chip">会计师</span><span class="chip">教师资格证</span><span class="chip">建造师</span><span class="chip">消防工程师</span><span class="chip">监理工程师</span>
              </div>
              <p style="margin-top:1rem;color:var(--color-text-muted);line-height:1.9;font-size:0.92rem">面向个人学员的考证辅导课程，配套报考指导与考前串讲。</p>
            </div>
            <div class="info-card">
              <h3>企业内训</h3>
              <div class="chip-wrap" style="margin-top:0.9rem">
                <span class="chip">办公软件</span><span class="chip">口头表达</span><span class="chip">目标管理</span><span class="chip">协作与谈判</span><span class="chip">财务报表分析</span>
              </div>
              <p style="margin-top:1rem;color:var(--color-text-muted);line-height:1.9;font-size:0.92rem">面向企事业单位的定制化培训，按岗位能力模型设计课程组合。</p>
            </div>
          </div>
        </div>
      </div>
` + tail());

// 招生院校
writeFileSync('src/pages/universities/index.astro', head('招生院校', '硕学为多所高校宁波官方函授站，并与十余所高校合作招生。', 'UNIVERSITIES') + `
      <div class="sec-block">
        <h2 class="sec-title">宁波官方函授站</h2>
        <div class="tile-grid">
          <div class="tile" style="background:var(--color-primary-soft);color:var(--color-primary)">浙江海洋大学</div>
          <div class="tile" style="background:var(--color-primary-soft);color:var(--color-primary)">浙江师范大学</div>
          <div class="tile" style="background:var(--color-primary-soft);color:var(--color-primary)">金华职业技术大学</div>
          <div class="tile" style="background:var(--color-primary-soft);color:var(--color-primary)">浙江工商职业技术学院</div>
          <div class="tile" style="background:var(--color-primary-soft);color:var(--color-primary)">浙江国际海运职业技术学院</div>
        </div>
      </div>
      <div class="page-body alt">
        <div class="container">
          <h2 class="sec-title">合作高校</h2>
          <div class="tile-grid">
            <div class="tile">浙江农林大学</div><div class="tile">宁波工程学院</div><div class="tile">宁波大学</div><div class="tile">浙江工商大学</div>
            <div class="tile">杭州师范大学</div><div class="tile">浙江财经大学</div><div class="tile">湖北师范大学</div><div class="tile">嘉兴大学</div>
            <div class="tile">丽水学院</div><div class="tile">浙江中医药大学</div><div class="tile">东北农业大学</div><div class="tile">浙江水利水电学院</div>
          </div>
          <p class="disclaimer">合作院校与招生专业以各高校当年成人高等教育招生简章为准，欢迎到校咨询当年可报院校与专业。</p>
        </div>
      </div>
      <div class="page-body">
        <div class="container">
          <h2 class="sec-title">教学表彰</h2>
          <div class="honor-grid">
            <figure><img src="/assets/images/honors/honor-2025-shida.webp" alt="浙江师范大学优秀校外教学点荣誉证书" loading="lazy" /><figcaption>浙江师范大学 · 优秀校外教学点</figcaption></figure>
            <figure><img src="/assets/images/honors/honor-2024-haiyun.webp" alt="浙江国际海运职业技术学院优秀校外教学点证书" loading="lazy" /><figcaption>浙江国际海运职业技术学院</figcaption></figure>
            <figure><img src="/assets/images/honors/honor-2022-haida.webp" alt="浙江海洋大学优秀函授站证书" loading="lazy" /><figcaption>浙江海洋大学 · 优秀函授站</figcaption></figure>
            <figure><img src="/assets/images/honors/honor-2013-zhulinan.webp" alt="浙江农林大学校外合作办学进步单位证书" loading="lazy" /><figcaption>浙江农林大学 · 合作办学进步单位</figcaption></figure>
          </div>
        </div>
      </div>
` + tail());

// 招生专业
writeFileSync('src/pages/majors/index.astro', head('招生专业', '合作高校成人高等教育常设专业方向参考。', 'MAJORS') + `
      <div class="sec-block">
        <h2 class="sec-title">本科（专升本 / 高起本）专业方向</h2>
        <div class="chip-wrap">
          <span class="chip chip-hot">会计学</span><span class="chip">工商管理</span><span class="chip">市场营销</span><span class="chip">电子商务</span><span class="chip">行政管理</span>
          <span class="chip">学前教育</span><span class="chip">小学教育</span><span class="chip">汉语言文学</span><span class="chip">法学</span><span class="chip">机械设计制造及其自动化</span>
          <span class="chip">电气工程及其自动化</span><span class="chip">计算机科学与技术</span><span class="chip">土木工程</span><span class="chip">护理学</span><span class="chip">药学</span>
        </div>
      </div>
      <div class="page-body alt">
        <div class="container">
          <h2 class="sec-title">专科专业方向</h2>
          <div class="chip-wrap">
            <span class="chip chip-hot">大数据与会计</span><span class="chip">工商企业管理</span><span class="chip">电子商务</span><span class="chip">市场营销</span><span class="chip">行政管理</span>
            <span class="chip">学前教育</span><span class="chip">计算机应用技术</span><span class="chip">机电一体化技术</span><span class="chip">建筑工程技术</span><span class="chip">护理</span>
            <span class="chip">药学</span><span class="chip">现代物流管理</span>
          </div>
          <p class="disclaimer">以上为合作高校成人高等教育中常见的专业方向示例，供参考。当年实际可报院校、专业、学费与学习形式，均以各高校成人高等教育招生简章和教育考试院公布为准，欢迎到各分校获取最新招生目录。</p>
        </div>
      </div>
` + tail());

// 在线报名
writeFileSync('src/pages/signup/index.astro', head('在线报名', '四步完成报名咨询，欢迎到就近分校或接待点办理。', 'SIGN UP') + `
      <div class="sec-block">
        <h2 class="sec-title">报名流程</h2>
        <div class="step-grid">
          <div class="step-card"><div class="no">01</div><h3>咨询规划</h3><p>到就近分校或接待点，老师根据你的学历基础与职业目标推荐合适的院校与专业。</p></div>
          <div class="step-card"><div class="no">02</div><h3>准备材料</h3><p>身份证、前置学历证书、证件照等报名材料，教务老师协助整理与审核。</p></div>
          <div class="step-card"><div class="no">03</div><h3>网上报名</h3><p>在规定时间内完成教育考试院统一报名或高校注册，并完成考前辅导报名。</p></div>
          <div class="step-card"><div class="no">04</div><h3>入学学习</h3><p>录取后由教务老师跟进学籍注册与课程安排，直至顺利毕业。</p></div>
        </div>
      </div>
      <div class="page-body alt">
        <div class="container">
          <h2 class="sec-title">报名方式</h2>
          <div class="major-cols">
            <div class="info-card">
              <h3>到校咨询报名</h3>
              <p style="margin-top:0.75rem;color:var(--color-text-muted);line-height:1.9;font-size:0.93rem">宁波市区 3 家分校、6 个接待点均可现场咨询与办理报名，建议先到校做免费学历规划。</p>
              <a class="portal-more" href="/contact">查看校区分布 »</a>
            </div>
            <div class="info-card">
              <h3>报名提醒</h3>
              <p style="margin-top:0.75rem;color:var(--color-text-muted);line-height:1.9;font-size:0.93rem">成人高考报名时间集中、考位有限，建议提前准备材料；报名政策以浙江省教育考试院当年公布为准。</p>
              <a class="portal-more" href="/notices">查看教务通知 »</a>
            </div>
          </div>
        </div>
      </div>
` + tail());

// 招聘信息
writeFileSync('src/pages/jobs/index.astro', head('招聘信息', '硕学教育诚聘英才，与我们一起帮助更多人学习成才。', 'JOIN US') + `
      <div class="sec-block">
        <h2 class="sec-title">在招岗位</h2>
        <div class="info-card">
          <p style="color:var(--color-text-muted);line-height:2">目前各分校与总部岗位随学期需要动态招聘，长期欢迎以下方向的伙伴加入：</p>
          <div class="chip-wrap" style="margin:1rem 0">
            <span class="chip">教务 / 学务老师</span><span class="chip">课程咨询顾问</span><span class="chip">面授课程讲师</span><span class="chip">新媒体运营</span><span class="chip">校区行政</span>
          </div>
          <p style="color:var(--color-text-muted);line-height:2">应聘方式：请携带个人简历到就近分校前台登记，或咨询各校区招聘负责人。我们奉行“不断学习、快乐奋斗、精诚合作、乐于助人”的价值观，期待与你同行。</p>
        </div>
      </div>
` + tail());

// 联系我们
writeFileSync('src/pages/contact/index.astro', head('联系我们', '硕学教育扎根宁波，3 家分校、6 个接待点欢迎你的到来。', 'CONTACT') + `
      <div class="sec-block">
        <h2 class="sec-title">校区分布</h2>
        <div class="major-cols">
          <div class="info-card">
            <h3>宁波市区</h3>
            <p style="margin-top:0.75rem;color:var(--color-text-muted);line-height:1.9;font-size:0.93rem">分校与接待点覆盖宁波主城区，可现场咨询学历提升方案、办理报名。</p>
          </div>
          <div class="info-card">
            <h3>区县接待点</h3>
            <p style="margin-top:0.75rem;color:var(--color-text-muted);line-height:1.9;font-size:0.93rem">在宁波各区县设有接待点（含北仑等），方便在职学员就近咨询与办理。</p>
          </div>
        </div>
        <p class="disclaimer">各校区具体地址与咨询电话请提前联系学校确认，或到访前先通过分校前台确认办公时间。</p>
      </div>
      <div class="page-body alt">
        <div class="container">
          <h2 class="sec-title">咨询建议</h2>
          <ul class="news-list">
            <li><span>学历提升：建议携带最高学历证书，老师可现场评估可报院校与专业</span><span class="date">到校咨询</span></li>
            <li><span>职业培训：面授课程滚动开班，可先预约试听</span><span class="date">电话 / 到校</span></li>
            <li><span>企业内训：提供定制化方案，欢迎企事业单位洽谈</span><span class="date">预约洽谈</span></li>
          </ul>
          <a class="portal-more" href="/signup" style="margin-top:1.5rem;display:inline-block">查看报名流程 »</a>
        </div>
      </div>
` + tail());

console.log('8 portal pages created');
