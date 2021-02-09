import '@/styles/index.less'
import { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { HomeMain } from '@/conf'
import dynamic from 'next/dynamic'
const AI_header = dynamic(import('@/components/AI_header/AI_header'))
const AI_footer = dynamic(import('@/components/AI_footer/AI_footer'))

export default function Home() {
  const [ltIsAni, setLtIsAni] = useState(false)
  const [rtIsAni, setrtIsAni] = useState(false)

  const onLeave = (origin, destination, direction) => {
    console.log(origin, direction)

    const { index } = destination
    if (index === 0 || index === 2) {
      setLtIsAni(true)
      setrtIsAni(false)
    } else {
      setLtIsAni(false)
      setrtIsAni(true)
    }
  }

  const afterLoad = (origin, destination, direction) => {
    console.log(origin, direction)

    const { index } = destination
    if (index === 0 || index === 2) {
      setLtIsAni(true)
      setrtIsAni(false)
    } else {
      setLtIsAni(false)
      setrtIsAni(true)
    }
  }

  return (
    <div id="home">
      <AI_header title="首页" currentIndex={0} />
      <main>
        <ReactFullpage
          onLeave={onLeave}
          afterLoad={afterLoad}
          render={() => (
            <ReactFullpage.Wrapper>
              {HomeMain.map(
                ({ title, em, img, bg, leftIsText, className }, idx) => (
                  <section
                    key={idx}
                    className="section"
                    style={{ backgroundImage: `url(${bg})` }}
                  >
                    {leftIsText ? (
                      <>
                        <section
                          className={
                            ltIsAni
                              ? 'text_box animate__animated animate__backInLeft'
                              : 'text_box'
                          }
                        >
                          <h1>{title}</h1>
                          <em>{em}</em>
                        </section>
                        <img
                          className={
                            ltIsAni
                              ? className +
                                'img animate__animated animate__backInRight'
                              : className + 'img'
                          }
                          src={img}
                          alt="Show_img"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className={
                            rtIsAni
                              ? className +
                                'img animate__animated animate__backInLeft'
                              : className + 'img'
                          }
                          src={img}
                          alt="Show_img"
                        />
                        <section
                          className={
                            rtIsAni
                              ? 'text_box animate__animated animate__backInRight'
                              : 'text_box'
                          }
                        >
                          <h1>{title}</h1>
                          <em>{em}</em>
                        </section>
                      </>
                    )}
                    {idx === 3 && (
                      <section className="foot">
                        <AI_footer />
                      </section>
                    )}
                  </section>
                )
              )}
            </ReactFullpage.Wrapper>
          )}
        />
      </main>
    </div>
  )
}
