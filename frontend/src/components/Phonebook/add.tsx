import { useState } from 'react'
import doThings from './persons'
import {Person, AddInfoProps, AddFormProps} from './type';

import './phonebook.css'

interface AddNameFormProps {
  newName: string;
  setNewName: (value: string) => void;
}

interface AddNumberFormProps {
  newNumber: string;
  setNewNumber: (value: string) => void;
}

interface AddEmailFormProps {
  newEmail: string;
  setNewEmail: (value: string) => void;
}

const AddNameForm: React.FC<AddNameFormProps> = ({newName, setNewName}) => (
  <div className="mb-3 row" id="Name">
    <label htmlFor="Name" className="col-sm-3 col-form-label">
      <b>Name:</b>
    </label>
    <div className="col-sm-9">
      <input
        type="text"
        className="form-control"
        value={newName || ''}
        onChange={(e) => setNewName(e.target.value)}
      />
    </div>
  </div>
)

const AddNumberForm: React.FC<AddNumberFormProps> = ({newNumber, setNewNumber}) => (
  <div className="mb-3 row" id="Number">
    <label htmlFor="Number" className="col-sm-3 col-form-label">
      <b>Number:</b>
    </label>
    <div className="col-sm-9">
      <input
        type="text"
        className="form-control"
        value={newNumber || ''}
        onChange={(e) => setNewNumber(e.target.value)}
      />
    </div>
  </div>
)

const AddEmailForm: React.FC<AddEmailFormProps> = ({newEmail, setNewEmail}) => (
  <div className="mb-3 row" id="Email">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      <b>Email:</b>
    </label>
    <div className="col-sm-9">
      <input
        type="email"
        className="form-control"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
    </div>
  </div>
)

const AddForm: React.FC<AddFormProps> = ({
  onSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  newEmail,
  setNewEmail
}) => (
  <form onSubmit={onSubmit}>
    <AddNameForm newName={newName} setNewName={setNewName}/>
    <AddNumberForm newNumber={newNumber} setNewNumber={setNewNumber}/>
    <AddEmailForm newEmail={newEmail} setNewEmail={setNewEmail}/>
    <button type="submit" className="btn btn-outline-primary"><b>Add</b></button>
  </form>
);

const Addinfo =(props: AddInfoProps) => {

  const {updateName, setErrorMessage, Name} = props

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const AddPerson = async (event: React.FormEvent) =>
  {
    event.preventDefault()
    try{
      const person = Name.find(person => person.name === newName)

      if (Name.some(element => element.name === newName)){
        if (window.confirm(`Change number of ${newName}?`) && person && person.id)
          doThings
            .update(person.id,newNumber,newName,newEmail)
            .then(response => {
              setNewName('')
              setNewNumber('')
              setNewEmail('')
              updateName(Name.map((personActualList:Person) => personActualList.id !==person.id ? personActualList:response))
              setErrorMessage(
                'Number successfully changed'
              )
              setTimeout(() => {
                setErrorMessage("")
              }, 2000)
            }).catch(error=> {
              setErrorMessage(`Information of ${newName} has already removed from server, ${error}`)
              setTimeout(() => {
                setErrorMessage("")
              }, 500)
            })
      }

      else{
        const noteObject =
        {
          name: newName,
          number: newNumber,
          email: newEmail,
        }

        doThings
          .add(noteObject)
          .then(returnedNote => {
            updateName(Name.concat(returnedNote))
            setNewName('')
            setNewNumber('')
            setNewEmail('')
            setErrorMessage('Name successfully added')
            setTimeout(() => {
              setErrorMessage('')
            }, 2000)
          }).catch(error=> {
            setErrorMessage(`Datos en Formato Invalido ${error}`)
            setTimeout(() => {
              setErrorMessage('')
            }, 5000)
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
    <div className="card text-bg-info mb-3" id="Addinfo_phone">
      <div className="card-header">
        <b>Create Contact</b>
      </div>
      <div className="card-body">
        <AddForm
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => AddPerson(event)}
          newName={newName} setNewName={setNewName}
          newEmail={newEmail} setNewEmail={setNewEmail}
          newNumber={newNumber} setNewNumber={setNewNumber}
        />
      </div>
    </div>
  )
}

export default Addinfo
