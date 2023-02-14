import React from 'react'
import './../Css/Footer.css'
import onefooterlogo from './../img/cm.png'
function Footer() {
    const FormfooterClick = () => {
        alert("Hozrcha web sayt test rejimida bo'lganligi uchun \n\n\n\n Tel: 95-899-55-00 \n raqaminga qong'iroq qiling")
    }
    return (
        <div>
            <footer>
                <div className="Footer">
                    <div className="OneFooter footer_children">
                        <h4>Bog'lanish</h4>
                        <br />
                        <a href="tel: +998958995500"><i class="fas fa-phone" aria-hidden="true"></i> 95-899-55-00</a><br />
                        <a href="tel: +998335325500"><i class="fas fa-phone" aria-hidden="true"></i> 33-532-55-00</a>
                    </div>
                    <div className="TwoFooter footer_children">
                        <a href="https://t.me/classmaster95">
                            <div className="telegram">
                                <i class="fab fa-telegram" aria-hidden="true"></i>
                                Telegram
                            </div>
                        </a>
                        <a href="https://t.me/classmaster95">
                            <div className="Instagram">
                                <i class="fab fa-instagram" aria-hidden="true"></i>
                                Instagram
                            </div>
                        </a>
                        <a href="https://t.me/classmaster95">
                            <div className="Youtube">
                                <i class="fab fa-youtube" aria-hidden="true"></i>
                                YouTube
                            </div>
                        </a>
                    </div>
                    <div className="ThereFooter footer_children">
                        <h4>xabar qoldirish</h4>
                        <form action="">
                            <input type="text" placeholder='Ismingiz' name='Ismi' />
                            <input type="text" placeholder='Ttelefon raqam' name='Telefon raqami' />
                            <button type={'submit'} onClick={FormfooterClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer