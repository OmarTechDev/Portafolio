import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './login.css'

interface PhonebookCardProps {
  hover: boolean;
  setHover: (value: boolean) => void;
}

interface NoteCardProps {
  hover2: boolean;
  setHover2: (value: boolean) => void;
}

const PhonebookCard: React.FC<PhonebookCardProps> = ({hover, setHover}) => (
  <div className={`card mb-2 p-0 ${hover ? 'bg-secondary' : 'bg-dark'}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <div className="card-header1 text-white">Prototype Version 1.0</div>
    <div className="card-body">
      <h5 className="card-title">Phonebook</h5>
      <p className="card-text">
        A simple Page of a Phonebook, with a Database on <b>MongoDB</b><br/><br/>
        <Link to='/multi/pass/phonebook' id='PassLink1'>Go to the Page</Link>
      </p>
    </div>
  </div>
)

const NoteCard: React.FC<NoteCardProps> = ({hover2, setHover2}) => (
  <div className={`card mb-1 p-0 ${!hover2 ? 'bg-danger' : 'bg-warning'}`} style={{ width: '18rem' }} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
    <div className="card-header text-white">In process</div>
    <div className="card-body">
      <h5 className="card-title">Notes</h5>
      <p className="card-text">This page is still in progress. Sorry for the inconvenience</p>
    </div>
  </div>
)

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
      <h1 id='TitlePass'><br/><b><u>Choose an App "{log.name}"</u></b></h1>
      <PhonebookCard hover={hover} setHover={setHover}/>
      <NoteCard hover2={hover2} setHover2={setHover2}/>
    </div>
  )
}

export default Trail
