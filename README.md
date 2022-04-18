# TriumphAPI

### TriumphAPI is an API that returns all (or almost everything) Triumph motorcycles.

<br>

## <u>Database informations</u>
<br>

The database in based on a list of Wikipedia : https://en.wikipedia.org/wiki/List_of_Triumph_motorcycles
<br>

- ### Motos
| Attribute    | Exemple                                                     | 
|--------------|-------------------------------------------------------------|
| name         | First Model                                                 |       
| years        | 1902-1904                                                   |
| note         | used Minerva, JAP and Fafnir engines                        |

---
## <u>Routes</u>

### There are 4 types of routes :
- one that returns the home page of the server.
- one that returns all the motos.
- one that return a moto based on her name.
- one for insert datas into the database.

---
<br>

- ### Home page of the server :

```
http://localhost:8080/
```

- ### all motos :
```
http://localhost:8080/motos/all/
```

- ### a moto based on her name : 
for example :
```
http://localhost:8080/motos/First%Model/
```

## <u>Insert datas into the database :</u>
<br>

### I used MongoDB for the database. For insert datas into the database, you need use Postman and go to this url :
<br>

```
http://localhost:8080/motos/register/ 
```
<img src="https://cdn.discordapp.com/attachments/907700857150267395/965542007235809351/unknown.png" width="550px">

### and post datas into the database following this scheme.
---