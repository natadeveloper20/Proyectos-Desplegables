/* 
Snippet para crear un componente de react
RFC = Componente Funcional de React
*/


import './ContactSidebar.css'
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'

export default function ContactSidebar() {



    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        <aside className={`aside ` + (isDark ? 'aside-dark' : '')}>
            <button onClick={toggleTheme}>Cambiar tema</button>
            <div>
                <ContactSearchForm />
                <a>Crear contacto</a>
            </div>
            <ContactList />
        </aside>
    )
}
