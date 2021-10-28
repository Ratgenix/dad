import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import Home from './pages'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Employment from './components/Employment.js'
import Sidebar from './components/Sidebar';

//pages
import robo from './pages/robot'
import weld from './pages/weld'
import controls from './pages/controls'
import start from './pages/startup'
import train from './pages/training'
import serve from './pages/Service'
import exp from './pages/experience'

//

function App() {

  
  const[isOpen, setIsOpen] = useState(false)


  const toggle=()=>{
      setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="site-wrapper">
    <div className="head-comp">

    <Header/>  



    <Navbar toggle={toggle}/>
    

  
    </div>
      <div className="page-container">

      <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Switch>
      
      <Route path='/services' exact component={serve}/>
      <Route path='/robot' exact component={robo}/>
      <Route path='/weld' exact component={weld}/>
      <Route path='/controls' exact component={controls}/>
      <Route path='/start-up' exact component={start}/>
      <Route path='/training' exact component={train}/>
      <Route path='/experience' exact component={exp}/>
      <Route path='/' exact component={Home}/>
      {/*
      Components
      */}

      <Route path='/contact' exact component={Contact}/>
      <Route path='/employment' exact component={Employment}/>

    </Switch>


      
      </div>

      <div className="lol">
     
     </div>


      <Footer></Footer>
    </div>

    </>
  );
}

export default App;
