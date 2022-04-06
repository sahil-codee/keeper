import React, { useState, useEffect } from 'react'
import CreateArea from './Components/CreateArea'
import Header from './Components/Header'
import Note from './Components/Note'
import './index.css'

function App() {

    const [notes, setNotes] = useState([]);
    
    function addNote(note) {
        setNotes(prevNotes => {
           return [...prevNotes, note]
        });
    }

    const fetchData = () => {
        fetch("http://localhost:5000/lists")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setNotes(data)
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })  
        })
    }

  return (
    <div>
        <Header />
        <CreateArea
        onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
            return (
            <Note 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNote} />
        )})}
    </div>
  )
}

export default App