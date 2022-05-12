### **Registros de la tabla 'getAseguradorasByDoc'**

```http
GET /api/procedure/getAseguradorasByDoc/
```

Ejecuta el procedimiento almacenado `getAseguradorasByDoc` y retorna la respuesta en formato JSON.

#### Ejemplo del request

```
GET /api/procedure/getAseguradorasByDoc/ HTTP/1.1
Authorization: {{token}}
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
{
    "documento": "683675",
    "empresa": "cliame"
}
```

#### Descripcion parametros del request

| Parámetro   | Tipo     | Descripción                                                       |
| ----------- | -------- | ----------------------------------------------------------------- |
| `documento` | `string` | **Requerido**. Número de identificación del paciente              |
| `empresa`   | `string` | **Requerido**. Empresa que se desea consultar. _**Ejem:** cliame_ |

La respuesta es un objeto json con los datos del (los) usuario(s).

#### Ejemplo de la respuesta:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
[
    {
        "documento": "683675",
        "nit": "800088702",
        "nombre": "SAP _EPS SURA",
        "codigoRegimen": "1",
        "posicion": "eps",
        "nombreRegimen": "Urgencias",
        "posicionCodigo": "0",
        "carneNumero": "0",
        "tipoDocumento": "CC",
        "tipoAfiliacion": "CONTRIBUTIVO",
        "estrato": "",
        "tipoPaciente": "Urgencias",
        "eps": "SAP _EPS SURA"
    },
	{...},
	{...}
]
```

#### Descripción de los datos de respuesta

| Parámetro        | Tipo      | Descripción                        |
| ---------------- | --------- | ---------------------------------- |
| `documento`      | `string`  | Identificación del paciente        |
| `nit`            | `string`  | Número de idenficiación tributaria |
| `nombre`         | `string`  | Nombre del paciente                |
| `codigoRegimen`  | `string`  | Código del regimen                 |
| `posicion`       | `string`  | Posición                           |
| `nombreRegimen`  | `string`  | Nombre del regimen                 |
| `posicionCodigo` | `string`  | Posición código                    |
| `carneNumero`    | `string ` | Número del carnet                  |
| `tipoDocumento`  | `string`  | Tipo de documento                  |
| `tipoAfiliacion` | `string`  | Tipo de afiliación                 |
| `estrato`        | `string`  | Estrato del paciente               |
| `tipoPaciente`   | `string`  | Tipo de paciente                   |
| `eps`            | `string`  | Aseguradora del paciente           |

#### Posibles errores:

| Codigo de Error                | Descripción                                 |
| ------------------------------ | ------------------------------------------- |
| 400 Bad Request                | La petición no puede ser procesada.         |
| 401 Unauthorized               | El `Token` no es válido o ha sido revocado. |
| 404 No Encontrado              | Error al intentar realizar la consulta.     |
| 500 Error Interno del Servidor | Error al intentar realizar la consulta.     |
