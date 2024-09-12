import { useState } from "react";
import { useEffect } from "react";

export default function Filters(props) {
  const { contacts, setFilteredContacts, setDisplayFilteredContacts } = props;
  const [cities, setCities] = useState([]);

  const getCities = () => {
    const allCities = contacts && contacts.map((contact) => contact.city.trim().toUpperCase())
    const noRepetitions = [] 
    allCities.map((city) => {(!noRepetitions.includes(city) && noRepetitions.push(city)) 
      console.log(noRepetitions)} )
    setCities(noRepetitions)
  };

  useEffect(getCities, [contacts]);

  const filterByCity = (city) => {
    if (city === "display all") {
      setDisplayFilteredContacts(false);
    } else {
    setFilteredContacts(contacts.filter((c) => c.city.toUpperCase() === city));
    setDisplayFilteredContacts(true);
    }
  };

  return (
    <>
      <div>
        <h2>Filter by city</h2>
        <select onChange={(e) => filterByCity(e.target.value)}>
          <option>display all</option>
          {cities &&
            cities.map((city, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
