import '@/styles/about.less'
import { Button, Input } from 'antd'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))
const { TextArea } = Input

import { asyncWrapper, BaiduMap, Marker, InfoWindow } from 'react-baidu-maps'
const AsyncMap = asyncWrapper(BaiduMap)

export default function About() {

  return (
    <div id="About">
      <AI_header title="关于我们" currentIndex={4} />
      <main>
        <section className="CompanyName">
          江苏错题宝教育科技有限公司
          <section className="Compartment"></section>
        </section>
        <section className="body">
          <section className="CompanyProfile">
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/introduce.png"
              alt="introduce"
              className="introduce"
            />
            <strong>
              <span>
                江苏错题宝教育科技有限公司是一家互联网+人工智能教育科技服务企业，骐骥科技以服务K12阶段教育教学需求为依托，自主研发的“AI错题宝”是基于人工智能（AI）相关的教育技术应用，主要帮助公立学校解决学生错题数据收集实现教师精准教学的一款应用软件；从而实现自适应教育的精准化教学和学生的个性化学习，提升学习者学习质量的智慧产品。
              </span>
              <br />
              <span>
                 我们以“开放、拼搏、分享”的团队工作理念发展公司，开放的心态欢迎有能力、有抱负的人加入，在公司发展过程中将和员工一起共享成长和财富；我们将服务为先、团队合作、诚信可靠、拥抱变化、激情快乐、爱岗敬业、共享成长的价值观融入到日常工作生活中。
                公司将提供完善的人才培养体系，将识人、育人、用人运用到日常的招聘、培训、晋升工作中。帮助新人变优、老人变强，更好的去适应互联网时代快节奏的工作生活方式。
              </span>
            </strong>
          </section>
          <section className="contact_us">
            <section className="title_box">
              <strong>联系我们</strong>
              <em>
                请在线提交你所需的服务请求，最短2分钟内将有客服联系帮助您解决处理。
              </em>
            </section>
            <section className="contact_body">
              <section className="lt_form">
                <Input className="inp_def" placeholder="客户名称"></Input>
                <Input className="inp_def" placeholder="联系方式"></Input>
                <TextArea
                  className="inp_def problem"
                  rows={4}
                  placeholder="请描述你遇到的问题"
                />
                <Button
                  className="btn"
                  type="primary"
                  shape="round"
                  size="large"
                >
                  发送
                </Button>
              </section>
              <section className="rt_map">
                <AsyncMap
                  mapUrl={`http://api.map.baidu.com/api?v=3.0&ak=GTrnXa5hwXGwgQnTBG28SHBubErMKm3f`}
                  loadingElement={<div>Loading.....</div>}
                  mapContainer={<div style={{ height: '100%' }} />}
                  center={{ lng: 119.389453, lat: 32.397627 }}
                  zoom={15}
                  setCurrentCity="扬州"
                  enableScrollWheelZoom={true}
                >
                  <Marker position={{ lng: 119.389453, lat: 32.397627 }}>
                    <InfoWindow
                      content="邗江区文昌西路450号国泰大厦1号楼20层"
                      offset={{ width: 0, height: -20 }}
                    />
                  </Marker>
                </AsyncMap>
              </section>
            </section>
          </section>
        </section>
      </main>
      <AI_footer />
    </div>
  )
}
