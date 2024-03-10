import React from "react";
import EventImg from "./../../img/EventImg/card.png";
import EventImg2 from "./../../img/EventImg/card2.png";
import EventImg3 from "./../../img/EventImg/card3.png";

import Arm from "./../../img/EventImg/arm.png";
import Walker from "./../../img/EventImg/walker.png";
import People from "./../../img/EventImg/people.png";

import Footer from "./../../Components/Footer/Footer";



import './events.css';
import './../../styles/main.css';
import './../../styles/reset.css';

const Events = () => {
    return(
        <div>
        
        <main>
            <div className="event">
                <div className="event__container">
                    <div className="event__title">
                        <h1 className="sobitia">События</h1>
                    </div>
                    <div className="event__cards">
                        <div className="event__cards-container">
                            <div className="event__card-title">
                                <h1 className="soon">Скоро в кино</h1>
                            </div>
                            <div className="event__sub-container">
                                <div className="event__img1">
                                    <div className="card__img">
                                        <img className="img_event" src={EventImg} alt="" />
                                    </div>
                                    <div className="event__desc">
                                        <p className="boy_bird">Мальчик и птица</p>
                                    </div>
                                </div>
                                <div className="event__img2">
                                    <div className="card__img">
                                        <img className="img_event" src={EventImg2} alt="" />
                                    </div>
                                    <div className="event__desc-fr">
                                        <p className="ferrari">Феррари</p>
                                    </div>
                                </div>
                                <div className="event__img3">
                                    <div className="card__img">
                                        <img className="img_event" src={EventImg3} alt="" />
                                    </div>
                                    <div className="event__desc-mercenary">
                                        <p className="mercerary">Последний наемник</p>
                                    </div>
                                </div>
                            </div>


                            <div className="news">
                                <div className="news__container">
                                    <div className="news__cards">
                                        <div className="news__title">
                                            <h1 className="news_h1">Новости</h1>
                                        </div>
                                        <div className="news__sub-container">
                                            <div className="news__card">
                                                <div className="news__img">
                                                    <img className="news_img1" src={Arm} alt="" />
                                                </div>
                                                <div className="news__desc">
                                                    <p className="p_news">Дженна Ортега назвала второй сезон "Уэнсдэй" "более мрачным"</p>
                                                </div>
                                            </div>

                                            <div className="news__card">
                                                <div className="news__img">
                                                    <img className="news_img2" src={Walker} alt="" />
                                                </div>
                                                <div className="news__desc">
                                                    <p className="p_news">Дженна Ортега назвала второй сезон "Уэнсдэй" "более мрачным"</p>
                                                </div>
                                            </div>

                                            <div className="news__card">
                                                <div className="news__img">
                                                    <img className="news_img3" src={People} alt="" />
                                                </div>
                                                <div className="news__desc">
                                                    <p className="p_news">Дженна Ортега назвала второй сезон "Уэнсдэй" "более мрачным"</p>
                                                </div>
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

export default Events
