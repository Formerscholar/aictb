import '@/styles/helplist.less'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))
import { Input, message } from 'antd'
import { gethelpsTypeDetail } from '@/services/public'
import { useState } from 'react'

const { Search } = Input

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          type: ['8', '3'],
        },
      },
      {
        params: {
          type: ['9', '3'],
        },
      },
      {
        params: {
          type: ['8', '4'],
        },
      },
      {
        params: {
          type: ['9', '4'],
        },
      },
    ],
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { type } = params
  console.log(type)

  const { code, data, msg } = await gethelpsTypeDetail({
    type: type[1],
  })
  if (code !== 200) {
    message.error(msg)
  }

  return {
    props: {
      type: type[0],
      list: data,
    },
  }
}

export default function List(props) {
  const { list, type } = props
  const [typeCurrent, setTypeCurrent] = useState(type)
  const [isDel, setisDel] = useState(false)
  const [delId, setDelId] = useState('0')

  const onSearch = (value) => console.log(value)

  const setType = (typeId) => {
    setisDel(false)
    setTypeCurrent(typeId.toString())
  }

  const showDeatail = (iid) => {
    setDelId(iid)
    setisDel(true)
  }

  return (
    <div id="Student">
      <AI_header title="帮助中心" currentIndex={2} />
      <main>
        <section className="banner"></section>
        <section className="search_box">
          <Search
            className="search"
            placeholder="查找您需要的内容"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
          />
        </section>
        <section className="main_body">
          <div className="lt_warp">
            {list?.helpsType.map((item) => {
              return (
                <div
                  className={
                    item.id == typeCurrent ? 'lt_item current' : 'lt_item'
                  }
                  key={item.id}
                  onClick={() => setType(item.id)}
                >
                  {item.name}
                </div>
              )
            })}
          </div>
          <div className="rt_box">
            {!isDel
              ? list.helpsList.map((item) => {
                  return item.help_category_id == typeCurrent ? (
                    <div className="ri_item" key={item.id}>
                      <div
                        className="title"
                        onClick={() => showDeatail(item.id)}
                      >
                        {item.title}
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></div>
                    </div>
                  ) : (
                    ''
                  )
                })
              : list.helpsList.map((item) => {
                  if (item.id == delId) {
                    return (
                      <div className="ri_item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div
                          className="content"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    )
                  }
                })}
          </div>
        </section>
      </main>
      <AI_footer />
    </div>
  )
}
