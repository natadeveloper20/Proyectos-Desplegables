import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ChatScreen() {


  return (
    <div className="whatsapp-layout">
      <ContactSidebar />
      <div className="chat-placeholder hidden-on-mobile">
        <h1>WhatsApp Web Clone</h1>
        <p>Selecciona un contacto para comenzar a chatear</p>
      </div>
    </div>
  )
}
