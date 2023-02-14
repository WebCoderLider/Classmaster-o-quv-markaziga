import React from 'react'
import { useState } from 'react'
import './../Css/Blog.css'
import {Link} from 'react-router-dom'
function Blog() {
  const [clickState, setClickState] = useState(true)
  const click = () => {
    setClickState(prev => !prev)
  }
  return (
    <>
      <div className="Container">
        <div>
          <h4><span onClick={click} className={clickState?'clickstate':''}>O'quv markaz</span> | <span onClick={click} className={clickState?'':'clickstate'}>Boshqa</span></h4>
          {
            clickState ? (
              <div className="BlogImg ClassMaster">

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/200`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

              </div>
            ) : (
              <div className="BlogImg Boshqa">

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

                <div className="card">
                  <img src={`https://picsum.photos/300/201`} alt="" />
                  <Link to="/">batafsil</Link>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Blog