# Clon de WhatsApp - TP Final Frontend

Este proyecto es una aplicación web desarrollada con React que simula la funcionalidad básica y apariencia de WhatsApp Web. Fue creado como trabajo final para el curso de Programaci&oacute;n Web Inicial.

## Funcionalidades

- **Visualización de Contactos**: Lista de contactos con avatares y últimos mensajes.
- **Búsqueda**: Filtrado de contactos en tiempo real mediante parámetros de url (`useSearchParams`).
- **Navegación**: Enrutamiento dinámico entre pantallas (lista de contactos y chat) usando `react-router-dom`.
- **Mensajería**: Interfaz simula un chat individual con envío de mensajes, respuesta automática y confirmación de lectura (doble check).
- **Gestión de Contactos (CRUD)**: Formulario completo para agregar nuevos contactos.
- **Temas**: Soporte para tema claro y oscuro (Context API).
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla (320px - 2000px).

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de interfaces.
- **React Router DOM**: Para el manejo de rutas y navegación.
- **Vite**: Entorno de desarrollo y empaquetado.
- **React Icons**: Librería de iconos para una interfaz realista.
- **CSS**: Estilos personalizados y variables CSS.

## Requisitos Cumplidos

- [x] Despliegue funcional (listo para Vercel).
- [x] Código en GitHub.
- [x] README.md descriptivo.
- [x] Diseño responsivo.
- [x] Estilos accesibles.
- [x] React Hooks (`useState`, `useEffect`, `useContext`, `useSearchParams`).
- [x] Formulario de búsqueda.
- [x] Componentes reutilizables.

## Instalación y Ejecución

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Dificultades y Soluciones

- **Búsqueda en URL**: Se implementó `useSearchParams` para mantener el estado de la búsqueda en la URL, permitiendo compartir enlaces con filtros activos.
- **Manejo de Estado**: Se utilizaron Contextos para manejar el estado global de contactos y tema, evitando el "prop drilling".
