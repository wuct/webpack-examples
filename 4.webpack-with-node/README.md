# Webpack with Node
We combine a webpack-dev-server with a node server.

The node server provide the `index.html` on port `3000`, while the webpack-dev-server provide the `bundle.js` on port `8080`.

See `package.json` to know how we set this up, then try `npm run watch` in your terminal. Finally, go to `http://localhost:3000` to see the result.

Both servers will reload lively when you edit a file.
