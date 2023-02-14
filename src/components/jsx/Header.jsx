import React, { useState } from 'react'
import './../Css/Header.css'
import img from './../img/header.png'
function Header() {
    const [aboutClass, setAboutClass] = useState(false)
    const aboutClassMaster = () => {
        setAboutClass(prev => !prev)
    }
    return (
        <div>
            <div className="Header">
                <div className="HeaderTexts">
                    <p>classmaster o'quv markazi haqida shu yerdam batafsil ma'lumot yig'a olasiz.</p>
                    <button onClick={aboutClassMaster}>Batafsil</button>
                </div>
                <div className="HeaderImg">
                    <img src={img} alt='' />
                </div>
            </div>

            {
                aboutClass ? (
                    <div className="classmaster_about">
                        <div className="about">
                            <div className="about_header">
                                <h4>classmaster haqida</h4>
                                <i onClick={aboutClassMaster} class="fa fa-close" aria-hidden="true"></i>
                            </div><hr />
                            <div className="about_body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut, porro officia quasi reprehenderit esse, laborum praesentium iste similique magnam maiores, magni doloremque assumenda tempora necessitatibus? Quas sed consequuntur necessitatibus distinctio dicta, eius fuga qui. Cupiditate assumenda maiores voluptatum esse sunt praesentium reprehenderit quod optio ex! Eveniet accusantium, est ea repellendus reprehenderit qui natus, doloribus recusandae voluptas vitae quibusdam, a aliquid dolorem! Quae ipsum est et corrupti omnis. Nam sunt libero, magnam fuga iusto fugiat rerum commodi nesciunt natus, ullam dicta! Voluptates doloremque maxime quam, nostrum nisi eos autem vel quod eveniet modi tenetur veritatis rem consectetur expedita debitis aliquam, animi adipisci! Delectus nobis temporibus cum sunt aperiam, obcaecati nisi facilis laudantium ipsa, id ea soluta alias quis officia dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : ''
            }


        </div>
    )
}

export default Header