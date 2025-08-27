- The first thing we should do after downloading the code is to run the following command:

```
npm install
```

This command will download all the necessary Node modules to run the project.

- Once the `node_modules` installation is complete, we can run the project using the following command:

```
npm start
```

Make sure to run this command in the same directory where the `package.json` file is located.

## Changing the port

By default, the port configured for this project is `8081`. If you need to change it because your computer might already be using that port, you can do so by opening the `package.json` file and checking the `scripts` section. There you will find the command that starts the development server:

```
"start": "webpack serve --mode development --open --port=8081"
```

Simply change the port to the one you need and save the file before running `npm start` again.
