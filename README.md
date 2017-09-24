# react-chartjs

React environment using Webpack, Babel, ES6, Yarn and Chart.js
```sh
> brew update
> brew install yarn

> mkdir react-chartjs
> cd react-chartjs
> yarn init

> yarn add webpack webpack-dev-server path

> touch webpack.config.js //file content in repo

> yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

> touch .babelrc //file content in repo

> mkdir client
> cd client
> touch index.js //file content in repo
> touch index.html //file content in repo
> cd ..
> mkdir components 
> cd components
> touch App.jsx //file content in repo
> cd ../..

> yarn add html-webpack-plugin

> yarn add react react-dom
```
Project structure:
. react-chartjs/
|-- client
____|-- components
________|-- App.jsx
____|-- index.html
____|-- index.js
|-- .babelrc
|-- package.json
|-- webpack.config.js
|-- yarn.lock

Based on: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

Add react-chartjs-2 (https://github.com/jerairrest/react-chartjs-2):
```sh
> yarn add react-chartjs-2 chart.js

> yarn start
```

