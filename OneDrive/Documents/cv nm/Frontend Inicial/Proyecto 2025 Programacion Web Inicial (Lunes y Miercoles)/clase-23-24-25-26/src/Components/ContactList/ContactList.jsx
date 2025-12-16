import React, { useContext } from 'react'
import './ContactList.css'
import { Link, useSearchParams } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ContactList() {
    const {
        contactState,
        loadingContactsState
    } = useContext(ContactListContext)

    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.toLowerCase() || ''

    if (loadingContactsState) {
        return (
            <div>Cargando contactos...</div>
        )
    }

    if (contactState.length === 0) {
        return (
            <div>No hay contactos</div>
        )
    }
    return (
        <div className='contact-list-container'>
            {
                contactState
                    .filter(contact =>
                        contact.contact_name.toLowerCase().includes(searchQuery)
                    )
                    .map(
                        function (contact) {
                            return (
                                <Link className='contact-item' key={contact.contact_id} to={'/chat/' + contact.contact_id + '/messages'}>
                                    <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                    <div className='contact-info'>
                                        <div className='contact-header-row'>
                                            <h2>{contact.contact_name}</h2>
                                            <span className='message-time'>Ayer</span> {/* Placeholder temporario */}
                                        </div>
                                        <div className='contact-message-row'>
                                            <p className='last-message'>{contact.last_message_content}</p>
                                            {
                                                contact.contact_unseen_messages > 0 &&
                                                <span className='unread-badge'>{contact.contact_unseen_messages}</span>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )
            }
        </div>
    )
}
