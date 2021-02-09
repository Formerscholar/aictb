const baseURL = 'http://api2.aictb.com/api'

const navText = [
  {
    title: '首页',
    page: '/',
  },
  {
    title: '应用下载',
    page: '/download',
  },
  {
    title: '帮助中心',
    page: '/help',
  },
  {
    title: '加盟代理',
    page: '/join',
  },
  {
    title: '关于我们',
    page: '/about',
  },
]

const HomeMain = [
  {
    className: 'resources',
    title: '海量资源',
    em:
      '区域名校资源、海量试题定制训练，与名校学生错位比较；丰富的本地资源共享，方便教师更好备课，提高工作效率。',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page1_img.png',
    bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page1_bg.png',
    leftIsText: true,
  },
  {
    className: 'picture',
    title: '拍照识题',
    em:
      '对纸质作业拍照识别成文档，勾选错题组成电子错题本，再打印并练习，学生不用手抄错题，可以节省时间；教师一键拍照上传试卷、生成文档，校内共享，方便学生下载使用。',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page2_img.png',
    bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page2_bg.png',
    leftIsText: false,
  },
  {
    className: 'Wrongpush',
    title: '错题推送',
    em:
      'AI系统推送举一反三变式题，帮助学生巩固错误题型知识点，提高学习效率；汇总分析班级错题情况，系统推送共性错题变式题，节约老师出题时间。',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page3_img.png',
    bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page3_bg.png',
    leftIsText: true,
  },
  {
    className: 'Studyreport',
    title: '学情报告',
    em:
      '错题收集后形成可视化个性数据报告，学生清楚认识自身错误，方便提优补差；错题数据报告分析学生知识薄弱项，方便老师查找教学薄弱环节，实现精准教学。',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page4_img.png',
    bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page4_bg.png',
    leftIsText: false,
  },
]

const down_list = [
  {
    title: '丰富的教辅书资源',
    content: '校本试卷、名校资源让学习更简单',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list1.png',
    isrt: true,
  },
  {
    title: '推送举一反三变式题',
    content: '学生收集错题更轻松，老师组卷更快捷',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list2.png',
    isrt: false,
  },
  {
    title: '学情报告一目了然',
    content: '节约时间、方便快捷',
    img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list3.png',
    isrt: true,
  },
]

export { baseURL, navText, HomeMain, down_list }
