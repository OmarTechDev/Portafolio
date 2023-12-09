import './PageS.css'
//import { useState } from 'react';

import Maintop from '../components/NavBar.tsx';
import Body from '../components/Home/Body.tsx';
import AboutBody from '../components/About.tsx';
import Buttons from '../components/Calculator/buttonsCalculator.tsx';
import MultiPage from '../components/Login/multiApp.tsx';
import Trail from '../components/Login/pass.tsx';

import Logo from '../assets/logo.svg?react';

// import Log from './components_multi/Login'
// import Sign_in from './components_multi/Sign_in'
// import Trail from './components_multi/Pass'
import Phone_App from '../components/Phonebook/PhonebookApp'


function HomePage() {
  return (
    <div>
      <Maintop/>
      <Body/>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <Maintop/>
      <AboutBody/>
    </div>
  )
}

function Calculator(){
  return(
    <div>
      <Maintop/>
      <div className="App-header">
        <h1 key="Title">Calculadora Científica  <Logo className="App-logo" /></h1>
        <Buttons></Buttons>
      </div>
    </div>
  )
}

  function Multi(){
    return (
      <div>
        <Maintop/>
        <MultiPage/>
      </div>
    )
  }

function Pass(){
  return(
    <div className="Calc">
      <Maintop/>
      <Trail/>
    </div>
  )
}

function PhoneB(){
  return(
    <div>
      <Maintop/>
      <div className="Phone_Container">
        <Phone_App/>
      </div>
    </div>
  )
}

export { HomePage, AboutPage, Calculator, PhoneB, Multi, Pass}
