import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const Backend = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB7aEwnysMKvUS18U8y4NwrXN97OVVPFX4",
        authDomain: "test-82126.firebaseapp.com",
        databaseURL: "https://test-82126-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "test-82126",
        storageBucket: "test-82126.appspot.com",
        messagingSenderId: "856161310822",
        appId: "1:856161310822:web:e8f01d55f25146c09cb5a7",
        measurementId: "G-JGTHS83QQF"
    };
    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    const cinemaRef = ref(database, 'cinemas/cinema1');
    
    const handleSeatClick = (seatNumber) => {
      const selectedSeatsRef = ref(database, 'cinemas/cinema1/selectedSeats');
      
      onValue(selectedSeatsRef, (snapshot) => {
        const selectedSeats = snapshot.val();
        
        if (selectedSeats.includes(seatNumber)) {
          set(selectedSeatsRef, selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
          set(selectedSeatsRef, [...selectedSeats, seatNumber]);
        }
      });
    };
    
    {Array(5).fill(null).map((_, i) => (
        <img key={i} src={Oval} alt="oval" onClick={() => handleSeatClick(26 + i)} className={selectedSeats.includes(26 + i) ? "selected" : ""} />
    ))}
        
}

export default Backend

