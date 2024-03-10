import React from "react";
import Visa from './../../img/icons/visa.svg';
import Mir from './../../img/icons/mir.svg';
import MasterCard from './../../img/icons/MasterCard.svg';
import WhatsApp from './../../img/icons/whatsapp.svg';
import Telegram from './../../img/icons/telegram.svg';
import VK from './../../img/icons/vk.svg';



import './footer.css';
import './../../styles/main.css';
import './../../styles/reset.css';

const Footer = () => {
    return(
        <div>
        
        <footer className="footer">
            <div className="footer__container">
                <div className="payment__method">
                    <div className="pay__title">
                        <h1 className="sposobop">Способо оплаты</h1>
                    </div>
                    <div className="means__of-payment">
                        <img className="znak" src={Visa} alt="" />
                        <img className="znak" src={Mir} alt="" />
                        <img className="mastercard" src={MasterCard} alt="" />
                    </div>
                    <div className="working__hours">
                    <p className="vremya">
                        Время работы
                        10:00 - 23:00
                    </p>    
                </div>
                </div>
                <div className="contact">
                    <h1 className="contacts">Контакты</h1>
                    <ul className="contact__list">
                        <li className="number1">8 (383) 333 33</li>
                        <li className="number2">8 (383) 333 33</li>      
                    </ul>    
                </div>
                <div className="social__icons">
                    <img className="soc" src={WhatsApp} alt="" />
                    <img className="soc" src={Telegram} alt="" />    
                    <img className="soc" src={VK} alt="" />    
                </div>            
            </div>
        </footer>


        </div>
    )
}

export default Footer