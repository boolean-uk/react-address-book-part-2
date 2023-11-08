import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [theContactData, setTheContactData] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const theUrl = "https://boolean-api-server.fly.dev/Hayor4real/contact";

  function fetchAndSetContactData() {
    fetch(theUrl)
      .then((res) => res.json())
      .then((data) => {
        setTheContactData(data);
        setFetchData(false);
      });
  }
  useEffect(() => {
    fetchData && fetchAndSetContactData();
  }, [fetchData]);

  return <>|</>;
}

export default App;
