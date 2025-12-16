/* 
Snippet para crear un componente de react
RFC = Componente Funcional de React
*/


import './ContactSidebar.css'
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'
import { MdDonutLarge, MdChat, MdMoreVert, MdGroups } from "react-icons/md"; // Iconos Material Design

/*
Componente Sidebar
Contiene: Cabecera (perfil + acciones), Buscador, Filtros y Lista de Contactos
*/
export default function ContactSidebar() {

    // El contexto de tema podría usarse aquí si quisiéramos togglear
    // pero WhatsApp Web siempre es dark/light completo.
    const { isDark } = useContext(ThemeContext)

    return (
        <aside className="contact-sidebar">

            {/* Cabecera: Avatar Propio + Acciones */}
            <header className="sidebar-header">
                <div className="user-avatar">
                    {/* Avatar hardcodeado por ahora (simulando usuario logueado) */}
                    <img src="https://media.licdn.com/dms/image/v2/C5603AQEU5M92y0pZ_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1628766989437?e=1740009600&v=beta&t=H3-gI6FjWvYJv6Xj9-gI6FjWvYJv6Xj9-gI6FjWvYJv6Xj9" alt="Mi perfil" />
                </div>
                <div className="header-icons">
                    <MdGroups className="icon-btn" title="Comunidades" />
                    <MdDonutLarge className="icon-btn" title="Estados" />
                    <MdChat className="icon-btn" title="Nuevo chat" />
                    <MdMoreVert className="icon-btn" title="Menú" />
                </div>
            </header>

            {/* Contenedor de Búsqueda y Filtros */}
            <div className="sidebar-search-container">
                <ContactSearchForm />

                {/* Filtros visuales (Chips) */}
                <div className="filter-chips">
                    <span className="filter-chip active">Todos</span>
                    <span className="filter-chip">No leídos</span>
                    <span className="filter-chip">Favoritos</span>
                    <span className="filter-chip">Grupos</span>
                </div>
            </div>

            {/* Lista de Contactos Scrollable */}
            <ContactList />

        </aside>
    )
}
