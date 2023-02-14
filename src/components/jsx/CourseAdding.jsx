import React from 'react'
import './../Css/CourseAdding.css'
function CourseAdding() {
    const submitcourseadding = () =>{
        alert("Hozrcha web sayt test rejimida yozilish uchun \n\n\n\n Tel: 95-899-55-00 \n raqaminga qong'iroq qiling")
    }
    return (
        <div>
            <div className="CourseAdding">
                <form action="">
                    <h1 className='courseaddingh1'>Ushbu formani to'ldiring biz siz bilan aloqga chiqamiz</h1>
                    <input type="text" placeholder='Ismingiz' required />
                    <input type={'number'} placeholder='Telefon raqamingiz' required />
                    <select name="CouseName" id="CouseName">
                        <option value="rus">rus</option>
                        <option value="rus">Ingiliz</option>
                        <option value="rus">Matematika</option>
                    </select>
                    <button onClick={submitcourseadding}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CourseAdding