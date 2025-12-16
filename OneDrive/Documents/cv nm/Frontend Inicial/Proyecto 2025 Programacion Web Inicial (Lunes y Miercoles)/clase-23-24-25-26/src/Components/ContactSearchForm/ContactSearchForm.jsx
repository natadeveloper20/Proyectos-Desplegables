import React from 'react'
import { useSearchParams } from 'react-router'
import './ContactSearchForm.css'

export default function ContactSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearch = searchParams.get('search') || ''

  const handleChange = (e) => {
    const value = e.target.value
    if (value) {
      setSearchParams({ search: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className='contact-search-form'>
      <input
        type="text"
        placeholder="Buscar o empezar un nuevo chat"
        value={currentSearch}
        onChange={handleChange}
        aria-label="Buscar contactos"
      />
    </div>
  )
}
