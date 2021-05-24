# Library-app

Library-app es una aplicación web realizada con React, MongoDB, Express y NodeJS. La aplicación simula una biblioteca, donde uno puede agregar libros e interactuar con ellos. Se encuentran las siguientes funcionalidades:
- Gestionar los libros (crearlos, listarlos, editarlos, eliminarlos). Cada acción será evaluada según el creador; es decir, solo el creador es capaz de editar y eliminar sus propios libros.
- Login: registro e ingreso. Es necesario estar autenticado para poder ingresar libros.
- Google Login: Ingresar a la biblioteca haciendo uso de tu correo Gmail, gracias al API de Google.
- Like: Darle like a los libros que se presentan en la biblioteca. Es necesario estar autenticado para darle like a los libros.
- Buscador: Buscar los libros por categorías y por título del libro.
- Paginación: Entre más libros agregados, se habilitarán diferentes páginas para su mejor visualización.

Video demostrativo: https://www.youtube.com/watch?v=_H0XDIW79wE

Online host: https://library-app-full.netlify.app/posts

## Instalación

Para su instalación es necesario descargar/clonar el repositorio. **NOTA: Es necesario tener instalado NodeJs.** 

Una vez clonado, realizar los siguientes comandos en la carpeta de "client" y "server"
```
    npm install
```
Finalmente, en ambas carpetas
```
    npm start
```
## Estructura de Componentes

### Auth Page

<a href="https://imgur.com/OsTjR6Z"><img src="https://i.imgur.com/OsTjR6Z.png" title="source: imgur.com" /></a>

### Posts Page

<a href="https://imgur.com/ITylRjb"><img src="https://i.imgur.com/ITylRjb.png" title="source: imgur.com" /></a>

