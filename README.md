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

#### Ejemplo del request:

```
POST /api/login HTTP/1.1
Content-Tipo: application/json
Accept: application/json
Accept-Charset: utf-8

{
   "nombre_usuario": "developer",
   "contrasena":"12345678"
}
```

##### Descripción de los parámetros

| Parámetro        | Tipo   | Descripción                                    |
| ---------------- | ------ | ---------------------------------------------- |
| `nombre_usuario` | string | Usuario que se desea loguear en la aplicación. |
| `contrasena`     | string | Contraseña del usuario.                        |

Si el login es satisfactorio, se recibe de respuesta el token de autorización.

```
HTTP/1.1 201 OK
Content-Type: application/json; charset=utf-8

{
 "token_sesion": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUyMCwiaWF0IjoxNjUyMzYzODcwLCJleHAiOjE2NTIzNjc0NzB9.yZb5mauyyo5RukxrQnnetFUe5K2VKUuqA83Hikv6Opw
}
```

##### Descripción de la respuesta

| Parámetro      | Tipo   | Descripción                                                                                                    |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| `token_sesion` | string | Un token que es válido por 1 hora y puede usarse para realizar solicitudes autenticadas en nombre del usuario. |

##### Se debe tener en cuenta que:

- Todas las Api, necesitan tener en el header, en el campo Authorization el valor del token para poder realizar operaciones.
- Si requiere generar un nuevo token,debe realizar de nuevo el proceso de logueo.

### **Obtener todos los usuarios**

```http
GET /api/usuarios
```

Retorna la lista de todos los usuarios registrados en la aplicación.

#### Ejemplo del request

```
GET /api/usuarios HTTP/1.1
Authorization: {{token}}
Content-Tipo: application/json
Accept: application/json
Accept-Charset: utf-8
```

##### Ejemplo de la respuesta:

La respuesta es un array json con los datos de los usuarios.

```
HTTP/1.1 200 OK
Content-Tipo: application/json; charset=utf-8
{
	"usuarios": {
		"id": 520,
		"nombre_usuario": "edvillaneda",
		"estado_usuario": "1",
		"codigo_dependencia": "0",
		"cedula": "16864870",
		"empresa": "PersonalSoft",
		"cargo": "Senior Developer",
		"correo": "edvillaneda@personalsoft.com"
	},
	{...},
	{...}
}
```

##### Descripción de la respuesta

| Parámetro            | Tipo      | Descripción                           |
| :------------------- | :-------- | :------------------------------------ |
| `nombre_usuario`     | `string`  | Nombre de usuario de la aplicación.   |
| `estado_usuario`     | `boolean` | Indicador de usuario activo/inactivo. |
| `codigo_dependencia` | `string`  | Nombre del usuario.                   |
| `cedula`             | `string`  | Número de identificación del usuario. |
| `empresa`            | `string`  | Empresa del usuario.                  |
| `cargo`              | `string`  | Cargo del usuario.                    |
| `correo`             | `string`  | Correo electrónico del usuario.       |

##### Posibles errores:

| Codigo de Error   | Descripción                                 |
| ----------------- | ------------------------------------------- |
| 401 Unauthorized  | El `Token` no es válido o ha sido revocado. |
| 404 No Encontrado | Error al intentar buscar los usuarios.      |

### Obtener un usuario por id

```http
GET /api/usuarios/${id}
```

Obtiene la información de usuario, filtrado por el id (_primary key_)

#### Ejemplo del request

```
GET /api/usuarios/${id} HTTP/1.1
Authorization: {{token}}
Content-Tipo: application/json
Accept: application/json
Accept-Charset: utf-8
```

| Parámetro | Tipo     | Descripción                    |
| --------- | -------- | ------------------------------ |
| `id`      | `string` | **Requerido**. Id del usuario. |

##### Ejemplo de la respuesta:

La respuesta es un json con los datos de los usuarios.

```
HTTP/1.1 200 OK
Content-Tipo: application/json; charset=utf-8
{
	"id": 520,
	"nombre_usuario": "edvillaneda",
	"estado_usuario": "1",
	"codigo_dependencia": "0",
	"cedula": "16864870",
	"empresa": "PersonalSoft",
	"cargo": "Senior Developer",
	"correo": "edvillaneda@personalsoft.com"
}
```

##### Descripción de la respuesta

| Parámetro            | Tipo      | Descripción                           |
| :------------------- | :-------- | :------------------------------------ |
| `nombre_usuario`     | `string`  | Nombre de usuario de la aplicación.   |
| `estado_usuario`     | `boolean` | Indicador de usuario activo/inactivo. |
| `codigo_dependencia` | `string`  | Nombre del usuario.                   |
| `cedula`             | `string`  | Número de identificación del usuario. |
| `empresa`            | `string`  | Empresa del usuario.                  |
| `cargo`              | `string`  | Cargo del usuario.                    |
| `correo`             | `string`  | Correo electrónico del usuario.       |

##### Posibles errores:

| Codigo de Error   | Descripción                                 |
| ----------------- | ------------------------------------------- |
| 401 Unauthorized  | El `Token` no es válido o ha sido revocado. |
| 404 No Encontrado | Error al intentar buscar el usuario.        |

### Obtener un usuario por nombre

```http
GET /api/usuarios/${nombre_usuario}
```

Obtiene la información de un usuario filtrado por el `nombre de usuario`.

#### Ejemplo del request

```
GET /api/usuarios/${nombre_usuario} HTTP/1.1
Authorization: {{token}}
Content-Tipo: application/json
Accept: application/json
Accept-Charset: utf-8
```

| Parámetro        | Tipo     | Descripción             |
| ---------------- | -------- | ----------------------- |
| `nombre_usuario` | `string` | **Requerido**. Usuario. |

##### Ejemplo de la respuesta:

La respuesta es un json con los datos de los usuarios.

```
HTTP/1.1 200 OK
Content-Tipo: application/json; charset=utf-8
{
	"id": 520,
	"nombre_usuario": "edvillaneda",
	"estado_usuario": "1",
	"codigo_dependencia": "0",
	"cedula": "16864870",
	"empresa": "PersonalSoft",
	"cargo": "Senior Developer",
	"correo": "edvillaneda@personalsoft.com"
}
```

##### Descripción de la respuesta

| Parámetro            | Tipo      | Descripción                           |
| :------------------- | :-------- | :------------------------------------ |
| `nombre_usuario`     | `string`  | Nombre de usuario de la aplicación.   |
| `estado_usuario`     | `boolean` | Indicador de usuario activo/inactivo. |
| `codigo_dependencia` | `string`  | Nombre del usuario.                   |
| `cedula`             | `string`  | Número de identificación del usuario. |
| `empresa`            | `string`  | Empresa del usuario.                  |
| `cargo`              | `string`  | Cargo del usuario.                    |
| `correo`             | `string`  | Correo electrónico del usuario.       |

##### Posibles errores:

| Codigo de Error   | Descripción                                 |
| ----------------- | ------------------------------------------- |
| 401 Unauthorized  | El `Token` no es válido o ha sido revocado. |
| 404 No Encontrado | Error al intentar buscar el usuario.        |

#### Consultas API CLIAME

[Documentación api **CLIAME**](doc/CLIAME.md)

#### Consultas API Procedimientos Almacenados

[Documentación api **Procedimientos Almacenados**](doc/Procedures.MD)

## Variables de Entorno (Archivo .env)

Para ejecutar este proyecto es necesario configurar las variables de entorno, en el archivo .env que debe existir o crearse en la raíz.

### Variables generales

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
