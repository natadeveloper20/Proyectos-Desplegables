import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'


import './MessagesScreen.css'
import { MdSearch, MdMoreVert, MdInsertEmoticon, MdAttachFile, MdMic } from "react-icons/md";

/*
Pantalla de Mensajes
Muestra el chat activo con un contacto
*/
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
                {/* Cabecera del Chat */}
                <header className="chat-header">
                    {
                        loadingContact
                            ? <span style={{ color: 'white' }}>Cargando..</span>
                            : (
                                <>
                                    <div className="user-avatar" style={{ width: '40px', height: '40px' }}>
                                        <img src={contactSelected.contact_avatar} alt={contactSelected.contact_name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="chat-header-info">
                                        <h2>{contactSelected.contact_name}</h2>
                                        <span>en línea ahora</span> {/* Estado hardcodeado "en línea" para realismo visual */}
                                    </div>
                                    <div className="chat-header-icons">
                                        <MdSearch className="icon-btn" title="Buscar" />
                                        <MdMoreVert className="icon-btn" title="Más opciones" />
                                    </div>
                                </>
                            )
                    }
                </header>

                {/* Lista de Mensajes */}
                <div className="messages-container">
                    {/* Placeholder de mensajes del sistema */}
                    <div style={{
                        backgroundColor: '#182229',
                        color: '#ffd279',
                        fontSize: '12.5px',
                        padding: '5px 12px',
                        borderRadius: '8px',
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginBottom: '20px',
                        boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                    }}>
                        Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.
                    </div>

                    {/* Mensaje Recibido (Simulación) */}
                    <div style={{
                        alignSelf: 'flex-start',
                        backgroundColor: 'var(--wa-incoming-msg)',
                        color: 'var(--wa-text-primary)',
                        padding: '6px 7px 8px 9px',
                        borderRadius: '0 8px 8px 8px',
                        maxWidth: '65%',
                        fontSize: '14px',
                        boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
                        position: 'relative',
                        marginBottom: '10px'
                    }}>
                        {contactSelected?.last_message_content || 'Hola!'}
                        <span style={{ fontSize: '11px', color: 'var(--wa-text-secondary)', float: 'right', marginTop: '4px', marginLeft: '10px' }}>10:30 a. m.</span>
                    </div>

                    {/* Mensaje Enviado (Simulación) */}
                    <div style={{
                        alignSelf: 'flex-end',
                        backgroundColor: 'var(--wa-outgoing-msg)',
                        color: 'var(--wa-text-primary)',
                        padding: '6px 7px 8px 9px',
                        borderRadius: '8px 0 8px 8px',
                        maxWidth: '65%',
                        fontSize: '14px',
                        boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
                        position: 'relative'
                    }}>
                        Dale, genial! Nos vemos.
                        <span style={{ fontSize: '11px', color: '#8696a0', float: 'right', marginTop: '4px', marginLeft: '10px' }}>10:31 a. m.</span>
                    </div>

                </div>

                {/* Footer (Input) */}
                <footer className="chat-footer">
                    <div className="footer-icon-btn"><MdInsertEmoticon /></div>
                    <div className="footer-icon-btn"><MdAttachFile /></div>
                    <div className="message-input-container">
                        <input type="text" placeholder="Escribe un mensaje" />
                    </div>
                    <div className="footer-icon-btn"><MdMic /></div>
                </footer>
            </main>
        </div>
    )
}
