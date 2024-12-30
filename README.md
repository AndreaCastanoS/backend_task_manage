# Backend - Task Manager

Este es el backend para la aplicación de gestión de tareas "Task Manager". Proporciona una API REST que permite crear, leer, actualizar y eliminar tareas, así como marcarlas como completadas o pendientes.

## 🛠️ Tecnologías usadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: Librería para modelado de datos en MongoDB.
- **Express-validator**: Validaciones de entradas del usuario.
- **Swagger**: Generación de documentación interactiva para la API.

## 📜 Características
1. **Operaciones CRUD**: Crea, lee, actualiza y elimina tareas.
2. **Estado de las tareas**: Posibilidad de marcar tareas como completadas o pendientes.
3. **Filtros**: Opciones para filtrar tareas por su estado (completadas o pendientes).
4. **Documentación interactiva**: Todos los endpoints están documentados con Swagger.

## 🚀 Endpoints
1. **POST /api/tasks**  
   - Crea una nueva tarea.  
   - Valida que el campo `title` esté presente.  

2. **GET /api/tasks**  
   - Devuelve la lista de tareas.  
   - Permite filtrar por estado (`completed` o `pending`).  

3. **GET /api/tasks/:id**  
   - Devuelve los detalles de una tarea específica.  

4. **PUT /api/tasks/:id**  
   - Actualiza los campos de una tarea existente.  

5. **DELETE /api/tasks/:id**  
   - Elimina una tarea específica.  

Consulta la documentación completa de los endpoints en la ruta `/api-docs` (disponible con Swagger).

## ⚙️ Instalación y configuración
1. Clona el repositorio:  
   ```bash
   git clone https://github.com/AndreaCastanoS/backend_task_manager.git
     ```
   
2. Instala las dependencias:
```
npm install
```
 3: Ejecutar la aplicación:

   ```
   npm run dev

