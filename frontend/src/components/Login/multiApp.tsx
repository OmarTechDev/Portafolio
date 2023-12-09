import { useState } from "react"
import Log from './login'
import SignIn from './signIn'

import Logo from '../../assets/logo.svg?react'

const MultiPage: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return(
    <div className="M_Center">
      <div className="paralelogramo2 container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item paralelo2">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Information Default:
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
              <div className="accordion-body">
                <b>Username: usuario<br/>
                Password: password4</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="paralelogramo">
        <b>This is an EXAMPLE page <br/>
        Don't Use <br/>REAL <br/>Information</b>
      </div>

      <div style={hideWhenVisible} className="login">
        <div className="h1_log">
          <h1 className="h1_log1">MultiApp  <Logo className="App-logo"/></h1>
        </div>
        <Log/>
        <p className="labelq"><br/>Don't have an account? <button className="labeli btn btn-secondary" onClick={toggleVisibility}>
          Sing In
        </button></p>
      </div>

      <div style={showWhenVisible} className="login">
        <h1>MultiApp  <Logo className="App-logo"/></h1>
        <SignIn/>
        <p className="labelq"><br/>Have an account? <button className="labeli btn btn-secondary" onClick={toggleVisibility}>
          Login
        </button></p>
      </div>
    </div>
  )
}

export default MultiPage
