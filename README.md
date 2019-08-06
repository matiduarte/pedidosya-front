# PedidosYa Client

```
WARNING
Before start using the app, you must download and execute the api.
[pedidosya-back repository.](https://github.com/matiduarte/pedidosya-back)
```

Installs the required dependencies for the server to start
`npm i`

Running in development mode
`npm run dev`

Building for production:
`npm run build`

Starting the built app
`npm run start`

Testing the app
`npm run test`

external libraries used:
- @zeit/next-css: For importing stylesheets into the components.
- bulma: CSS framework based in flexbox to facilitate the app layouts and commonly used styles.
- next: React framework.
- react, react-dom: React library.
- react-lazy-load: For lazy-loading images.
- react-redux, redux: To enable a redux store and connecting it to the app.
- redux-thunk: For dispatching functions, useful for fetching data.
- eslint, eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-ally, eslint-plugin-react: my linting choice.
- jest: to run the test suite.
