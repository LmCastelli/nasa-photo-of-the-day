import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [space, setSpace] = useState([]);

  useEffect(() => {
    const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=3G17yns5gZSwWbFKInHZRM0WDVVXIa8pkJcumR2o';
    axios.get(`${nasaURL}`)
    .then(res => {
      setSpace(res.data);
      console.log(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])









  return (
    <div className="App">
      <p>
        Daily Space Photo! <br/>
        {space.date}
      </p>
      <p>
        {space.title} <br/>
        &copy; {space.copyright}
      </p>
      <div className="img wrapper">
        <img src={space.url} alt="space"></img>
      </div>
      <div className='details'>
        <p>
          {space.explanation}
        </p>
      </div>

    </div>
  );
}

export default App;
