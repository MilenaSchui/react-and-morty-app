import './App.css';
import styled from 'styled-components';
import {useState, useEffect} from "react";
// import Card from './Components/Card/Card';


function App() {

  const [dataBase, setDataBase] = useState([])
  
  useEffect(() => {
    async function fetchData(URL){
    const response = await fetch(URL)
    const data = await response.json()
    setDataBase(data["results"])
    }
    fetchData("https://rickandmortyapi.com/api/character")

    }, [])

  

  
  return (
    <div className="App">
      <Headline>React and Morty App</Headline>     
      
      <Main>
        {dataBase.map((character) => {
          return <Card>
          <Image src={character.image}/>
          <h2>{character.name}</h2>
          </Card>
        })}
        
      </Main>
      <NavBar>
        <p>Home</p>
        <p>Favorite</p>
        <p>Random</p>
        <p>Other</p>
      </NavBar>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  padding-top: 10px;
  top: 0;
  margin: 0;
  height: 60px;
  width: 100%;
  position: fixed;
  text-transform: lowercase;
  color: #FFFDED;
  background: #140F2D;
`;

const Main = styled.div`
  background: #717C89;
`;

const Card = styled.div`
  // border: 1px solid black;
  width: 80%;
  margin: 10px auto;
  max-width: 400px;
  overflow: hidden;
  color: #FFFDED;
  background: #FFB17A;
`;

const Image = styled.img`
  width: 100%;
  border: 4px solid #FFFDED;
`;

const NavBar = styled.footer`
display: flex;
justify-content: space-around;  
height: 50px;
width: 100%;
position: fixed;
bottom: 0;
color: #FFFDED;
background: #140F2D;
`;

