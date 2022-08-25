//import logo from './logo.svg';
import './App.css';
import React from 'react';

//COMPONENTS 
import NavBar from "./components/NavBar";


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <NavBar />
        
        </header>

      </div>

    );
  }

}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p class="title"> Is For You </p>
        <p class="text"> Juana Gonzalez</p>
      </header>
    </div>
  );
}*/

export default App;
