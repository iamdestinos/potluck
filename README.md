# Potluck Planner

Potluck Planner is an application that will help you organize or plan your next potluck dinner.

* A User can choose to create a new or attend an existing Potluck Dinner
* A User can see what food is already being brought and add the food they will bring.
* A User can use the interactive map to find the closest Potluck or create a new one at their desired location.
* A User gains clout by creating, attending or bringing food to a potluck, which will be displayed on their user profile.

## Installation
This installation is for development purposes **only**.

Please first make your own fork of this repo and then proceed with the following commands.

```bash
~ git clone https://github.com/<YOUR GITHUB USERNAME>/potluck.git

~ cd /potluck

~ npm install
```
### Setup .env
1. create .env file in root directory and copy contents from example.env into env file. then fill out the keys

2. https://auth0.com for auth0 keys and client id

3. https://mapbox.com for keys to mapbox

4. https://www.mongodb.com/atlas/database to set up database cluster and get uri string for mongoose connection in env file
```bash
~ npm run dev
```
## Tech Stack
1. Node.js, Express
2. MongoDB, Mongoose
3. React, React-router
4. Auth0
5. MapBoxGL
6. AWS
7. Caddy Server
8. Bootstrap
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


