import { cities } from "./cities.js";

function Dropdown({ selectedCity, setSelectedCity }) {
  return (
    <div>
      <select
        className="dropdown"
        id="dropdown"
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
      >
        {cities.map((city) => (
          <option value={city.name} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
