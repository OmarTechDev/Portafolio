import { useEffect } from 'react'
import doThings from './persons'
import {Person, BookProps} from './kinds';
import switchAddEdit from './addEditPhone'

import './phonebook.css'

const Book = (props: BookProps) => {
  const { note, filter ,updateName, Name, setErrorMessage } = props

  useEffect(() => {
    switchAddEdit('add')
  }, [])

  const showhide = (event: React.MouseEvent) => {
    event.stopPropagation()
    var editPhone = document.getElementById('Edit_phone')
    if (editPhone && editPhone.style.display === 'block') {
      switchAddEdit('add')
    }
    else{
      props.onData(note)
      switchAddEdit('edit')
    }
  }

  const remove = async (id:string) => {
    if (window.confirm(`Delete ${note.name}?`) && id !== "") {
      doThings
        .del(id)
        .then(response => {
          console.log('TOP')
          updateName(Name.filter((personActualList:Person) => personActualList.id !== response.id))
          setErrorMessage('Person Deleted')
          setTimeout(() => {
            setErrorMessage("")
          }, 2000)
        })
        .catch(error => {
          setErrorMessage(error)
          setTimeout(() => {
            setErrorMessage('')
          }, 2000)
        })
    }
  }

  if( note.name.toLowerCase().includes(filter)) {
    return (
      <>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading-${note.id}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${note.id}`} aria-expanded="true" aria-controls={`collapse-${note.id}`}>
                <span className="btn btn-secondary" onClick={()=> remove(note.id ?? '')}>delete</span>&#160;
                <span className="btn btn-secondary" onClick={showhide}>edit</span>
                <b><h5>&#160;&#160;&#160;{note.name}</h5></b>
              </button>
            </h2>
            <div id={`collapse-${note.id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${note.id}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h6><b>Number: {note.number}</b></h6>
                <h6><b>Email: {note.email ? note.email : 'Unknown'}</b></h6>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Book
