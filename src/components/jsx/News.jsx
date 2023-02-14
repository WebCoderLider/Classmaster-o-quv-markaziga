import React, { useState } from 'react'
import './../Css/News.css'
import img from './../img/classmaster.jpg'
function News() {
  const [chegrma, setChegrma] = useState(true)
  const chegirmalarNews = () => {
    setChegrma(prev => !prev)
  }
  const [yutuqlar, setYutuqlar] = useState(false)
  const YutuqlarNews = () => {
    setYutuqlar(prev => !prev)
  }
  return (
    <div>
      <h1 className='chegirmah1' onClick={chegirmalarNews}><button className='btnchegirma'>chegirmalar {chegrma ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button> </h1>
      <div className="NewsPage">
        <div>
          {
            chegrma ? (
              <div className="Aksiyalar">

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Aksiya nomi</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

              </div>
            ) : ''
          }
        </div>
      </div>
      <h1 className='chegirmah1' onClick={YutuqlarNews}><button className='btnchegirma'>Yutuqlar {yutuqlar ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button> </h1>
      <div className="YutuqqaErishganlar">
      <div className="NewsPage">
        <div>
          {
            yutuqlar ? (
              <div className="Aksiyalar">

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

                <div className="aksiya">
                  <img src={img} alt="" />
                  <h3>Yutuqlar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad quisquam natus vero doloribus, debitis itaque ducimus saepe laborum assumenda quod, perspiciatis modi nesciunt aperiam adipisci tempore minus totam unde.</p>
                </div>

              </div>
            ) : ''
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default News