import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import './ContactForm.css'

export default function ContactForm() {

    // Estado local para los campos del formulario
    const [name, setName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const { addContact } = useContext(ContactListContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación simple
        if (!name) return

        const newContact = {
            contact_name: name,
            contact_avatar: avatarUrl || 'https://via.placeholder.com/150',
            // Los demás campos se generan en el Context
        }

        addContact(newContact)
        navigate('/') // Volver a la lista
    }

    return (
        <div className='contact-form-container'>
            <h2>Nuevo Contacto</h2>

            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Escribe el nombre del contacto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="avatar">URL de la Foto (Opcional)</label>
                    <input
                        type="url"
                        id="avatar"
                        placeholder="https://ejemplo.com/foto.jpg"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                    />
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn-primary">
                        Guardar
                    </button>
                </div>

            </form>
        </div>
    )
}
