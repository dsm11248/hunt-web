import React from 'react';
import Header from "./components/Header";
import "./style.css";
import Main from "./pages/main";
import Routes from "./router.js";

const App = () => (
  <div className="App">
      <header className="App-header">
        <Header/>
        <Routes/>
      </header>
    </div>
);


export default App;
