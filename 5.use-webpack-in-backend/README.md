# 5. Webpack in Backend

We want to use an old version of node but write ES6. We also want to reload the node sever lively.

Here is how we do.

1. Use `webpack.server.config.js` to setup webpack for the backend. Do not forget to make `node_moduled` as external. For more info [http://jlongster.com/Backend-Apps-with-Webpack--Part-I]().

2. Setup `package.json` to run `webpack --config webpack.server.config.js` before `npm run start`
