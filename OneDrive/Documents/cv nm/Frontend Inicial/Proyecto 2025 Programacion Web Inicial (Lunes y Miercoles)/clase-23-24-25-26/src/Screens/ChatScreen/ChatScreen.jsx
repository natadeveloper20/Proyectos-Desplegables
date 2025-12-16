import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'

import { MdLock } from "react-icons/md";

export default function ChatScreen() {

  return (
    <div className="whatsapp-layout">
      <ContactSidebar />
      <div className="chat-placeholder hidden-on-mobile">
        <img
          src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa66945g.png"
          alt="WhatsApp Web"
          style={{ width: '320px', opacity: 0.8, marginBottom: '20px' }}
        />
        <h1>Descarga WhatsApp para Windows</h1>
        <p style={{ fontSize: '14px', color: '#8696a0', marginTop: '10px', maxWidth: '560px', lineHeight: '20px' }}>
          Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.
        </p>
        <button style={{
          marginTop: '30px',
          backgroundColor: '#00a884',
          color: '#111b21',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '24px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Descargar
        </button>

        <div style={{ marginTop: 'auto', marginBottom: '20px', color: '#667781', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MdLock style={{ fontSize: '10px' }} /> Tus mensajes personales están cifrados de extremo a extremo.
        </div>
      </div>
    </div>
  )
}
