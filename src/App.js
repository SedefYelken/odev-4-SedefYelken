import "./App.css";
import Dropdown from "./components/dropdown";
import Weather from "./components/weather";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("Adana");
  return (
    <div className="App">
      <div>
        <Dropdown
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      <div>
        <Weather selectedCity={selectedCity}></Weather>
      </div>
    </div>
  );
}

export default App;
