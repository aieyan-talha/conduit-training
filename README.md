# conduit-training
A website similar to medium.com built purposefully for learning purposes. Implemented using react and redux, it allows you to create your own account, read others articles, follow a particular user and much more

## Main features
- Login/Signup using JSON Web Tokens
- Add new article
- Display all articles in global feed
- User Profile/Dashboard
- Display all user's articles
- Change settings of users profile
- View article
- Like and comment on article
- Follow another user

## How to run?
The node_modules have been removed in the git upload, as alot of repositories are required to run the project therefore node_modules will be required to run the project, otherwise you will run into multiple errors while running the project. If you wish to see which repos are required and install them yourself induvidually, just browse into the package.json file in both the client and server and look at the dependencies stated in the file. Otherwise simply run the following command:

```bash
npm install
```
Now as there are two different project, one housing the server and the other containing the client front-end, therefore you will have to redirect into both directories and run the above command seperatly. Once that is completed, simply go into [server](https://github.com/aieyan-talha/conduit-training/tree/04acaad7eed7af8f127ab5ef9342be1836a7c331/server) directory and run the following command. 

```bash
npm run conduit
```
This will run both the server as well as react at the same time using the [concurrently](https://www.npmjs.com/package/concurrently) repository. Since [nodemon](https://www.npmjs.com/package/nodemon) has been enabled, therefore everytime you save your project, it will re-run the server and the client.





