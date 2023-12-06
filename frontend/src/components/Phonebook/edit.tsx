import { useState } from 'react'
import doThings from './persons'
import switchAddEdit from './addEditPhone'
import {Person,EditProps} from './kinds';

import '../Phone.css'

const Edition = (props:EditProps) => {

  const { data, updateName, Name } = props

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [newEmail, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const showhide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    switchAddEdit('add')
  }

  const editInfo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try{
      const person = Name.find((person: Person) => person.name === data)
      if (Name.some((element:Person) => element.name === data) && person?.id)
      {
        doThings
          .update(person.id, newNumber, newName, newEmail)
          .then(ret => {
            setNewName('')
            setNumber('')
            setEmail('')
            setErrorMessage(
              'Number successfully changed'
            )
            setTimeout(() => {
              updateName(Name.map((list:Person) => list.id !==person.id ? list:ret))
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
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => editInfo(event)}>
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
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">
              <b>Number:</b>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={newNumber}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">
              <b>Email:</b>
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                value={newEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info">Edit</button>&#160;
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => showhide(event)}
            className="btn btn-info"
          >
              Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edition
