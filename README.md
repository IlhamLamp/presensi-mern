<H1 align ="center" > SISTEM PRESENSI SMAN 2 CIBITUNG</h1>
<h5  align ="center"> 
Fullstack open source login & register dashboard application made with MySql, Express, React & Nodejs (MERN) </h5>
<br/>

- [Configuration and Setup](#configuration-and-setup)
- [Key Features](#key-features)
- [Technologies used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
- [Screenshots](#screenshots)
- [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run dev(to start the client)
```

In the second terminal

- Create your MySQL database, which you will use as your database
- Supply the following credentials

```
# --- Terminal ---

$ cd server
$ npm install (to install server-side dependencies)
$ npm start (to start the server)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.


####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [mysql](https://www.npmjs.com/package/mysql) - For authentication
- [cors](https://www.npmjs.com/package/uuid) - Provides a Connect/Express middleware

####  Database 

 - [MySQL ](https://www.mysql.com/) - Makes it easier for new users to get started with the database.

 ##  Screenshots 

![img-1](/.github/assets/img1-login.png)
--- -
![img-2](/.github/assets/img2-register.png)
--- - 
![img-3](/.github/assets/img3-dashboard.png)
--- - 
![img-4](/.github/assets/img4-kehadiran.png)
--- - 
![img-5](/.github/assets/img5-kelas.png)
--- - 
![img-6](/.github/assets/img6-laporan.png)
--- - 
![img-7](/.github/assets/img7-siswa.png)

<!-- ## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com) -->

## License

MIT License

Copyright (c) 2023 Ilham N

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.