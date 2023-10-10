import React from 'react'
import Link from 'next/link'

async function getNotes() {
    const response = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30")
    const notes = await response.json()
    return notes.items
}

export default async function NotesPage() {
  const notes = await getNotes();
    return(
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map(note => (
          <Link href={`/notes/${note._id}`} key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
          </Link>
        ))
        }
      </div>
    </div>
    )
}