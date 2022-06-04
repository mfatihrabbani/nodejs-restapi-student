# API SPECS

## Create Student

Request :
- Method : POST
- Endpoint : `/api/student`
- Header :
    - Content-Type : application/json
    - Accept : application/json

- Body :

```json
{
    "nama" : "string",
    "kelas" : "number",
    "jurusan" : "string"
}
```

Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" :{
        "id" : "string, unique",
        "nama" : "string",
        "kelas" : "number",
        "jurusan" : "string"
    }
}
```

## Get Student

Request :
- Method : GET
- Endpoint : `/api/student/:id`
- Header :
    - Accept : application/json


Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" :{
        "id" : "string, unique",
        "nama" : "string",
        "kelas" : "number",
        "jurusan" : "string"
    }
}
```

## Update Student

Request :
- Method : PUT
- Endpoint : `/api/student/:id`
- Header :
    - Content-Type : application/json
    - Accept : application/json

- Body :

```json
{
    "nama" : "string",
    "kelas" : "number",
    "jurusan" : "string"
}
```

Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" :{
        "id" : "string, unique",
        "nama" : "string",
        "kelas" : "number",
        "jurusan" : "string"
    }
}
```

## Delete Student

Request :
- Method : DELETE
- Endpoint : `/api/student/:id`
- Header :
    - Accept : application/json


Response :

```json
{
    "code" : "number",
    "status" : "string",
}
```

## List Student

Request :
- Method : GET
- Endpoint : `/api/student`
- Header :
    - Accept : application/json


Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
            "id" : "string, unique",
            "nama" : "string",
            "kelas" : "number",
            "jurusan" : "string"
        },
        {
            "id" : "string, unique",
            "nama" : "string",
            "kelas" : "number",
            "jurusan" : "string"
        }
    ]
}
```
