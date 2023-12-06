import { useState, useEffect } from 'react'
import doThings from './persons'
import {BookProps} from './kinds';
import switchAddEdit from './addEditPhone'

import '../Phone.css'

const Book = ( props: BookProps) =>
{
  const { note, filter ,updateName, Name } = props
  const [val, setVal] = useState(false)

  const handleChange = () => {setVal(false)}

  const handleDel = (event: React.MouseEvent) => {
    event.stopPropagation()
    setVal(true)
  }

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

  const remove = (id:string) =>
  {
    if (window.confirm(`Delete ${note.name}?`))
    {
      doThings
        .del(id)
        .then(() => (
          updateName(Name.filter(n => n.id !== id))
          )
        )
    }
    else{
      updateName(Name)
      handleChange()
    }
  }

  if( note.name.toLowerCase().includes(filter))
  {

    return (
      <>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading-${note.id}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${note.id}`} aria-expanded="true" aria-controls={`collapse-${note.id}`}>
                <span className="btn btn-secondary" onClick={handleDel}>delete</span>&#160;
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
        {val && remove(note.id ?? '')}
      </>

    )
  }
}

export default Book
