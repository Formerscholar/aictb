import "./index.less";

export default function AI_footer() {
  return (
    <footer>
      <section className="foot_warp">
        <section className="lt_box">
          <em>AI错题宝</em>
          <em>联系我们</em>
          <em>邮箱地址</em>
          <em>咨询热线</em>
          <em><a href="http://teacher.aictb.com/" target="_blank">老师管理系统</a> </em>
          <em>关于我们</em>
          <em>kefu@aictb.com</em>
          <em>0514-82885886</em>
        </section>
        <section className="rt_box">
          <section className="QRcode_box" style={{ marginRight: '21px' }}>
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/wechat.png"
              alt="wechat"
            />
            <em>微信公众号</em>
          </section>
          <section className="QRcode_box" style={{ marginRight: '63px' }}>
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/App_download.png"
              alt="App_download"
            />
            <em>APP下载</em>
          </section>
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/foot_tip.png"
            alt="foot_tip"
          />
        </section>
      </section>
      <small>Copyright © 2021 江苏错题宝教育科技有限公司版权所有</small>
    </footer>
  )
}
