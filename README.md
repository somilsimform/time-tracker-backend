TIME TRACKER APP BACKEND

This repo consists of the backend code written in nodejs, sequelize with postgres.

PREREQUISITES and STEPS TO RUN the CODE

1. Create a postgres database.

2. Clone the repo [time-tracker-backend](https://github.com/somilsimform/time-tracker-backend)

3. Create .env file for accessing environment variables in the project.

```
DB_HOST=localhost
DB_USER=admin
DB_PASS=admin
DB_NAME=logtimer7
DB_DIALECT=postgres
DB_PORT=5432
APP_HOST=localhost
APP_PORT=3100
SECRET=adasxovnklnqklnkjdsankdnw
```

4. After adding the database creds in .env file, run the migrations to create the tables in the database created in above step using below command.

`npm run db:migrate`

5. After running the migrations, now its turn to add some data into the app. So now we need to run the seeders to fill the tables created in above step.

`npm run db:seed:all`

6. After running above commands successfully you can start the server using below commands and server will start on port 3100

`npm run start`

7. After above command your server will start running on port mentioned in env file. You can update the backend url in react frontend env for connection Backend and frontend.

Video Demo:- https://www.loom.com/share/bf8a93d27e1041daa0873c7f80ac2490
