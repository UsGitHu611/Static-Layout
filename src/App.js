import React from 'react';
import './index.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <div className='container'>
          <Header/>
          <Main/>
          <Footer/>
      </div>
  );
};

export default App;

