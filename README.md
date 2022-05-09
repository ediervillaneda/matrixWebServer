# Matrix Web Server

API de datos de Matrix, implementación de servicios para la consulta de tablas y manejo de datos por medio de procedimientos almacenados en base de datos MySQL.

## Ejecutar Localmente

Clonar el proyecto

```bash
 git clone https://github.com/ediervillaneda/matrixWebServer.git
```

Ingresar al directorio del proyecto

```bash
 cd matrixWebServer
```

Instalar las dependencias npm ![npm](https://img.shields.io/npm/v/bcryptjs)

```bash
 npm install
```

Compilar e iniciar el servidor

```bash
 npm run build
 npm run start
```

## Referencia del API

### Obtener todos los usuarios

```http
 POST /api/login
```
Para realizar cualquier operación con la API, necesitará un Token de autorización. Un Token de autorización, otorga un acceso limitado a las consultas que se pueden realizar. La única forma de obtener un token es por medio del logueo y en el cual éste será autoemitido.

Ejemplo del request:
```
POST /v1/publications/b45573563f5a/posts HTTP/1.1
Host: api.medium.com
Authorization: Bearer 181d415f34379af07b2c11d144dfbe35d
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8

{
   "nombre_usuario": "edvillaneda",
   "contrasena":"12345678"
}
```

Si el login es satisfactorio, se recibe de respuesta el token de autorización.
```
HTTP/1.1 201 OK
Content-Type: application/json; charset=utf-8

{
 "token_sesion": {{token}}
}
```
Con los siguientes parámetros:

| Parámetro       | Tipo         |  Descripción                                     |
| -------------   |--------------|--------------------------------------------------|
| `token_sesion`  | string       |  Un token que es válido por 1 hora y puede usarse para realizar solicitudes autenticadas en nombre del usuario. |

Se debe tener en cuenta que:
- Todas las Api, necesitan tener en el header, en el campo Authorization el valor del token para poder realizar operaciones.
- Si requiere generar un nuevo token,debe realizar de nuevo el proceso de logueo.


### **Obtener todos los usuarios**

```http
 GET /api/usuarios
```
Retorna la lista de usuarios registrados en la aplicación.

Ejemplo del request

```
GET /v1/me HTTP/1.1
Host: api.medium.com
Authorization: 181d415f34379af07b2c11d144dfbe35d
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
```

La respuesta es un array json con los datos de los usuarios.

Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
   "usuarios": {
       "id": 520,
       "nombre_usuario": "edvillaneda",
       "estado_usuario": "1",
       "token_sesion": "",
       "codigo_dependencia": "0",
       "contrasena": "$2a$10$tXaFymuuJ/s5Fa.H4Jc0ouKVNwMlRhQfKaVDIvwqHyPt1odBlx/IG",
       "cedula": "16864870",
       "empresa": "PersonalSoft",
       "cargo": "Senior Developer",
       "correo": "edvillaneda@personalsoft.com"
   }
}
```

| Parameter            | Type      | Description                           |
| :------------------- | :-------- | :-------------------------------------|
| `nombre_usuario`     | `string`  | Nombre de usuario de la aplicación.   |
| `estado_usuario`     | `boolean` | Indicador de usuario activo/inactivo. |
| `codigo_dependencia` | `string`  | Nombre del usuario.                   |
| `contrasena`         | `string`  | Nombre del usuario.                   |
| `cedula`             | `string`  | Número de identificación del usuario. |
| `empresa`            | `string`  | Empresa del usuario.                  |
| `cargo`              | `string`  | Cargo del usuario.                    |
| `correo`             | `string`  | Correo electrónico del usuario.       |

Posibles errores:
| Codigo de Error  | Descripción                                 |
| -----------------|---------------------------------------------|
| 401 Unauthorized | El `Token` no es válido o ha sido revocado. |
| 404 Not Found    | Error al intentar buscar los usuarios.      |


### Obtener un usuario por id

```http
 GET /api/usuarios/${id}
```

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `id`      | `string` | **Required**. Id del usuario. |

### Obtener un usuario por nombre

```http
 GET /api/usuarios/${nombre}
```

## Variables de Entorno (Archivo .env)

Para ejecutar este proyecto es necesario configurar las variables de entorno, en el archivo .env que debe existir o crearse en la raíz.

`STATUS=` Ambiente de desarrollo

`DEV_PORT=` Puerto del servidor en el ambiente de desarrollo

`PROD_PORT=` Puerto del servidor en el ambiente de producción

`JWT_SECRET=` Llave secreta de la autenticación

### Conexion a BD Mysql Usuarios

`MYSQL_USUARIOS_HOST=''`

`MYSQL_USUARIOS_USER=''`

`MYSQL_USUARIOS_PASS=''`

`MYSQL_USUARIOS_DB=''`

### Conexion a BD Mysql Matrix

`MYSQL_MATRIX_HOST=''`

`MYSQL_MATRIX_USER=''`

`MYSQL_MATRIX_PASS=''`

`MYSQL_MATRIX_DB=''`

## Authors

- [@ediervillaneda](https://www.github.com/ediervillaneda)
