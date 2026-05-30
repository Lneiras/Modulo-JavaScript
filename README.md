# Mini Aplicación Web de Gestión de Productos

## Descripción

Este proyecto es una mini aplicación web desarrollada con HTML, CSS y JavaScript que permite gestionar una lista de productos mediante operaciones CRUD. La aplicación implementa manipulación dinámica del DOM, persistencia de datos mediante Local Storage y sincronización con una API REST utilizando Fetch API y JSON Server.

## Funcionalidades

- Agregar productos mediante un formulario.
- Validación de datos ingresados por el usuario.
- Mostrar productos dinámicamente en el DOM.
- Eliminar productos de la lista.
- Persistencia de datos utilizando Local Storage.
- Sincronización con una API mediante Fetch API.
- Operaciones CRUD:
  - GET: Obtener productos.
  - POST: Crear productos.
  - PUT: Actualizar productos.
  - DELETE: Eliminar productos.
- Manejo de errores mediante `try...catch`.
- Uso de JavaScript moderno (ES6+).

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage
- Fetch API
- JSON Server

## Estructura del Proyecto

```
├──HU4M3/                  # Historia de Usuario 4 (Módulo 3 - ACTUAL)
│    ├── index.html
│    ├── style.css
│    ├── app.js
│    ├── db.json
└── README.md   
```

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

### 2. Instalar JSON Server

```bash
npm install -g json-server
```

O utilizando npx:

```bash
npm install json-server
```

### 3. Iniciar el servidor

Ubicarse en la carpeta del proyecto y ejecutar:

```bash
npx json-server --watch db.json 
```

### 4. Abrir la aplicación

Abrir el archivo `index.html` en el navegador o utilizar una extensión como Live Server.

## API Utilizada

La aplicación consume una API local creada con JSON Server.

Endpoint principal:

```
Lo arroja la terminal 

EJ: http://localhost:3000/productos
```

### Métodos soportados

| Método | Descripción |
|----------|------------|
| GET | Obtener productos |
| POST | Crear producto |
| PUT | Actualizar producto |
| DELETE | Eliminar producto |

## Persistencia de Datos

Los productos se almacenan localmente utilizando:

```javascript
localStorage.setItem()
localStorage.getItem()
```

Esto permite conservar la información incluso después de recargar la página.

## Evidencias de Funcionamiento

Durante la ejecución se puede verificar:

- Productos agregados en el DOM.
- Productos almacenados en Local Storage.
- Respuestas de la API en la consola.
- Sincronización entre la aplicación y JSON Server.
 