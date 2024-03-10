import React from "react";
import Area from "./../../img/HistoryImg/historyImg.png";
import Place from "./../../img/HistoryImg/historyImg2.png";
import Mem from "./../../img/HistoryImg/historyImg3.png";
import Orson from "./../../img/HistoryImg/historyImg4.png";

import Footer from "../../Components/Footer/Footer";

import './history.css';
import './../../styles/main.css';
import './../../styles/reset.css';

const Info = () => {
    return(
        <div>
        
        {/* История */}
        <main>
            <div className="history">
                <div className="history__container">
                    <div className="history__title">
                        <h1 className="h1history">История 35 Мм</h1>
                    </div>
                    <div className="history__desc">
                        <div className="history__text">
                            <p className="parhist1">В тихом районе Новосибирска расположен небольшой кинотеатр, 
                                который уже несколько лет раюотает для вас. 
                                Молодая команда кинотеатра стремится создать атмосферу, 
                                в которой каждый гость может насладиться 
                                просмотром фильма в уютной и дружественной обстановке.
                            </p>
                        </div>
                        <div className="history__img">
                            <img className="img_history1" src={Area} alt="" />
                        </div>

                        <div className="history__text sub__text">
                            <p className="parhist2">Одним из основных преимуществ этого кинотеатра является его разнообразная программа. 
                                Здесь можно увидеть как новые блокбастеры, так и классические фильмы, 
                                представленные в оригинальной версии с субтитрами.<br /> 
                                Кинотеатр также регулярно организует специальные 
                                показы для ценителей независимого кино и проводит 
                                тематические вечера, посвященные определенным жанрам 
                                или режиссерам
                            </p>
                        </div>
                        <div className="history__img">
                            <img className="img_history2" src={Place} alt="" />
                            <img className="mem" src={Mem} alt="" />
                        </div>


                        <div className="history__text sub__text">
                            <p className="parhist3">     
                                Многие люди ценят его уникальный подход к показу фильмов и приходят сюда, 
                                чтобы открыть для себя что-то новое и интересное.<br />
                                Таким образом, этот молодой и не популярный кинотеатр из 
                                Новосибирска продолжает привлекать внимание своей разнообразной программой и 
                                дружественной атмосферой. 
                                Он становится местом, где можно насладиться качественным кино и 
                                провести время с друзьями или близкими людьми.
                             </p>
                        </div>
                        <div className="history__img">
                            <img className="img_history3" src={Orson} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>


        <Footer />
        </div>
    )
}

export default Info 