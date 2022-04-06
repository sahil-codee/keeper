import React, { useState } from 'react'

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })


    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    // function addNote(event) {

    //     event.preventDefault();
    // }

    const submitNote = async (event) => {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        
        const {title, content} = note;
        
         const res = await fetch("http://localhost:5000/keeper/notes/", {
             method: "POST",
             headers: {"content-type": "application/json"},
             body: JSON.stringify({
                title, content
             })
         });

    }

  return (
    <div>
        <form method='POST' >
            <input type="text" name='title' onChange={handleChange} value={note.title} placeholder='Title' />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder='Take a note....' rows="3"></textarea>
            <button name='submit' value="submit" type='submit' onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea