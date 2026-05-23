# M3S3 — Gestión dinámica del DOM con persistencia en el navegador
 
Mini aplicación de lista de notas que permite agregar y eliminar elementos en el DOM, con persistencia de datos usando Local Storage.
 
---
 
## 📁 Estructura del proyecto
 
```
HU3M3/
├── IMG/
│   ├── Al cargar notas despues de actualizar.png
│   ├── Console log.png
│   ├── después de agregar nota.png
│   ├── después de eliminar nota.png
│   ├── DOM antes de agregar y eliminar.png
│   └── local storage.png
├── app.js
├── manipulacion_dom.html
├── style.css
└── README.md
```
 
---
 
## ⚙️ Funcionalidades
 
- **Agregar notas:** el usuario escribe un texto y lo agrega a la lista con el botón "Agregar Nota".
- **Validación:** no se permite agregar notas vacías.
- **Eliminar notas:** cada nota tiene un botón "Eliminar" que la remueve de la lista.
- **Persistencia:** las notas se guardan en Local Storage y se recuperan automáticamente al recargar la página.
---
 
## 🧠 Conceptos aplicados
 
| Concepto | Uso en el proyecto |
|---|---|
| `querySelector` | Selección del input, botón y lista |
| `getElementById` | Selección alternativa de elementos del DOM |
| `createElement` | Creación dinámica de `<li>` y botones |
| `appendChild` | Inserción de notas en la lista |
| `removeChild` | Eliminación de notas del DOM |
| `textContent` | Asignación del texto de cada nota |
| `localStorage.setItem` | Guardar notas en el navegador |
| `localStorage.getItem` | Recuperar notas al cargar la página |
| `JSON.stringify / parse` | Convertir el arreglo a texto y viceversa |
| `filter` | Eliminar una nota del arreglo en memoria |
 
---
 
## 🚀 Cómo ejecutar el proyecto
 
1. Clona o descarga el repositorio.
2. Asegúrate de que los tres archivos (`manipulacion_dom.html`, `app.js`, `style.css`) estén en la misma carpeta.
3. Abre `manipulacion_dom.html` en tu navegador.
No requiere instalación ni dependencias externas.
 