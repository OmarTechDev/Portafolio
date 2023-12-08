import { useState, useEffect } from 'react'
import doThings from './persons'
import Book from './book'
import Addinfo from './add'
import Edition from './edit'
import switchAddEdit from './addEditPhone'
import { FilterProps, SelectedStyle, Person, selectStyle, NotebookProps } from './kinds';

import './phonebook.css'

const Filter: React.FC<FilterProps>  = ({ filter,handleFilter }) =>
(
  <div id="Filter">
    <label htmlFor="filterName">
      <b>Search Bar:</b>
    </label>
    <div id="filt_bar">
      <input
        type="text"
        className="form-control"
        id="filterName"
        placeholder="Search"
        value={filter}
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

const Notebook: React.FC<NotebookProps> = ({Name, filter, setData, updateName, setErrorMessage}) => {
  const filteredAndSortedContacts = Name
    .filter(note => note.name)
    .sort((a, b) => a.name.localeCompare(b.name))

  let list = filteredAndSortedContacts.filter(element => element.name.toLowerCase().includes(filter))
  if (list.length === 0) {
    return <h2>No Coincidences</h2>;
  }

  return filteredAndSortedContacts.map(note => (
    <Book
      onData={async (childData) => setData(childData.name)} // Get the data of which element is going to be edited
      key={note.id}
      note={note}
      filter={filter}
      updateName={updateName}
      Name={Name}
      setErrorMessage={setErrorMessage}
    />
  ));
}

const Phone_App: React.FC = () => {

  const [Name, setName] = useState<Person[]>([])
  const [filter, setFilter] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [selected] = useState(selectStyle[0])

  const [data, setData] = useState('')

  useEffect(() => {
    doThings.getAll()
      .then(initialData => {
        setName(initialData)
      })
  }, [])

  const updateName = async (newValue: Person[]): Promise<void>  =>{
    await setName(newValue)
    switchAddEdit('add')
  }

  return (
    <div className="Phonebook"><br/>
      <div className="header-container">
        <h1 id="TitlePhonebook"><u>Phonebook</u></h1>
        <Notification message={errorMessage} selected={selected} />
      </div><br/>
      <Filter filter={filter} handleFilter={(value) => setFilter(value)}/><br/>
      <Addinfo updateName={updateName} setErrorMessage={setErrorMessage} Name={Name}/>
      <h3 id="title_h3_phonebook"><u>Your contacts</u><br/></h3>
      <div className="book">
        <div className="col" id="ul">
          <Notebook Name={Name} filter={filter} setData={setData} updateName={updateName} setErrorMessage={setErrorMessage}/>
        </div>
      </div>
      <Edition data={data} updateName={updateName} setErrorMessage={setErrorMessage} Name={Name}/>
    </div>
  )
}

export default Phone_App
