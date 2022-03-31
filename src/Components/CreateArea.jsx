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

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    // const submitNote = async (e) => {

    //     const {title, content} = note;

    //      const res = await fetch("/lists", {
    //          method: "POST",
    //          body: JSON.stringify({
    //             title, content
    //          })
    //      });

    //     e.preventDefault();
    // }

  return (
    <div>
        <form method='POST'>
            <input type="text" name='title' onChange={handleChange} value={note.title} placeholder='Title' />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder='Take a note....' rows="3"></textarea>
            <button name='submit' value="submit" type='submit' onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea