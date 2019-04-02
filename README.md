# book

| Route           | HTTP          | Description  |
| --------------- |:-------------:| -------------:|
| /book      | GET           | get all  Books info)  |
| /book/:id  | GET           |   get a single Book info |
| /book      | POST          |    create a Book  |
| /book/:id  | DELETE        |    delete a Book |
| /book/:id  | PUT           |    update a Book with new info  |
| /book/?title=<title>  | GET           |    find book by title  |

## member

| Route           | HTTP          | Description  |
| --------------- |:-------------:| -------------:|
| /member      | GET           | get all  members info)  |
| /member/:id  | GET           |   get a single member info |
| /member      | POST          |    create a member  |
| /member/:id  | DELETE        |    delete a member |
| /member/:id  | PUT           |    update a member with new info  |

##transaction

| Route           | HTTP          | Description  |
| --------------- |:-------------:| -------------:|
| /transaction      | GET           | get all  transactions info)  |
| /transaction/:id  | GET           |   get a single transaction info |
| /transaction      | POST          |    create a transaction  |
| /transaction/:id  | DELETE        |    delete a transaction |
| /transaction/:id  | PUT           |    update a transaction with new info  |
| /transaction/?booklist=<id>  | GET           |    find transaction by book id  |


### USAGE
```
$npm init
$npm mongoose express
$ npm run dev 


