import '@/styles/help.less'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))
import { message } from 'antd'
import { gethelpsList } from '@/services/public'
import { useState } from 'react'
import request from '@/services'

export const getStaticProps = async () => {
  const { code, data, msg } = await gethelpsList({
    type: 4,
  })
  if (code !== 200) {
    message.error(msg)
  }
  console.log(data)

  return {
    props: {
      helpsList: data,
    },
  }
}

export default function Help(props) {
  const { helpsList } = props
  const [type, setType] = useState('4')
  const [helpLists, sethelpLists] = useState(helpsList)
  const router = useRouter()

  const pageTohelpDel = async (type) => {
    setType(type)
    const { code, data, msg } = await request({
      url: '/api/gethelpsList',
      method: 'GET',
      params: {
        type,
      },
    })

    if (code === 200) {
      sethelpLists(data)
    } else {
      message.error(msg)
    }
  }

  const moreClick = (status) => {
    router.push(`/help/${status}/${type}`)
  }

  return (
    <div id="Help">
      <AI_header title="帮助中心" currentIndex={2} />
      <main>
        <section className="banner">
          <section className="type_change" onClick={() => pageTohelpDel('4')}>
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_student.png"
              alt="help_student"
            />
            <h1
              className={type == '4' ? 'student_text current' : 'student_text'}
            >
              我是学生
            </h1>
          </section>
          <section className="type_change" onClick={() => pageTohelpDel('3')}>
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_teacher.png"
              alt="help_teacher"
            />
            <h1
              className={type == '3' ? 'teacher_text current' : 'teacher_text'}
            >
              我是老师
            </h1>
          </section>
        </section>
        <section className="newbie">
          <section className="top_box">
            <section className="lt_title">
              <strong className="text">新手指南</strong>
              <img
                className="help_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png"
                alt="help_icon"
              />
            </section>
            <section className="rt_more" onClick={() => moreClick('8')}>
              查看更多{'>'}
              {'>'}
            </section>
          </section>
          <section className="grid_box">
            {helpLists.map((item) => {
              return item.help_category_id === 8 ? (
                <span className="item" key={item.id}>
                  {item.title}
                </span>
              ) : (
                ''
              )
            })}
          </section>
        </section>
        <section className="newbie">
          <section className="top_box">
            <section className="lt_title">
              <strong className="text">常见问题</strong>
              <img
                className="help_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png"
                alt="help_icon"
              />
            </section>
            <section className="rt_more" onClick={() => moreClick('9')}>
              查看更多{'>'}
              {'>'}
            </section>
          </section>
          <section className="grid_box">
            {helpLists.map((item) => {
              return item.help_category_id === 9 ? (
                <span className="item" key={item.id}>
                  {item.title}
                </span>
              ) : (
                ''
              )
            })}
          </section>
        </section>
        <section className="video">
          <section className="title">
            <span>视频介绍</span>
            <img
              className="help_icon"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png"
              alt="help_icon"
            />
          </section>
          <video
            width="100%"
            className="video_dom"
            autoPlay
            loop
            src={
              type == '4'
                ? 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/student.mp4'
                : 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/teacher.mp4'
            }
          ></video>
        </section>
      </main>
      <AI_footer />
    </div>
  )
}
