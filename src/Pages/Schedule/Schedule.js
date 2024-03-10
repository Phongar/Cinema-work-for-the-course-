import React from 'react';
import Mone from "./../../img/SheduleImg/mone.png";
import Desc from "./../../img/SheduleImg/descImg.png";
import Swell from "./../../img/SheduleImg/descImg2.png";
import Swamp from "./../../img/SheduleImg/descImg3.png";
import Ruble from "./../../img/icons/ruble.svg";

import Footer from "./../../Components/Footer/Footer";


import './../../styles/main.css';
import './../../styles/reset.css';
import './shedule.css';


const Schedule = () => {
    return(
        <div>
        
        {/* фон распиcания */}
        <main>
            <div className="schedule">
                <div className="schedule__container">
                    <div className="schedule__title">
                        <h1>Клод Моне: Магия воды и света</h1>
                    </div>
                    <div className="schedule__sub-img">
                        <img className='img__shedule' src={Mone} alt="" />
                    </div>
                </div>
            </div>
        </main>

        {/* Описание фильма */}
        <main className='shedule__fon'>
            <div className="schedule__desc">
                <div className="schedule__desc-container">
                    <div className="shedule__sub-desc">
                        <div className="film__desc">
                            <button className="two__D light">
                                2D     
                            </button>
                            <button className="russian__subs water">
                                Документальный   
                            </button>      
                        </div>
                        <div className="schedule__text">
                            <p className='zlitely'>Зрителей ждет путешествие по коллекциям парижских музеев Орсе, 
                               Оранжери и Мармоттан, где выставлены работы прославленного художника, 
                                а также вылазка в усадьбу Клода Моне в Живерни,
                                в саду которой рождались произведения, 
                                оказавшие сильное влияние на мировое искусство.
                            </p>
                        </div>
                        <div className="desc__img">
                            <img className='cart' src={Desc} alt="" />
                            <img className='cart' src={Swell} alt="" />
                            <img className='cart' src={Swamp} alt="" />
                        </div>
                        <div className="date__block">
                            <div className="schedule__date">
                                <span>17 декабря</span>
                            </div>
                            <div className="clod__block clod__block-schedule">
                                    <div className="clod__sub-container">
                                    <div className="clod__card">
                                        <div className="clod__card-container">
                                        <div className="clod__time">
                                            <span>17:00</span>
                                        </div>
                                        <div className="clod__price">
                                            <span>350</span>
                                            <img className="ruble" src={Ruble} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="clod__card clod__card-second">
                                    <div className="clod__card-container">
                                        <div className="clod__time">
                                            <span>19:00</span>
                                        </div>
                                        <div className="clod__price">
                                            <span>300</span>
                                            <img className="ruble" src={Ruble} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="clod__card clod__card-third">
                                    <div className="clod__card-container">
                                        <div className="clod__time">
                                            <span>21:00</span>
                                        </div>
                                        <div className="clod__price">
                                            <span>350</span>
                                            <img className="ruble" src={Ruble} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


        <Footer />
        </div>
    )
}

export default Schedule