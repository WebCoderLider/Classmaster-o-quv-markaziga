import React from 'react'
import './../Css/amenities.css'
import amenitie from './../img/amenitie.png'
function Amenities() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px 0', fontFamily: 'sans-serif', textTransform: 'lowercase', fontWeight: '900' }}>amenities</h1>
            <div className="amenities">
                <div className="amenitie__one amenitie">
                    <div className="amenitie__img">
                        <i className="fa-solid fa-wifi"></i>
                    </div>
                    <h4>WiFi</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
                <div className="amenitie__two amenitie">
                    <div className="amenitie__img">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <h4>Coworking zona</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
                <div className="amenitie__there amenitie">
                    <div className="amenitie__img">
                        <i class="fa-solid fa-mug-saucer"></i>
                    </div>
                    <h4>Kofe</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
                <div className="amenitie__four amenitie">
                    <div className="amenitie__img">
                        <i class="fas fa-video"></i>
                    </div>
                    <h4>Online darslar</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
                <div className="amenitie__five amenitie">
                    <div className="amenitie__img">
                        <i class="fa-sharp fa-solid fa-burst"></i>
                    </div>
                    <h4>Chegirmalar</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
                <div className="amenitie__six amenitie">
                    <div className="amenitie__img">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <h4>Sovg'alar</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas corrupti, vel excepturi dicta at. In earum dignissimos voluptates iusto suscipit omnis praesentium ab rem ex inventore?</p>
                </div>
            </div>
        </div>
    )
}

export default Amenities