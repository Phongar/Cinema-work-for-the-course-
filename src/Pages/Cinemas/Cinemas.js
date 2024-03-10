import React, { useState } from "react";
import Screen from "./../../img/CinemaImg/screen.png";
import Oval from "./../../img/icons/oval.svg";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

import Footer from "../../Components/Footer/Footer";

import './cinemas.css';
import './../../styles/main.css';
import './../../styles/reset.css';

const Cinemas = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const firebaseConfig = {
        apiKey: "AIzaSyB7aEwnysMKvUS18U8y4NwrXN97OVVPFX4",
        authDomain: "test-82126.firebaseapp.com",
        databaseURL: "https://test-82126-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "test-82126",
        storageBucket: "test-82126.appspot.com",
        messagingSenderId: "856161310822",
        appId: "1:856161310822:web:0213e876b0abbfa29cb5a7",
        measurementId: "G-8C88SSP12T"
    };

    // Инициализируем приложение Firebase и базу данных Firestore
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Функция для обработки клика по месту
    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    }

    // Функция для отправки выбранных мест в базу данных Firestore
    const handleBookSeats = async () => {
        try {
            // Отправляем каждое выбранное место в базу данных Firestore
            await Promise.all(selectedSeats.map(async (seatNum) => {
                await addDoc(collection(db, "bookings"), {
                    seat: seatNum,
                    timestamp: serverTimestamp()
                });
            }));

            console.log("Seats booked successfully!");
            setSelectedSeats([]); // Очищаем выбранные места

        } catch (error) {
            console.error("Error booking seats: ", error);
        }
    };

    return (
        <div>
            <main>
                <div className="cinema">
                <div className="cinema__container">
                    <div className="cinema__name">
                        <div className="cinema__title">
                            <h1>Клод Моне: Магия воды и света</h1>
                        </div>
                        <div className="film__desc cinema__desc">
                            <button className="two__D light">
                                2D     
                            </button>
                            <button className="russian__subs water">
                                Документальный   
                            </button>      
                        </div>
                        <div className="cinema__info">
                            <div className="cinema__info-container">
                                <div className="cinema__address">
                                    <p>Новосибирск, Центральный район, <span>ул. Мичурина, д3</span></p>
                                </div>
                                <div className="cinema__date">
                                    <p>15 декабря, пятница, в 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <main>
                <div className="room">
                    <div className="room__container">
                        <div className="room__img">
                            <img className="img_kino" src={Screen} alt="" />
                        </div>
                        <div className="places">
                            <div className="number">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                            </div>
                            <div className="places__container">
                                {[...Array(30)].map((_, index) => (
                                    <img
                                        width={60}
                                        height={60}
                                        key={index + 1}
                                        src={Oval}
                                        alt="oval"
                                        onClick={() => handleSeatClick(index + 1)}
                                        className={`oval__img-img ${selectedSeats.includes(index + 1) ? "selected" : ""}`}
                                    />
                                ))} 
                            </div>
                        </div>
                        <div className="free__space">
                            <div className="free__area">
                                <img className="adaptiv__oval" src={Oval} alt="" />
                            </div>
                            <div className="area__title">
                                <h1>Свободно</h1>
                            </div>
                        </div>
                        <div className="btn cinema__btn">
                            {/* Кнопка для покупки билета */}
                            <button className="film__btn" onClick={handleBookSeats}>Купить Билет</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Cinemas;