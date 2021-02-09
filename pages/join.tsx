import { useState } from 'react'
import '@/styles/join.less'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))
import { Button, Input, Select, message } from 'antd'

import { UserOutlined, PhoneOutlined } from '@ant-design/icons'

import { getProvinces } from '@/services/public'
import request from '@/services'

const { Option } = Select
const { TextArea } = Input

export async function getStaticProps() {
  const { code, data, msg } = await getProvinces()
  if (code !== 200) {
    message.error(msg)
  }

  return {
    props: {
      Provinces: data,
    },
  }
}

export default function Join(props) {
  const [ProvincesId, setProvincesId] = useState(null)
  const [CitysId, setCitysId] = useState(null)
  const [CityList, setCityList] = useState([])
  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [leaveMsg, setLeaveMsg] = useState('')

  const { Provinces } = props

  function CityhandleChange(value) {
    setCitysId(value)
  }

  const nameChange = (e) => {
    const { value } = e.target
    setName(value)
  }

  const mobileChange = (e) => {
    const { value } = e.target
    setPhone(value)
  }

  const leaveMsgChange = (e) => {
    const { value } = e.target
    setLeaveMsg(value)
  }

  const immediatelyClick = async () => {
    const { code, msg } = await request({
      url: '/api/joinAgent',
      method: 'GET',
      params: {
        contacts: Name,
        mobile: Phone,
        province_id: ProvincesId,
        city_id: CitysId,
        remark: leaveMsg,
      },
    })
    if (code === 200) {
      message.success(msg)
      setProvincesId(null)
      setCitysId(null)
      setCityList([])
      setName('')
      setPhone('')
      setLeaveMsg('')
    } else {
      message.error(msg)
    }
  }

  async function ProvincesHandleChange(value) {
    setProvincesId(value)
    const { code, data, msg } = await request({
      url: '/api/getCitsId',
      method: 'GET',
      params: {
        id: value,
      },
    })
    if (code === 200) {
      setCityList(Object.values(data))
    } else {
      message.error(msg)
    }
  }

  return (
    <div id="Join">
      <AI_header title="加盟代理" currentIndex={3} />
      <main>
        <section className="join_banner">
          <section className="left_info">
            <section className="title">AI错题宝火热招商中</section>
            <section className="content">
              一款基于人工智能（AI）相关的教育技术应用软件，实现自适应教育的精准化教学，提升学习者学习质量的一款智慧产品。
              一款智慧产品
            </section>
            <Button
              className="Experience"
              type="primary"
              shape="round"
              size="large"
            >
              <a href="#join_form">申请体验</a>
            </Button>
          </section>
          <img
            className="join_img"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/join_img.png"
            alt="join_img"
          />
        </section>
        <section className="prospects">
          <section className="title">行业前景</section>
          <section className="subtitle">BACKGROUND</section>
          <section className="item">
            <img
              className="advertising"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/item1.png"
              alt="advertising"
            />
            <section className="content_text">
              <section className="title">国家政策</section>
              <section className="content">
                2017年《国务院》要求利用智能技术开发智能教育助理，建立智能、快速、全面的教育分析系统。建立以学习者为中心的教育环境，提供精准推送的教育服务，实现日常教育和终身教育订制化。
                <br />
                2019年《教育部》鼓励购买优质教育App服务创新供给模式，促进产业发展。明确提出以教育、学习为主要应用场景，服务于学校教学与管理、学生学习与生活以及家校互动等方面的软件应用。
              </section>
            </section>
          </section>
          <section className="item item1">
            <section className="content_text" style={{ width: '30.875rem' }}>
              <section className="title">行业规模</section>
              <section className="content" style={{ marginBottom: '3.875rem' }}>
                随着人口红利的增长，以及在线用户不断增长，目互联网教育在线用户已经突破2亿，行业规模在2022年将达到5400亿。
              </section>
              <section className="title">学校需求</section>
              <section className="content">
                落实国家政策，通过人工智能技术解决个性化教学的需求，建立以学习者为中心的教育环境，积极实现在“互联网+”条件下的人才培养新模式。
              </section>
            </section>
            <img
              className="advertising"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/item2.png"
              alt="advertising"
            />
          </section>
          <section className="item ">
            <img
              className="advertising"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/item3.png"
              alt="advertising"
              style={{ height: '12.25rem' }}
            />
            <section className="content_text">
              <section className="title">家长认可度高</section>
              <section className="content">
                在互联网环境成长下的家长已经意识到随着教育信息内容公平化、同质化，中高考竞争会更加激烈；目前人工智能发展已经应用到日常生活中，家长们也在积极寻找高效的学习方法帮助孩子解决日常学习中遇到的瓶颈，避免事倍功半，最终会通过个性化学习实现成绩提高。
              </section>
            </section>
          </section>
        </section>
        <section className="Advantage">
          <section className="bg">
            <section className="title">产品优势</section>
            <section className="subtitle">PRODUCT</section>
            <section className="grid_box">
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_product.png"
                  alt="Advantage_icon"
                />
                <section className="productname">产品稳定</section>
                <section className="Description">
                  产品开发周期长反复打磨，系统安全用户放心。
                </section>
              </section>
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Lightweight.png"
                  alt="Advantage_icon"
                />
                <section className="productname">轻量级产品</section>
                <section className="Description">
                  支持手机、pad、电脑多平台使用，可用于课堂教学、课后复习，学生自主拍照收集和教师上传试卷等多种使用方法。
                </section>
              </section>
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_upgrade.png"
                  alt="Advantage_icon"
                />
                <section className="productname">升级周期快</section>
                <section className="Description">
                  移动互联网研发思路，迭代更新快，每周每月都有更新。
                </section>
              </section>
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Operation.png"
                  alt="Advantage_icon"
                />
                <section className="productname">运营稳定</section>
                <section className="Description">
                  运营稳定指定性目标盈利计划以及阶段性目标执行。
                </section>
              </section>
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_local.png"
                  alt="Advantage_icon"
                />
                <section className="productname">本地化内容</section>
                <section className="Description">
                  内容按照区域精准定制，严格按照本地考纲、教材等要素定制内容，涵盖当地教辅和试卷。
                </section>
              </section>
              <section className="item">
                <img
                  className="Advantage_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Aftersale.png"
                  alt="Advantage_icon"
                />
                <section className="productname">售后强大</section>
                <section className="Description">
                  7*24小时无缝对接所有问题第一时间反馈。
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="Cooperation">
          <section className="title">合作亮点</section>
          <section className="subtitle">COOPERATION</section>
          <section className="list">
            <section className="item">
              <i className="icon"></i>
              <strong className="title">系统稳定</strong>
              <span className="info">
                多人团队长期沉淀与检验，打造优秀产品，系统稳定，诸多亮点，行业公认的领先者。
              </span>
            </section>
            <section className="item">
              <i className="icon"></i>
              <strong className="title">渠道支持</strong>
              <span className="info">
                全方位服务支撑体系，快速启动市场，敏捷服务响应。
              </span>
            </section>
            <section className="item">
              <i className="icon"></i>
              <strong className="title">收益稳定</strong>
              <span className="info">
                采用Saa模式，成交后每年续费，滚雪球式的盈利效应，保证合作伙伴长久收益。
              </span>
            </section>
          </section>
        </section>
        <section className="Process">
          <strong className="title">合作流程</strong>
          <em className="subtitle">FLOW</em>
          <section className="flowchart">
            <section className="text_box">
              提交
              <br />
              申请
            </section>
            <i className="arrows_icon"></i>
            <section className="text_box">
              考察
              <br />
              沟通
            </section>
            <i className="arrows_icon"></i>
            <section className="text_box">
              资质
              <br />
              评审
            </section>
            <i className="arrows_icon"></i>
            <section className="text_box">
              签订
              <br />
              合同
            </section>
            <i className="arrows_icon"></i>
            <section className="text_box">
              专业
              <br />
              培训
            </section>
            <i className="arrows_icon"></i>
            <section className="text_box">
              运营
              <br />
              上线
            </section>
          </section>
        </section>
        <section className="Online" id="join_form">
          <strong className="title">在线申请</strong>
          <em className="subtitle">
            如您有意向，请留下您的联系方式，或发送意向书至邮箱4061067@163.com
          </em>
          <section className="form">
            <Input
              className="bor_inp"
              size="large"
              placeholder="请填写真实姓名（必填）"
              prefix={<UserOutlined />}
              value={Name}
              onChange={nameChange}
            />
            <Input
              className="bor_inp"
              size="large"
              placeholder="请填写联系方式（必填）"
              prefix={<PhoneOutlined />}
              value={Phone}
              onChange={mobileChange}
            />
            <div className="selct_box">
              <Select
                style={{
                  width: '50%',
                  marginRight: '20px',
                  border: '1px solid #FF4D3A',
                }}
                onChange={ProvincesHandleChange}
                placeholder="选择所在省"
                value={ProvincesId}
              >
                {Provinces.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
              </Select>
              <Select
                style={{
                  width: '50%',
                  border: '1px solid #FF4D3A',
                }}
                onChange={CityhandleChange}
                placeholder="选择所在市"
                value={CitysId}
              >
                {CityList.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
              </Select>
            </div>
            <TextArea
              className="bor_ta"
              rows={4}
              placeholder="请留言（选填）"
              value={leaveMsg}
              onChange={leaveMsgChange}
            />
            <Button
              className="commitBtn"
              type="primary"
              shape="round"
              size="large"
              onClick={immediatelyClick}
            >
              立即申请
            </Button>
          </section>
        </section>
      </main>
      <AI_footer />
    </div>
  )
}
