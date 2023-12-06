import { useState } from 'react'
import doThings from './persons'
import {AddInfoProps} from './kinds';

import '../Phone.css'

const Addinfo =(props: AddInfoProps) => {

  const {updateName, setErrorMessage, Name} = props

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const handleAdd = async (event: React.FormEvent) =>
  {
    event.preventDefault()
    try{
      const person = Name.find(person => person.name === newName)

      if (Name.some(element => element.name === newName)){
        if (window.confirm(`Change number of ${newName}?`) && person && person.id)
          doThings
            .update(person.id,newNumber,newName,newEmail)
            .then(ret => {
              setNewName('')
              setNewNumber('')
              setNewEmail('')
              setErrorMessage(
                'Number successfully changed'
              )
              setTimeout(() => {
                updateName(Name.map(list => list.id !==person.id ? list:ret))
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
            console.log(returnedNote +"Espacio" + Name.length)
            updateName(Name.concat(returnedNote))
            console.log("DESPUES" + Name.length)
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

  const handleChange = (setValue: React.Dispatch<React.SetStateAction<string>>, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return(
    <div className="card bg-primary text-white" id="Addinfo_phone">
      <div className="card-header">
        <b>Add a new Contact</b>
      </div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="mb-3 row" id="Name">
            <label htmlFor="Name" className="col-sm-4 col-form-label">
              <b>Name:</b>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={newName || ''}
                onChange={(e) => handleChange(setNewName, e)}
              />
            </div>
          </div>

          <div className="mb-3 row" id="Number">
            <label htmlFor="Number" className="col-sm-4 col-form-label">
              <b>Number:</b>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={newNumber || ''}
                onChange={(e) => handleChange(setNewNumber, e)}
              />
            </div>
          </div>

          <div className="mb-3 row" id="Email">
            <label htmlFor="Email" className="col-sm-4 col-form-label">
              <b>Email:</b>
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                value={newEmail}
                onChange={(e) => handleChange(setNewEmail, e)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-info">Add</button>
        </form>
      </div>
    </div>

  )
}

export default Addinfo
