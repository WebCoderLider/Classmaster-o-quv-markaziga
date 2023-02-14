import React, { useState } from 'react'
import './../Css/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    const clickbtn = () => {
        // Navigatotrs__show
        const Navigatotrs__show = document.getElementById('Navigatotrs__show')
        Navigatotrs__show.classList.toggle('Navigatotrs__show')
    }
    const [aboutClass, setAboutClass] = useState(false)
    const aboutClassMaster = () => {
        setAboutClass(prev => !prev)
    }
    return (
        <div>
            <nav className="Navbar">
                <div className="Media__Logo">
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}><b>classmaster</b></Link>
                    <button onClick={clickbtn}><i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>
                <ul className="Navigators" id='Navigatotrs__show'>
                    <li onClick={aboutClassMaster} className="Navbar__list"><Link to=''>about</Link></li>
                    <li className="Navbar__list"><Link to='/books'>library</Link></li>
                    <li className="Navbar__list"><Link to='/news'>news</Link></li>
                    <li className="Navbar__list"><Link to='/course'>course</Link></li>
                    <li className="Navbar__list"><Link to='/mentors'>mentors</Link></li>
                    <li className="Navbar__list"><Link to='/blog'>galereya</Link></li>
                    <li className="Navbar__list"><Link to='/contactus'>contactus</Link></li>
                </ul>
            </nav>

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

export default Navbar