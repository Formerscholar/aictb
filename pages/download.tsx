import '@/styles/download.less'
import { Carousel } from 'antd'
import { down_list } from '@/conf'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))

function Download() {
  return (
    <div id="download">
      <AI_header title="应用下载" currentIndex={1} />
      <main>
        <section className="Showdownload">
          <section className="lt_warp">
            <section className="tp_box">
              <strong className="title">
                <img
                  className="logo_download"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/logo_download.png"
                  alt="logo_download"
                />
                <span className="text">AI错题宝</span>
              </strong>
              <em className="tip">变错为宝，让学习提升更高效！</em>
            </section>
            <section className="bt_box">
              <img
                className="DownloadQRcode"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/DownloadQRcode.png"
                alt="DownloadQRcode"
              />
              <section className="btns">
                {/* <section className="iphone_download">
                  <i className="iphone_icon"></i>
                  <strong className="iphone_text">iPhone下载</strong>
                </section> */}
                <a
                  href="https://www.aictb.com/static/apk/android.apk"
                  target="_blank"
                  className="android_download"
                >
                  <i className="android_icon"></i>
                  <strong className="android_text">Android下载</strong>
                </a>
              </section>
            </section>
          </section>
          <section className="rt_warp">
            <Carousel autoplay dots={false}>
              <section className="item">
                <img
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/download/1.png"
                  alt="banner"
                />
              </section>
              <section className="item">
                <img
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/download/2.png"
                  alt="banner"
                />
              </section>
              <section className="item">
                <img
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/download/3.png"
                  alt="banner"
                />
              </section>
              <section className="item">
                <img
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/download/4.png"
                  alt="banner"
                />
              </section>
              <section className="item">
                <img
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/download/5.png"
                  alt="banner"
                />
              </section>
            </Carousel>
          </section>
        </section>
        {down_list.map((item, idx) => {
          return (
            <section className="lists" key={idx}>
              {item.isrt ? (
                <>
                  <section className="text_box">
                    <strong className="title">{item.title}</strong>
                    <em className="tip">{item.content}</em>
                  </section>
                  <img src={item.img} alt={item.title} />
                </>
              ) : (
                <>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ height: '21.6875rem' }}
                  />
                  <section className="text_box rt_text">
                    <strong className="title">{item.title}</strong>
                    <em className="tip">{item.content}</em>
                  </section>
                </>
              )}
            </section>
          )
        })}
      </main>
      <AI_footer />
    </div>
  )
}

export default Download
