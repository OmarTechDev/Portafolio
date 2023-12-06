import { useState, useEffect } from 'react'
import doThings from './persons'
import Book from './book'
import Addinfo from './add'
import Edition from './edit'
import switchAddEdit from './addEditPhone'
import { FilterProps, SelectedStyle, Person, selectStyle } from './kinds';

import './phonebook.css'

const Filter: React.FC<FilterProps>  = ({ filter,handleFilter }) =>
(
  <div className="mb-3" id="Filter">
      <label htmlFor="filterName" className="col-sm-2 col-form-label">
        <b>Filter shown with:</b>
      </label>
      <div className="col-sm-3" id="filt_bar">
        <input
          type="text"
          className="form-control"
          id="filterName"
          placeholder="Search"
          value={filter || ''}
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
    </div>
)

const Notification = ({ message, selected }: { message: string; selected: SelectedStyle }) => {
  if (message === "") {
    return null
  }

  return (
    <div style={selected}>
      {message}
    </div>
  )
}

const Phone_App: React.FC = () => {

  const [Name, setName] = useState<Person[]>([])
  const [filter, setFilter] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [selected, setSelected] = useState(selectStyle[0])

  const [data, setData] = useState('')

  useEffect(() => {
    doThings.getAll()
      .then(initialData => {
        setName(initialData)
      })
  }, [])

  const handleData = async (childData: any) => {
    setData(childData.name)
  }

  const handleChange = (setValue:any) => async (event:any) => setValue(event.target.value)

  const updateName = async (newValue:any) =>{
    await new Promise((resolve) =>{ setTimeout(resolve, 1000)})
    setName(newValue)
    switchAddEdit('add')
  }

  return (
    <div className="Phonebook">
      <br/><h1><u>Phonebook</u></h1><br/>
      <Notification message={errorMessage} selected={selected}/>
      <Filter filter={filter} handleFilter={handleChange(setFilter)}/><br/>
      <Addinfo updateName={updateName} setErrorMessage={setErrorMessage} Name={Name}/>
      <h3 id="title_h3_phonebook">Your contacts<br/></h3>
      <div className="book">
        <div className="col" id="ul">
          {Name.sort((a, b) => a.name.localeCompare(b.name)).map(note =>
            <Book onData={handleData} key={note.id} note={note} filter={filter} updateName={updateName} Name={Name} />
          )}
        </div>
      </div>
      <Edition data={data} updateName={updateName} Name={Name}/>
    </div>
  )
}

export default Phone_App
