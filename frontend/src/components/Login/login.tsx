import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as EyeC } from '../../assets/eye-slash.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';

import './Login.css'
import loginService from '../../services/loginService'
import Notification from './notifications'

function Log() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)
  const history = useNavigate()
  const [visible, setVisible] = useState(true)

  const type = { display: visible ? 'password' : 'string' }
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        name: username,
        passwordHash: password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
      history('/multi/pass')
    } catch (exception) {
      setErrorMessage(`Wrong credentials ${exception}`)
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="label_p" htmlFor="formBasicEmail">User Name</label>
        <input
          className="labeli form-control"
          type="text"
          id="formBasicEmail"
          placeholder="User Name"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <small className="form-text text-muted label_p">
          <b>Never share personal information</b>
        </small>
      </div>
      <div className="mb-3">
        <label className="label_p" htmlFor="formBasicPassword">
          Password &#160;&#160;&#160;
          <EyeC onClick={toggleVisibility} style={hideWhenVisible} className="eye-icon"/>
          <Eye onClick={toggleVisibility} style={showWhenVisible} className="eye-icon"></Eye>
        </label>
        <input
          className="labeli form-control"
          type={type.display}
          placeholder="Password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button className="labeli btn btn-secondary" type="submit">
        Login
      </button>
      <Notification message={errorMessage} />
    </form>
  )
}

export default Log
