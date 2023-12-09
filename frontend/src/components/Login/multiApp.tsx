import { useState } from "react"
import Log from './login'
import SignIn from './signIn'

import Logo from '../../assets/logo.svg?react'

interface LoginProps {
  hideWhenVisible: React.CSSProperties;
  toggleVisibility: () => void;
}

interface SignContainerProps {
  showWhenVisible: React.CSSProperties;
  toggleVisibility: () => void;
}

const Parallelogram = () => (
  <div className="parallelogram2">
    <div className="accordion">
      <div className="accordion-item paralelo2">
        <h2 className="accordion-header">
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
)

const TitleForm = () => (
  <div className="h1_log">
    <h1 className="h1_log1">MultiApp  <Logo className="App-logo"/></h1>
  </div>
)

const SignContainer: React.FC<SignContainerProps> = ({showWhenVisible, toggleVisibility}) => (
  <div style={showWhenVisible} className="login">
    <TitleForm/>
    <SignIn/>
    <p className="labelq">
      <br/>Have an account? { }
      <button className="labeli btn btn-secondary" onClick={toggleVisibility}>
        Login
      </button>
    </p>
  </div>
)

const Login: React.FC<LoginProps> = ({ hideWhenVisible, toggleVisibility }) => (
  <div style={hideWhenVisible} className="login">
    <TitleForm/><br/>
    <Log/>
    <p className="labelq">
      <br/>Don't have an account? { }
      <button className="labeli btn btn-secondary" onClick={toggleVisibility}>
        Sing In
      </button>
    </p>
  </div>
)

const MultiPage: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return(
    <div className="M_Center">
      <Parallelogram/>
      <div className="parallelogram">
        <b>This is an EXAMPLE page <br/>
        Don't Use <br/>REAL <br/>Information</b>
      </div>
      <Login hideWhenVisible={hideWhenVisible} toggleVisibility={toggleVisibility} />
      <SignContainer showWhenVisible={showWhenVisible} toggleVisibility={toggleVisibility}/>
    </div>
  )
}

export default MultiPage
