import {createContext, useContext, useState, useEffect} from 'react';

const PeopleContext = createContext();
const url = "https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact"

export const PeopleProvider = ({children}) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setPeople(jsonData);
          console.log(jsonData)
        };
        fetchData();
      }, []);

      return (
        <PeopleContext.Provider value={{people, setPeople}}>
            {children}
        </PeopleContext.Provider>
      )
}

export default PeopleProvider

export const usePeople = () => {
    return useContext(PeopleContext);
}