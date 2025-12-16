/* Esto en una app real vendría de una API. Datos simulados para el prototipo. */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Ana García',
        contact_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 2,
        last_message_content: '¡Hola! ¿Cómo estás?',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date('2023-11-20T10:30:00')
    },
    {
        contact_id: 2,
        contact_name: 'Carlos Rodríguez',
        contact_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 0,
        last_message_content: 'Nos vemos mañana en la reunión.',
        last_message_state: 'SEEN',
        last_message_created_at: new Date('2023-11-19T18:45:00')
    },
    {
        contact_id: 3,
        contact_name: 'Grupo Família ❤️',
        contact_avatar: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 5,
        last_message_content: 'Mamá: ¿Quién trae el postre?',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date('2023-11-20T09:15:00')
    },
    {
        contact_id: 4,
        contact_name: 'Lucía Fernández',
        contact_avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 0,
        last_message_content: 'Te envié el archivo por correo.',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date('2023-11-18T14:20:00')
    },
    {
        contact_id: 5,
        contact_name: 'Javier Martínez',
        contact_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 1,
        last_message_content: '¿Sale fútbol el viernes?',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date('2023-11-20T11:00:00')
    },
    {
        contact_id: 6,
        contact_name: 'Sofia Web Dev',
        contact_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 0,
        last_message_content: 'Revisé el PR, todo ok 👍',
        last_message_state: 'SEEN',
        last_message_created_at: new Date('2023-11-19T20:10:00')
    },
    {
        contact_id: 7,
        contact_name: 'Miguel Ángel',
        contact_avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 0,
        last_message_content: 'Jajaja no te puedo creer',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
    {
        contact_id: 8,
        contact_name: 'Comunidad React',
        contact_avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        contact_unseen_messages: 12,
        last_message_content: 'Admin: Nuevo meetup el jueves',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date()
    }
]

export default contact_data