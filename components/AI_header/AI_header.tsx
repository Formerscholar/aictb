import Head from 'next/head'
import Link from 'next/link'
import './index.less'
import { navText } from '@/conf'

function AI_header(props) {
  const { title, currentIndex } = props

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 ,viewport-fit=cover, minimal-ui "
        />
        <meta name="renderer" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="description"
          content="一款人工智能技术的K12教育应用平台，基于学生收集错题数据为依托，解决提高日常教学精度为目的，从而实现在互联网+条件下的个性化教学新模式。"
        />
        <meta name="keywords" content="AI-错题宝" />
        <meta name="robots" content="index,follow" />
        <meta name="apple-mobile-web-app-title" content="AI-错题宝" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-itunes-app"
          content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"
        />
        <meta name="format-detection" content="telphone=no, email=no" />
        <meta name="renderer" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="full-screen" content="yes" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="browsermode" content="application" />
        <meta name="x5-page-mode" content="app" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="author" content="chad, 2319315514@qq.com" />
        <meta name="msapplication-TileColor" content="#000" />
        <title>AI-错题宝 {title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css"
          integrity="sha256-X7rrn44l1+AUO65h1LGALBbOc5C5bOstSYsNlv9MhT8="
          crossOrigin="anonymous"
        ></link>
      </Head>
      <header>
        <section className="box_warp">
          <section className="logo_box">
            <img
              className="logo"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/logo.png"
              alt="logo"
            />
            <section className="border"></section>
            <img
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/tip.png"
              alt="tip"
              className="tip"
            />
          </section>
          <section className="navLink">
            <nav>
              {navText.map((item, idx) => (
                <strong
                  className={currentIndex == idx ? 'current' : ''}
                  key={idx}
                >
                  <Link href={item.page}>{item.title}</Link>
                </strong>
              ))}
            </nav>
            <section>
              <a href="http://teacher.aictb.com/" target="_blank">
                老师管理平台
              </a>
            </section>
          </section>
        </section>
      </header>
    </>
  )
}

export default AI_header
