import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components'
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

  // getRandom 
  // will grab random image 




  // Styling woot

  const TopDiv = styled.div `
    width: 100%;
    align-items: center;
    border: 3px solid black;
    border-bottom: 2px solid red;
    background-color: black;
    color: white;
    font-size: larger;

    &:hover{
      transition: all 0.4s ease-in-out;
      transform: scale(1.1);
      color: red;
    }

    &::before {
      content: '👾👾👾👾👾';
    }
    &::after {
      content: '👽👽👽👽👽'
    }
  `

  const ImageDiv = styled.div`
    background-color: black;
    
  `
  const DetailsDiv = styled.div`
    background-color: black;
    color:white;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      width: 80%;
      text-align: center;
      font-size: larger;
    }
  `
  const ButtonDiv = styled.div`
    background-color: black;
    font-size: larger;
    width: 100%;
    color:white;
    padding-top: 3%;
    padding-bottom: 3%;

    button {
      justify-content: center;
      align-items: center;
    }
    button:hover::before {
      content: '🚧 UNDER CONSTRUCTION 🚧';
    }
    button:hover::after {
      content: '🚧 UNDER CONSTRUCTION 🚧'
    }
  `






  return (
    <div className="App">
      <TopDiv>
        <p>
          Daily Space Photo! <br/>
          {space.date}
        </p>
        <p>
          {space.title} <br/>
          &copy; {space.copyright}
        </p>
      </TopDiv>
      <ImageDiv>
        <img src={space.url} alt="space"></img>
      </ImageDiv>
      <DetailsDiv>
        <p>
          Details: <br/> <br/>
          {space.explanation}
        </p>
      </DetailsDiv>
      <ButtonDiv>
        <button> 🚀 Get random Picture 🚀 </button>
      </ButtonDiv>
      

    </div>
  );
}

export default App;
