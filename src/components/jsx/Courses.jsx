import React from 'react'
import './../Css/Courses.css'
import course from './../img/course.jpg'
import {Link} from 'react-router-dom'
function Courses() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px 0', fontFamily: 'sans-serif', textTransform: 'lowercase', fontWeight: '900' }}>Course</h1>

            <div className="Courses">
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
                <div className="Course">
                    <div className="Course__img">
                        <h1><Link to="/CourseAdding">qoshilish</Link></h1>
                        <img src={course} alt="" />
                    </div>
                    <h4>Javascript</h4>
                    <b>Mentor:</b><b>Temur Makhmudov</b> <br />
                    <b>course fee:</b><b>12$</b><br />
                    <b>course duration:</b><b>48 hours</b> <br />
                </div>
            </div>
        </div>
    )
}

export default Courses