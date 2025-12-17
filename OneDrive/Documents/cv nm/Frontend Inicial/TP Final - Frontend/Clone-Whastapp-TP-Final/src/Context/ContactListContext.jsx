import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList() {
        setLoadingContactState(true)
        setTimeout(
            function () {
                const contact_list = getContactList() // Idealmente esto vendrá de localStorage o API
                // Inicializamos si está vacío para pruebas
                if (contactState.length === 0) {
                    setContactState(contact_list)
                }
                setLoadingContactState(false)
            },
            500
        )
    }

    const addContact = (newContact) => {
        // Generar ID temporal si no existe
        const contactWithId = {
            ...newContact,
            contact_id: Date.now(),
            contact_unseen_messages: 0,
            last_message_content: 'Nuevo contacto',
            last_message_state: 'NOT_RECEIVED',
            last_message_created_at: new Date()
        }
        setContactState(prev => [contactWithId, ...prev])
    }

    const deleteContact = (contactId) => {
        setContactState(prev => prev.filter(c => c.contact_id !== contactId))
    }

    const updateContact = (updatedContact) => {
        setContactState(prev => prev.map(c =>
            c.contact_id === updatedContact.contact_id ? updatedContact : c
        ))
    }

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        addContact,
        deleteContact,
        updateContact
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}


export default ContactListContextProvider