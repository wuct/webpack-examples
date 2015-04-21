# webpack-dev-server

We use `webpack-dev-server` to serve static files to a browser.

Try `webpack-dev-server` in your terminal, then go to `http://localhost:8080/`

You can also add some colors by add `--colors`.

## Source Map

We also use `sourcemap` to map `bundle.js` to our source code. It let us debug our code easily.

Comment out `devtool` in the `webpack.config.js` then see how it works.

## Hot Mode
By turning on the hot mode, you will be able to get live reload when doing changes to your files.

The easiest way to do this is use add `--inline --hot` to your command.

For example,
```
webpack-dev-server --colors --inline --hot
```
## 進階用法

Allow instantaneous live refresh without losing state while editing React components.

- [React Hot](http://gaearon.github.io/react-hot-loader/getstarted/)

## 參考資料
- [http://webpack.github.io/docs/webpack-dev-server.html]()