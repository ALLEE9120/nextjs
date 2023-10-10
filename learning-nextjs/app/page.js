import React from 'react'
import Link from 'next/link'

export default async function NotesPage() {
    return(
    <div>
      <h1>Notes</h1>
      <div>
        <Link href="/notes">Notes</Link>
      </div>
    </div>
    )
}