import React, { useState } from 'react'
import './../Css/library.css'
import books1 from './../img/image1.png'
function Library() {
  const [ingiliz, setIngiliz] = useState(true)
  const [rus, setRus] = useState(false)
  const [matematika, setMatematika] = useState(false)

  const ingilizClick = () => {
    setIngiliz(prev => !prev)
  }
  const RusClick = () => {
    setRus(prev => !prev)
  }
  const MatematikaClick = () => {
    setMatematika(prev => !prev)
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '15px 0', fontFamily: 'sans-serif', textTransform: 'lowercase', fontWeight: '900' }}>Library</h1>
      <div className="Library">
        <div className="Books">

          <div className="categoriesMath Ingiliz_Tili">
            <h2 onClick={ingilizClick}>ingiliz tili {ingiliz?<i class="fa fa-angle-up" aria-hidden="true"></i>:<i class="fa fa-angle-down" aria-hidden="true"></i>}</h2>
            {
              ingiliz ? (
                <div className="Aksiyalar">

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                </div>
              ) : ''
            }
          </div>
          <div className="categoriesMath Rus_Tili">
            <h2 onClick={RusClick}>Rus tili {rus?<i class="fa fa-angle-up" aria-hidden="true"></i>:<i class="fa fa-angle-down" aria-hidden="true"></i>}</h2>
            {
              rus ? (
                <div className="Aksiyalar">

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                </div>
              ) : ''
            }
          </div>
          <div className="categoriesMath Matematika">
            <h2 onClick={MatematikaClick}>Matematika {matematika?<i class="fa fa-angle-up" aria-hidden="true"></i>:<i class="fa fa-angle-down" aria-hidden="true"></i>}</h2>
           
            {
              matematika ? (
                <div className="Aksiyalar">

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
                  </div>

                  <div className="aksiya">
                    <img src={books1} alt="" />
                    <h3>Kitob nomi</h3>
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

export default Library