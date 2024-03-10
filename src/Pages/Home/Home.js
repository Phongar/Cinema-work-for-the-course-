import React from "react";
import Header from "../../Components/Header/Header";

import infoImg from "./../../img/HeaderImg/film-one.png";
import Ban from "./../../img/icons/free-icon-ban.svg";
import Time from './../../img/icons/time.svg';
import Ruble from "./../../img/icons/ruble.svg";
import Film from './../../img/HeaderImg/filmImg2.png';
import Intersect from './../../img/HeaderImg/Intersect.png';
import Place from './../../img/HeaderImg/place.png';

import Footer from "../../Components/Footer/Footer";


import './../../styles/main.css';
import './../../styles/reset.css';
import './home.css';

const Home = () => {
    return(
    <div>
    
    <Header />
    
  

     {/* Сейчас в кино */}
     <main>
        <div className="clod__mone">
            <div className="clod__container">
                <div className="clod__block">
                  
                </div>
                <div className="film__card">
                    <div className="film__card-container">
                        <div className="film__card-img  film__card-img-main">
                            <img src={infoImg} alt="filmImg" />
                        </div>
                        <div className="film__card-desc film__card-desc-main">
                            <div className="film__card-title film__card-title-main">
                                <h1>Сейчас в кино</h1>
                            </div>
                            <div className="film__main-title">
                                <h1>Сестра, действуй</h1>
                            </div>
                            <div className="film__card-text intersect film__card-text-main">
                                <p>
                                Пять отчаянных монахинь бросают себе вызов: 
                                выиграть в велогонке денежный 
                                приз для ремонта дома престарелых...
                                </p>
                            </div>
                            <div className="btn sub__film-main__btn">
                                <button>
                                    <a href="#!" className="film__btn">Купить Билет</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="limitations clod__lim">
                        <div className="limitations__container">
                            <div className="time-age">
                                <div className="time-age__img">
                                    <img src={Ban} alt="ban" />
                                </div>
                                <div className="age">
                                    <span>16+</span>
                                </div>
                                <div className="time">
                                    <img src={Time} alt="time" />
                                </div>
                                <div className="timestamp">
                                    <span>87мин</span>
                                </div>                                
                            </div>
                            <div className="film__desc">
                                <button className="two__D">
                                    2D     
                                </button>
                                <button className="russian__subs">
                                    Русские субтитры     
                                </button>
                                <button className="french__subs">
                                    На французком     
                                </button>      
                            </div>
                        </div>
                    </div>
                    <div className="film__date cold__date">
                        <span>20 декабря</span>
                    </div>
                </div>
            </div>
        </div>
    </main>


    {/* клод моне */}
    <main>
        <div className="clod__mone">
            <div className="clod__container">
                <div className="clod__block">
                    <div className="clod__sub-container">
                    <div className="clod__card sub__mone">
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
                    <div className="clod__card sub__mone">
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
                  </div>
                </div>
                <div className="film__card">
                    <div className="film__card-container">
                        <div className="film__card-img film__card-img-mone">
                            <img src={Film} alt="filmImg" />
                        </div>
                        <div className="film__card-desc">
                            <div className="film__card-title film__card-title-mone">
                                <h1>Клод Моне: Магия воды и света</h1>
                            </div>
                            <div className="film__card-text text-mone">
                                <p>Новый взгляд на творчество и судьбу великого 
                                    французкого жиописца Клода Моне отправит зрителей в
                                     незабываемое путешествие...
                                </p>
                            </div>
                            <div className="btn mone__btn">
                                <button>
                                    <a href="#!" className="film__btn">Купить Билет</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="limitations clod__lim">
                        <div className="limitations__container">
                            <div className="time-age">
                                <div className="time-age__img">
                                    <img src={Ban} alt="ban" />
                                </div>
                                <div className="age">
                                    <span>16+</span>
                                </div>
                                <div className="time">
                                    <img src={Time} alt="time" />
                                </div>
                                <div className="timestamp">
                                    <span>80мин</span>
                                </div>                                
                            </div>
                            <div className="film__desc">
                                <button className="two__D">
                                    2D     
                                </button>
                                <button className="russian__subs">
                                    Документальный   
                                </button>      
                            </div>
                        </div>
                    </div>
                    <div className="film__date cold__date">
                        <span>17 декабря</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

   
    {/* ИРОНИЯ */}
    <main>
        <div className="clod__mone">
            <div className="clod__container">
                <div className="clod__block">
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

                    <div className="clod__card clod__card-mone">
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

                    <div className="clod__card clod__card-mone">
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
                  </div>
                </div>
                <div className="film__card">
                    <div className="film__card-container">
                        <div className="film__card-img film__card-img-mone">
                            <img src={Intersect} alt="filmImg" />
                        </div>
                        <div className="film__card-desc">
                            <div className="film__card-title film__card-title-mone">
                                <h1>Великая Ирония</h1>
                            </div>
                            <div className="film__card-text text-ironia">
                                <p>
                                    Осенний париж особенно романтичен. 
                                    Словно по иронии судьбы, успешная, 
                                    но есчастная в браке 
                                    Фанни сталкивается там...
                                </p>
                            </div>
                            <div className="btn mone__btn ">
                                <button>
                                    <a href="#!" className="film__btn">Купить Билет</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="limitations clod__lim">
                        <div className="limitations__container">
                            <div className="time-age">
                                <div className="time-age__img">
                                    <img src={Ban} alt="ban" />
                                </div>
                                <div className="age">
                                    <span>16+</span>
                                </div>
                                <div className="time">
                                    <img src={Time} alt="time" />
                                </div>
                                <div className="timestamp">
                                    <span>97мин</span>
                                </div>                                
                            </div>
                            <div className="film__desc ironia-desc">
                                <button className="two__D">
                                    2D     
                                </button>
                                <button className="russian__subs">
                                    Русские субтитры  
                                </button>
                                <button className="russian__subs">
                                    На французком
                                </button>       
                            </div>
                        </div>
                    </div>
                    <div className="film__date cold__date">
                        <span>17 декабря</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    

    {/* Ближайший кинотеатр */}
    <main>
        <div className="address">
            <div className="address__container">
                <div className="clod__block">
                        <div className="clod__sub-container">
                        <div className="clod__card cinema__card">
                            <div className="clod__card-container">
                            <div className="clod__time">
                                <span>10:00</span>
                            </div>
                            <div className="clod__price">
                                <span>300</span>
                                <img className="ruble" src={Ruble} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="clod__card cinema__card">
                        <div className="clod__card-container">
                            <div className="clod__time">
                                <span>13:00</span>
                            </div>
                            <div className="clod__price">
                                <span>300</span>
                                <img className="ruble" src={Ruble} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="clod__card cinema__card">
                        <div className="clod__card-container">
                            <div className="clod__time">
                                <span>15:00</span>
                            </div>
                            <div className="clod__price">
                                <span>350</span>
                                <img className="ruble" src={Ruble} alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info__place">
                    <div className="info__place-container">
                        <div className="place__text">
                            <p>
                                <strong className="nearest">Ближайший</strong>
                                <span>35мм</span>
                                <strong className="nearest__cinema">кинотеатр</strong>
                                <span>Новосибирск, Центральный район</span>
                                <span className="place__address">ул.Мичурина,д3</span>
                            </p>
                        </div>
                        <div className="place__img">
                            <img src={Place} alt="" />
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

export default Home