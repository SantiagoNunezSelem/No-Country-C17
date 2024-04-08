# Instrucciones para Conectar a la Base de Datos MySQL

Este repositorio utiliza una base de datos MySQL para almacenar y gestionar datos. Para conectar tu aplicación a la base de datos, sigue los siguientes pasos:

## Crear Archivo .env

En la raíz de este proyecto, crea un archivo llamado `.env`.

## Configurar las Credenciales de MySQL

Dentro del archivo `.env`, añade las siguientes variables de entorno y proporciona los valores correspondientes:

```plaintext
PORT=     # Puerto de conexión a la base de datos (opcional)
DB_HOST=  # Dirección del host de la base de datos (por ejemplo: localhost)
DB_USER=  # Nombre de usuario de la base de datos
DB_PASSWORD=  # Contraseña del usuario de la base de datos
DB_DATABASE=  # Nombre de la base de datos que deseas conectar


