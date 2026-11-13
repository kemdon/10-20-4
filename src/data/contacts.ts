// 宁波各区报名联系人（来源：《宁波各区报名联系人.docx》）
export interface DistrictContact {
  district: string;
  teacher: string;
  phone: string;
}

export const districtContacts: DistrictContact[] = [
  { district: '海曙区', teacher: '马老师', phone: '15088850940' },
  { district: '鄞州区', teacher: '陈老师', phone: '15058497753' },
  { district: '北仑区', teacher: '刘老师', phone: '18967811802' },
  { district: '镇海区', teacher: '吴老师', phone: '15306680203' },
  { district: '江北区', teacher: '范老师', phone: '18158297561' },
  { district: '慈溪市', teacher: '班老师', phone: '18069061754' },
  { district: '余姚市', teacher: '尤老师', phone: '18067123703' },
  { district: '奉化区', teacher: '陈老师', phone: '15058497753' },
  { district: '宁海县', teacher: '沈老师', phone: '18094536223' },
  { district: '象山县', teacher: '戚老师', phone: '18058515922' },
];

export const servicePromise =
  '凡报考我院的学员，每人都配备一套最新版的考前辅导资料，配合考前面授辅导或权威的网上课件进行免费辅导，大大提高了考试的通过率。';
