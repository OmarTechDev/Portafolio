import './Pages.css'
//import { useState } from 'react';

import NavBar from '../components/NavBar.tsx';
import Body from '../components/Home/Body.tsx';
import AboutBody from '../components/About.tsx';
import Buttons from '../components/Calculator/buttonsCalculator.tsx';
import MultiPage from '../components/Login/multiApp.tsx';
import Trail from '../components/Login/pass.tsx';
import BodyRovers from '../components/RoversGame/Body.tsx';

import Logo from '../assets/logo.svg?react';

import Phone_App from '../components/Phonebook/PhonebookApp'


function HomePage() {
  return (
    <div style={{ height:'100vh', width:'100vw' }}>
      <NavBar/>
      <Body/>
    </div>
  )
}

function AboutPage() {
  return (
    <div style={{ height:'100vh', width:'100vw' }}>
      <NavBar/>
      <AboutBody/>
    </div>
  )
}

function Calculator(){
  return(
    <div className="App-header">
      <h2 key="Title">Calculadora Científica  <Logo className="App-logo" /></h2>
      <Buttons></Buttons>
    </div>
  )
}

function Multi(){
  return (
    <div>
      <NavBar/>
      <MultiPage/>
    </div>
  )
}

function Pass(){
  return(
    <div className="Calc">
      <NavBar/>
      <Trail/>
    </div>
  )
}

function PhoneB(){
  return(
    <div className="Phone_Container">
      <NavBar/>
      <Phone_App/>
    </div>
  )
}

function Rovers() {
  return (
    <div>
      <NavBar/>
      <BodyRovers/>
    </div>
  )
}

export { HomePage, AboutPage, Calculator, PhoneB, Multi, Pass, Rovers}
