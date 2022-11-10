import './App.css';
import styled from 'styled-components';
// import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header>React and Morty App</Header>     
      <Main>
        <Card>
        <Image src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>
        <h2>Morty Smith</h2>
        </Card>
      </Main>
      <NavBar>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </NavBar>
    </div>
  );
}



export default App;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 0;  
  height: 50px;
  width: 100%;
  position: fixed;
  text-transform: lowercase;
  color: #FFFDED;
  background: #140F2D;
`;

const Main = styled.div`
  background: #717C89;
  height: 1500px;
`;

const Card = styled.div`
  border: 1px solid black;
  width: 80%;
  margin: 10px auto;
  max-width: 400px;
  overflow: hidden;
  color: #FFFDED;
  background: #FFB17A;
`;

const Image = styled.img`
  width: 100%; 
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