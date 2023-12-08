import { useState } from 'react'
import doThings from './persons'
import switchAddEdit from './addEditPhone'
import {Person, EditProps, EditFormProps} from './kinds';

import './phonebook.css'

interface EditNameFormProps {
  newName: string;
  setNewName: (value: string) => void;
}

interface EditNumberFormProps {
  newNumber: string;
  setNewNumber: (value: string) => void;
}

interface EditEmailFormProps {
  newEmail: string;
  setNewEmail: (value: string) => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({newName, setNewName}) => (
  <div className="mb-3 row">
    <label className="col-sm-4 col-form-label">
      <b>Name:</b>
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        className="form-control"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
    </div>
  </div>
)

const EditNumberForm: React.FC<EditNumberFormProps> = ({newNumber, setNewNumber}) => (
  <div className="mb-3 row">
    <label className="col-sm-4 col-form-label">
      <b>Number:</b>
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        className="form-control"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
    </div>
  </div>
)

const EditEmailForm: React.FC<EditEmailFormProps> = ({newEmail, setNewEmail}) => (
  <div className="mb-3 row">
    <label className="col-sm-4 col-form-label">
      <b>Email:</b>
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        className="form-control"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
    </div>
  </div>
)

const EditForm: React.FC<EditFormProps> = ({
  onSubmit,
  onCancel,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  newEmail,
  setNewEmail
}) => (
  <form onSubmit={onSubmit}>
    <EditNameForm newName={newName} setNewName={setNewName}/>
    <EditNumberForm newNumber={newNumber} setNewNumber={setNewNumber}/>
    <EditEmailForm newEmail={newEmail} setNewEmail={setNewEmail}/>
    <button type="submit" className="btn btn-info">
      Edit
    </button>{' '}
    <button onClick={onCancel} className="btn btn-info">
      Cancel
    </button>
  </form>
);

const Edition = (props:EditProps) => {

  const { data, updateName, setErrorMessage, Name } = props

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const showhide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    switchAddEdit('add')
  }

  const editInfo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try{
      const person = Name.find((person: Person) => person.name === data)
      if (Name.some((element: Person) => element.name === data) && person?.id)
      {
        doThings
          .update(person.id, newNumber, newName, newEmail)
          .then(response => {
            setNewName('')
            setNewNumber('')
            setNewEmail('')
            updateName(Name.map((personActualList:Person) => personActualList.id !==person.id ? personActualList:response))
            setErrorMessage(
              'Successfully Edited'
            )
            setTimeout(() => {
              setErrorMessage('')
            }, 2000)
          }).catch(error => {
            setErrorMessage(error)
            setTimeout(() => {
              setErrorMessage('')
            }, 500)
            updateName(Name.filter((element: Person) => element.id !== person.id))
          })
      }
    }
    catch (exception) {
      setErrorMessage('Error on the Data refresh the page')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  return(
    <div className="card text-white bg-secondary" id="Edit_phone">
      <div className="card-header Card_Header"><b>Edit {data}</b></div>
      <div className="card-body">
        <EditForm
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => editInfo(event)}
          onCancel={(event: React.MouseEvent<HTMLButtonElement>) => showhide(event)}
          newName={newName} setNewName={setNewName}
          newEmail={newEmail} setNewEmail={setNewEmail}
          newNumber={newNumber} setNewNumber={setNewNumber}
        />
      </div>
    </div>
  )
}

export default Edition
