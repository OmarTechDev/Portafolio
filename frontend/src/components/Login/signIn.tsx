import { useState } from 'react'
import EyeC from '../../assets/eye-slash.svg?react';
import Eye from '../../assets/eye.svg?react';
import './login.css'
import sign_up from '../../services/signUpService.tsx'
import Notification from './notifications.tsx'

function SignIn(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passwordHash, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [, setUser] = useState('')

  const [visible, setVisible] = useState(true)

  const type = { display: visible ? 'password' : 'string' }
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const user = await sign_up.sign({name, email, passwordHash})
      //   window.localStorage.setItem(
      //     'loggedNoteappUser', JSON.stringify(user)
      //   )
      setUser(user)
      setName('')
      setEmail('')
      setPassword('')
      window.location.reload()
    } catch (exception) {
      console.log(exception)
      setErrorMessage(`Error ${exception}`)
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    }
  }

  return(
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="formBasicEmailS" className="label_p2">Email address</label>
        <input
          type="email"
          className="form-control"
          id="formBasicEmailS"
          placeholder="Enter email"
          value={email}
          name="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>

      <div className="mb-3">
        <label htmlFor="formBasicUsernameS" className="label_p2">Username</label>
        <input
          type="text"
          className="form-control"
          id="formBasicUsernameS"
          placeholder="Username"
          value={name}
          name="Username"
          onChange={({ target }) => setName(target.value)}
        />
      </div>

      <div className="mb-3">
        <div>
          <label htmlFor="formBasicPasswordS" className="label_p2">Password &#160;&#160;&#160;</label>
          <EyeC onClick={toggleVisibility} style={hideWhenVisible}/>
          <Eye onClick={toggleVisibility} style={showWhenVisible}/>
        </div>
        <input
          type={type.display}
          className="form-control"
          id="formBasicPasswordS"
          placeholder="Password"
          value={passwordHash}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <Notification message={errorMessage} />
    </form>
  )
}

export default SignIn
