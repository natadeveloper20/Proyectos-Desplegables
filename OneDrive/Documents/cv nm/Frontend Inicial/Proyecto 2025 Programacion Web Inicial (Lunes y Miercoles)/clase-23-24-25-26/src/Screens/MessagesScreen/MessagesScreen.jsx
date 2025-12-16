import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'


export default function MessagesScreen() {

    const {
        contactSelected,
        loadingContact,
        loadContactById
    } = useContext(ContactDetailContext)
    return (
        <div className="whatsapp-layout">
            <div className="sidebar-container hidden-on-mobile-chat">
                <ContactSidebar />
            </div>
            <main className="chat-area">
                <header className="chat-header">
                    {
                        loadingContact
                            ? <span>Cargando..</span>
                            : <h2>{contactSelected.contact_name}</h2>
                    }
                </header>

                <div className="messages-container">
                    {/* Mensajes aquí */}
                    <p>Historial de mensajes...</p>
                </div>
            </main>
        </div>
    )
}
