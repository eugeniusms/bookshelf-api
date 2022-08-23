# Bookshelf API
https://github.com/eugeniusms/bookshelf-api
<br/>
![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `hapi` ![node.js](https://via.placeholder.com/15/c5f015/c5f015.png) `nodejs`

Bookshelf API is a storage service and book data management tool.

## Installation

Bookshelf API requires [Node.js](https://nodejs.org/) v16.14+ to run.

Clone the repository
```sh
git clone https://github.com/eugeniusms/bookshelf-api
```

Install the dependencies and devDependencies and start the server.

```sh
cd bookshelf-api
npm i
npm run start
```
Server will be running on localhost:8001 (Default)
## API
Instructions on how to use API in your own application are linked below.

| Method | Route | Explanation |
| ------ | ------ | ------ |
| GET | /books | Get all the books available |
| GET | /books/{id} | Get details of a book based on ID |
| POST | /books | Add a new book |
| PUT | /books/{id} | Edit a available book based on ID |
| DEL | /books/{id} | Remove a available book based on ID |

## Query
Instructions on how to use query in your own application are linked below.

| Method | Route | Query | Explanation |
| ------ | ------ | ------ | ------ |
| GET | /books | ?name= | Get all books with spesific name |
| GET | /books | ?reading= | Get all books with spesific reading mode |
| GET | /books | ?finished= | Get all books with spesific finished mode |

@ 2022 Open Source Project by Eugenius Mario S

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [node.js]: <http://nodejs.org>

   
