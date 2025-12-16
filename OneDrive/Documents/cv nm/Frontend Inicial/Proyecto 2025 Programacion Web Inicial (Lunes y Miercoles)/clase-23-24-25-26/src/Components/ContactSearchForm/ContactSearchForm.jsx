import React from 'react'
import { useSearchParams } from 'react-router'
import { MdSearch } from "react-icons/md";
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
      <MdSearch className="search-icon" />
      <input
        type="text"
        placeholder="Buscar un chat o iniciar uno nuevo"
        value={currentSearch}
        onChange={handleChange}
        aria-label="Buscar contactos"
      />
    </div>
  )
}
