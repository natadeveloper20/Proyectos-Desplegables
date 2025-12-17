import React, { useContext, useState, useEffect, useRef } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { ContactListContext } from '../../Context/ContactListContext'


import './MessagesScreen.css'
import { MdSearch, MdMoreVert, MdInsertEmoticon, MdAttachFile, MdMic, MdSend, MdDoneAll, MdCheck, MdEdit, MdCancel, MdSave } from "react-icons/md";

/*
Pantalla de Mensajes
Muestra el chat activo con un contacto
*/
export default function MessagesScreen() {

    const {
        contactSelected,
        loadingContact,
    } = useContext(ContactDetailContext)

    const { updateContact } = useContext(ContactListContext)

    // Estado para los mensajes y el input
    const [messages, setMessages] = useState([])
    const [inputText, setInputText] = useState('')

    // Estado para edición de mensajes
    const [editingMessageId, setEditingMessageId] = useState(null)
    const [editingText, setEditingText] = useState('')

    // Referencia para el scroll automático
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Efecto para cargar mensaje inicial o "historial" al cambiar contacto
    useEffect(() => {
        if (contactSelected) {
            setMessages([
                {
                    id: 1,
                    sender: 'them',
                    content: contactSelected.last_message_content || 'Hola! ¿Cómo estás?',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    status: 'read'
                }
            ])

            // Marcar como leído
            updateContact({
                ...contactSelected,
                contact_unseen_messages: 0
            })
        }
    }, [contactSelected, updateContact]) // eslint-disable-next-line

    // Scroll al fondo cuando cambian los mensajes
    useEffect(scrollToBottom, [messages]);


    const handleSendMessage = (e) => {
        e.preventDefault() // Prevenir reload si es form submit
        if (!inputText.trim()) return

        const newMessage = {
            id: Date.now(),
            sender: 'me',
            content: inputText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'sent'
        }

        setMessages(prev => [...prev, newMessage])
        setInputText('')

        // Simular respuesta automática
        setTimeout(() => {
            const replyMessage = {
                id: Date.now() + 1,
                sender: 'them',
                content: '¡Gracias por tu mensaje! (Respuesta automática)',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: 'read'
            }
            setMessages(prev => {
                // Actualizar estado 'read' del mensaje del usuario anterior
                const updatedMessages = prev.map(msg =>
                    msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
                )
                return [...updatedMessages, replyMessage]
            })
        }, 2000)
    }

    // Funciones de edición
    const startEditing = (msg) => {
        setEditingMessageId(msg.id)
        setEditingText(msg.content)
    }

    const cancelEditing = () => {
        setEditingMessageId(null)
        setEditingText('')
    }

    const saveEdit = (id) => {
        if (!editingText.trim()) return

        setMessages(prev => prev.map(msg =>
            msg.id === id ? { ...msg, content: editingText } : msg
        ))
        setEditingMessageId(null)
        setEditingText('')
    }

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
                    <div className='system-message'>
                        Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-bubble ${msg.sender === 'me' ? 'message-outgoing' : 'message-incoming'}`}>

                            {editingMessageId === msg.id ? (
                                <div className="message-edit-container">
                                    <input
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        className="message-edit-input"
                                        autoFocus
                                    />
                                    <div className="message-edit-actions">
                                        <button onClick={() => saveEdit(msg.id)} className="icon-btn-small" title="Guardar"><MdSave /></button>
                                        <button onClick={cancelEditing} className="icon-btn-small" title="Cancelar"><MdCancel /></button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {msg.content}
                                    {msg.sender === 'me' && (
                                        <button
                                            className="edit-msg-btn"
                                            onClick={() => startEditing(msg)}
                                            title="Editar mensaje"
                                        >
                                            <MdEdit size={12} />
                                        </button>
                                    )}
                                </>
                            )}

                            <div className="message-meta">
                                <span className="message-time">{msg.timestamp}</span>
                                {msg.sender === 'me' && (
                                    <span className="message-status">
                                        {msg.status === 'sent' && <MdCheck />}
                                        {/* Status 'read' o 'delivered' mostramos doble check azul o gris */}
                                        {msg.status === 'read' && <MdDoneAll className="icon-read" />}
                                        {msg.status === 'delivered' && <MdDoneAll />}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Footer (Input) */}
                <form className="chat-footer" onSubmit={handleSendMessage}>
                    <div className="footer-icon-btn"><MdInsertEmoticon /></div>
                    <div className="footer-icon-btn"><MdAttachFile /></div>
                    <div className="message-input-container">
                        <input
                            type="text"
                            placeholder="Escribe un mensaje"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </div>
                    {inputText.trim() ? (
                        <button type="submit" className="footer-icon-btn" style={{ border: 'none', background: 'transparent' }}><MdSend /></button>
                    ) : (
                        <div className="footer-icon-btn"><MdMic /></div>
                    )}
                </form>
            </main>
        </div>
    )
}
