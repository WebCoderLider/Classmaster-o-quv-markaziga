import React from 'react'
import './../Css/ContactUs.css'
function ContactUs() {
  const contactUsClickForm = () =>{
    alert("Kechirasiz web sayt vaqtincha test rejimida ishlamoqda bog'lanish uchun \n\n\nTel: 33-532-55-00\n raqamiga qong'iroq qiling")
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '55px 0', fontFamily: 'sans-serif', textTransform: 'lowercase', fontWeight: '900' }}>ContactUs</h1>
      <div className="ContactUs">
        <form action="">
          <input type="text" placeholder='Ismingiz...' name='Ismi' id='name' />
          <input type={'number'} placeholder='yoshingiz' name="yoshi" id="age" /><br />
          <input type="number" placeholder='Telefon raqamingiz...' name='telefon raqami' id='phone_number' /><br />
          <input type="text" placeholder='Xabaringizni kiriting...' name='xabar' id='message' /><br />
          <button type={'submit'} onClick={contactUsClickForm}>Send</button>
        </form>
        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10199.221900672284!2d60.9959313762106!3d41.55150410490908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8604a00892a0aa97!2sClassMaster%20Filial!5e1!3m2!1sru!2snl!4v1675479698925!5m2!1sru!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default ContactUs