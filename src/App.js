import "./App.css";
import Dropdown from "./components/dropdown";
import Weather from "./components/weather";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("Adana");
  return (
    <div className="App">
      <Dropdown selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Weather selectedCity={selectedCity}></Weather>
    </div>
  );
}

export default App;
