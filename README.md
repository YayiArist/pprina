﻿# challengePPrina - Interfaz de Administración de Productos


## Descripción
Este proyecto es parte de un desafío para construir una interfaz de usuario sencilla y eficiente para la administración de productos en una empresa. Permite a los usuarios listar productos, modificar precios y guardar los cambios realizados.

## Objetivo
El objetivo de este desafío es crear una interfaz de administración de productos que incluya las siguientes funcionalidades:

- Listar productos.
- Modificar precios de productos.
- Guardar cambios realizados en la interfaz (simulación de persistencia).

## Tecnologías Utilizadas
- Frontend: React con TypeScript
- Backend: Node.js y Express
- Base de Datos: MongoDB

## Instalación
1. Clona este repositorio.
2. Navega a la carpeta del proyecto: `cd pprina`
3. Instala las dependencias del backend: `cd api && npm install`
4. Navega a la carpeta del frontend: `cd ../client && npm install`
5. Configura las credenciales de la base de datos en una variable de entorno en la carpeta `api`.




## Iniciar la Aplicación en Desarrollo
1. En la carpeta del frontend, inicia la aplicación React: `npm run dev`
2. En la carpeta del backend, inicia el servidor Node.js: `npm run dev`

**Nota:** Asegúrate de configurar correctamente las credenciales de la base de datos y verificar que el puerto del frontend esté configurado como http://localhost:5173 para autenticación con Auth0.

## Funcionamiento
- Los usuarios pueden listar productos con información de precios.
- Se pueden modificar los precios de los productos y guardar los cambios.
- La autenticación se realiza mediante Auth0.
- Los usuarios no logueados pueden explorar productos, pero deben registrarse para comprar o crear productos.


