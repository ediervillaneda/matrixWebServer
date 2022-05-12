
### **Registros de la tabla 'cliame_000105'**

```http
GET /api/matrix/105
```
Retorna la lista de parámetros filtrados por el indicador suministrado.

#### Ejemplo del request
```
GET /api/cliame/015 HTTP/1.1
Host: {{host}}
Authorization: {{token}}
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
	"seltip": "01",
}
```

La respuesta es un array json con los datos de los usuarios.

#### Ejemplo de la respuesta:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
[
	{
	"medico": "cliame",
	"fecha_data": "2006-09-18",
	"hora_data": "17:01:51",
	"seltip": "01",
	"selcod": "AS",
	"seldes": "ADULTO SIN IDENTIFICACION",
	"selpri": 5,
	"selest": "on",
	"selcux": "",
	"selmat": "",
	"selrel": "",
	"selcam": "",
	"seguridad": "C-cliame",
	"id": 1
	},
	{...},
	{...}
]
```
#### Descripción de los datos de respuesta
| Parámetro | Tipo | Descripción |
| ------------| -------- | -----------|
| `medico` | `string` | |
| `fecha_data` | `date` | |
| `hora_data` | `time` | |
| `seltip` | `string` | |
| `selcod` | `string` | |
| `seldes` | `string` | |
| `selpri` | `string` | |
| `selest` | `char ` | |
| `selcux` | `string` | |
| `selmat` | `string` | |
| `selrel` | `string` | |
| `selcam` | `string` | |
| `id` | `string` | |



#### Posibles errores:

| Codigo de Error | Descripción |
| -----------------|---------------------------------------------|
| 400 Bad Request | La petición no puede ser procesada. |
| 401 Unauthorized | El `Token` no es válido o ha sido revocado. |
| 404 No Encontrado | Error al intentar realizar la consulta. |
| 500 Error Interno del Servidor | Error al intentar realizar la consulta. |
