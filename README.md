# CRUD-API-RS-school-task

## 1. Prepare

To run the application clone the repository:

```
git clone https://github.com/MartaPejkowska/CRUD-API-RS-school-task.git
```
Go to the newly created folder:

```
cd CRUD-API-RS-school-task
```

Install the dependencies:

```
npm i
```

Create .env file in the root folder, write the environment variable `PORT` and assignt it to a value, e.g. PORT=3000

---

## 2. Application launch

The app can run in production mode or development mode

- Production mode:

  ```
  npm run start:prod
  ```

  starts the build process and then runs the bundled file

- Development mode:

  ```
  npm run start:dev

  ```
## 3. Application Use

The app best to test in Postman.
Add request and check all routes.
  
GET http://localhost:PORT/api/users <br>
GET http://localhost:PORT/api/users/userId <br>
POST http://localhost:PORT/api/users <br>
  
example body:
  {"username":"Zosia",
   "age":23,
   "hobbies":["riding a bike","watching Friends"]}
  
PUT http://localhost:PORT/api/users/userId <br>
DELETE http://localhost:PORT/api/users/userId <br>







