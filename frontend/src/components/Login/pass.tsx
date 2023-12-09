import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Login.css'

function Trail(){

  const nav = useNavigate()
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (!loggedUserJSON) {
      nav('/multi')
    }
  }, [])

  let log: any = null;

  const storedData = window.localStorage.getItem('loggedNoteappUser');

  if (storedData !== null) {
    log = JSON.parse(storedData);
  }

  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  return(
    <div id="Backgraound_Pass">
      <h1><br/><b><u>Choose an App "{log.username}"</u></b></h1>

      <div className={`card mb-2 ${hover ? 'bg-secondary' : 'bg-dark'}`} style={{ width: '18rem' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="card-header text-white">Prototype Version 0.3</div>
        <div className="card-body">
          <h5 className="card-title">Phonebook</h5>
          <p className="card-text">
            A simple Page of a Phonebook, with a Database on <b>Mongoose</b><br/>
            <Link to='/multi/pass/phonebook'>Go to the Page</Link>
          </p>
        </div>
      </div>

      <div className={`card mb-1 ${!hover2 ? 'bg-danger' : 'bg-warning'}`} style={{ width: '18rem' }} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
        <div className="card-header text-white">In process</div>
        <div className="card-body">
          <h5 className="card-title">Notes</h5>
          <p className="card-text">This page is still in progress. Sorry for the inconvenience</p>
        </div>
      </div>
    </div>
  )
}

export default Trail
