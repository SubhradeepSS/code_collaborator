
# Code Collaborator 👨‍💻 💬 🔀
Real time peer programming platform to solve
coding problems in multiple supported languages,
edit fellow programmers' code, chat and share code
through WhatsApp.

![](https://user-images.githubusercontent.com/46227193/139620550-dceada90-e3bc-4ecb-a740-7136aa223a19.png)

## Features ✨
- [x]  Light/dark mode toggle
- [x]  Secure Login/Signup system using [**``auth0``**](https://auth0.com/)
- [x]  Secured password-based rooms for peers to collaborate
- [x]  Users can create/join multiple rooms
- [x]  Real time code editing, running with periodic auto save feature
- [x]  Support for multiple programming languages, font size and code editor theme, along with error and output to debug the code.
- [x]  Built in real-time chat along with timestamps, dedicated to a room 
- [x]  Code sharing through WhatsApp using [**``Twilio``**](https://www.twilio.com/)

## Tech Stack 💻
#### Frontend 📄
* [ReactJS](https://reactjs.org/)
* [NextJS](https://nextjs.org/)
* [Chakra-UI](https://chakra-ui.com/)
#### Backend 👷
* [NodeJS](https://nodejs.org/en/)
* [SequelizeJS](https://sequelize.org/)
#### Database 🗃️
* [CockroachDB](https://www.cockroachlabs.com/)
#### Others
* Authentication - [auth0](https://auth0.com/)
* Code sharing - [Twilio](https://www.twilio.com/)
* Socket - [Socket.IO](https://socket.io/)

## Demo 🎬

Find a short demo of the running project [here](https://www.youtube.com/watch?v=PkG0Ux0LwNc)


## Installation ⬇️

1. Clone the project
  ```sh
    git clone https://github.com/SubhradeepSS/code_collaborator
  ```
2. Create accounts in [CockroachDB](https://www.cockroachlabs.com/), [Twilio](https://www.twilio.com/) and [auth0](https://auth0.com/)

3. Navigate to the **```server```** folder from project root by
  ```sh
  cd server
  ```
  * create a ```config.js``` file and enter your credentials
    ```sh
    module.exports = {
        accountSid: "<YOUR TWILIO ACCOUNT SID>",
        authToken: "<YOUR TWILIO AUTHTOKEN>",
        username: "<YOUR COCKROACHDB USERNAME>",
        password: "<YOUR COCKROACHDB CLUSTER PASSWORD>",
        host: "<YOUR COCKROACHDB HOST>",
        port: <PORT NO FOR COCKROACHDB>,
        database: "<YOUR COCKROACHDB CLUSTER NAME>.<COCKROACHDB DATABASE NAME>",
        cert_path: "<LOCAL PATH FOR CERTIFICATE DOWNLOADED FROM COCKROACHDB>"
    }
    ```
 * Install all npm packages
    ```sh
    npm i
    ```
 * Run local dev server
    ```sh
    npm run dev
    ```
4. Navigate to **```socket```** folder from root of project by
  ```sh
  cd socket
  ```
  * Install packages
      ```sh
      npm i
      ```
  * Run dev server
      ```sh
      npm build
      npm run dev2
      ```
5. Navigate to **```frontend```** from root of project by
  ```sh
  cd frontend
  ```
  * Install packages
    ```sh
    npm i
    ```
  * Run local server
    ```sh
    npm build
    npm run dev
    ```

6. Open http://localhost:3000/ and the project will open

## Future scope 📈
- [ ]  Add audio chat
- [ ]  Collaborative drawing board like jamboard
- [ ]  Sharing code through other platforms like Slack, Discord etc.
- [ ]  Integrating better code formatting and styling in code editor
- [ ]  Convert website to Desktop app
- [ ]  Adding unit and integration tests



## License 📄

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing 👩‍💻

Any contributions made to the project are greatly appreciated.
1. Fork the Project
2. Create your Feature Branch (```git checkout -b feature/AmazingFeature```)
3. Commit your Changes (```git commit -m 'Add some AmazingFeature```)
4. Push to the Branch (```git push origin feature/AmazingFeature```)
5. Open a Pull Request


