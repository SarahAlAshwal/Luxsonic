# Luxsonic Project
This application lets users create account and login to a dashboard where they can enter some reocrds. Then they can display the records associated to their account. Moreover, they can save them in their local storage. 

## To run the Application

### Client 
cd into the folder client  
npm install  
npm start  
to start the client server then in the browser open [http://localhost:3000](http://localhost:3000)


### Server
from the main folder   
npm install  
npm run server   
[http://localhost:5000](http://localhost:5000)

### Database
PostgreSQL 12.7  
The scripts for creating the tables are in database.sql

### Envirnoment variables
npm install dotenv

create a .env file  

DB_USER = db-user-name  
DB_PASSWORD = db-passwrod  
DB_HOST = localhost  
PORT = port  
DATABASE = db-name  
JWTSECRET = any-string

