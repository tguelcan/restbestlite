

[![Build Status](https://travis-ci.com/tguelcan/restbestlite.svg?branch=master)](https://travis-ci.com/tguelcan/restbestlite) 
[![dependencies Status](https://david-dm.org/tguelcan/restbestlite/status.svg)](https://david-dm.org/tguelcan/restbestlite) 
[![devDependencies Status](https://david-dm.org/tguelcan/restbestlite/dev-status.svg)](https://david-dm.org/tguelcan/restbestlite?type=dev)

**restbest lite is a lite verion of restbest generator. It is a customizable rest backend and productive generator. It is based on NodeJS, Restify.**

- RESTful - It follows the best practices
- BABEL7 - with ESLint
- User Authentication API - Using [restify-jwt-community](https://github.com/frbuceta/restify-jwt-community)
- Standard error responses - [restify-errors](https://github.com/restify/errors)
- Unit and integration tests - Using Jest
- API docs generator - Using apidoc


# #️⃣ Commands you can use

After you clone this repository, these commands are available in `package.json`.
You can use npm or yarn.

```bash
$ yarn test # test using Jest
$ yarn run test:coverage # test and open the coverage report in the browser
$ yarn run lint # lint using ESLint
$ yarn run dev # run the API in development mode
$ yarn run docs # generate API docs
$ yarn run build # build into /lib
$ yarn run serve # serve from /lib
$ yarn run generate # generate a new /api endpoint or sercice
```

# 🚀 Getting started - Playing locally
## Easy to use with npx (recommended)

## Manual Setup
1. Clone the repository and install dependencies with 'yarn' or 'npm install'
```bash
$ git clone https://github.com/tguelcan/restbestlite
$ yarn
```

2. rename the *.env.example* file to *.env*

3. Run the server in development mode.
```bash
$ yarn run dev
Restify server listening on http://0.0.0.0:9000, in development mode
```

*And voila! We have connected our restful backend application!*

<img src="https://media.giphy.com/media/2wSe48eAUC15p38UqO/source.gif" width="400">

# 🤖 Use the Generator
```bash
$ yarn run generate
? What do you want to generate? (Use arrow keys)
❯ service - Create a new service
  api endpoint - Create a new api endpoint (/api/endpoint)
```

## Service Generator
```bash
? name of the service
```
You can choose the type of the service
```bash
? ? which kind of service you want to generate? (Use arrow keys)
❯ MIDDLEWARE
```
It generates the following files 
```bash
✔  ++ /src/services/yourMiddleware/index.js
```

## Api Generator

It generates the following files 
```bash
✔  ++ /test/api/article.test.js
✔  ++ /src/api/article/index.js
✔  ++ /src/api/article/model.js
✔  ++ /src/api/article/controller.js
```

## Doc Generator

```bash
$ yarn run docs
```

It generates the following files 
```bash
✔  ++ /docs/index.html
✔  ++ API.md
```

# 🚀 Deployment

## Heroku example

```bash
$ heroku create
$ heroku config:set APP_NAME=yourappname MASTER_KEY=changeMeMasterKey123 JWT_SECRET=changeMe123
$ git push heroku master
$ heroku open
```

# 📝 Todo
- Add Auth
    - Local Auth ✔️
    - Roles ✔️
- Add generator ✔️

## License

[MIT](https://opensource.org/licenses/MIT)
