`***b22-coffeeShop-backend***` is a simple api endpoint for library application built with Node.js, Express Js as a framework of Node.js and MySQL as a database which has [features](https://github.com/rifanid98/libraryapp-api#features) such as login / register using JWT, pasword hashing, CORS, etc. 

## :memo: Table Of Content
* [Prerequisites](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#prerequisites)
* [Installation](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#installation)
* [Features](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#features)
* [Examples](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#examples)
* [Built wtih](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#features)
* [Author](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#author)
* [License](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner#license)

## Prerequisites
- Node.js installed on the local machine
- MySQL intalled on the local machine (ex. XAMPP)

## Installation
1. Clone this repository:
    `git clone https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner`
2. Start XAMPP
3. Database configuration:
    * Open http://localhost/phpmyadmin in the browser
    * Import database, select `barely-coffee-shop.sql` file from project folder
4. Setting file .env:
    ```
    APP_URL=http://localhost:8880 //app url access
    APP_KEY=KeepItReal //key access
    PORT=8880 // port
    APP_TRANSACTION_PREFIX=CS //prefix transaction

    MYSQL_HOST = localhost
    MYSQL_USER = root
    MYSQL_PASSWORD =
    MYSQL_DATABASE = barely-coffee-shop
    ```
5. Start the server:
    * Open root project folder with command line (terminal, linux. cmd, windows. etc.)
    * Type and run this command `npm start` to start the server.
    * Make sure there are no other processes that use port 8880
6. Run app with api testing tools like postman, etc. on http://localhost:8880/

## Features
- [x] CRUD
- [x] Search, Sort, Pagination
- [x] CORS allowed
- [x] Login/Register with JWT
- [x] Password hashing

## Examples
[How to use](https://www.getpostman.com/collections/5cd81780ceeaa5ee57cd)

## Built with
- [Node.js](http://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Node.js framework
- [MySQL](https://www.mysql.com/) Database
- [JWT](https://jwt.io/) - Login/Register authentication
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password Hashing

## Author
- [Muhammad Rizky Ramadhan](https://www.linkedin.com/in/zzzzidannnn/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/MuhammadRizkyRamadhan24/b22-backend-beginner/blob/master/LICENSE) file for details
