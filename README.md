## About

Boiler plate code for setting up a React configuration using Webpack.

To start the app, run `npm run start`.

Sources
- [https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/)
- [https://www.taniarascia.com/how-to-use-webpack/](https://www.taniarascia.com/how-to-use-webpack/)

## Tools

- Webpack 5
- Babel 7
- Sass Loader
- Prettier
- ESLint

### Webpack

- `webpack module` — which include all core webpack functionality
- `webpack-dev-server` — this development server automatically rerun webpack when our file is changed
- `webpack-cli` — enable running webpack from the command line

### Babel

- `@babel/core` is the main dependency that includes babel transform script.
- `@babel/preset-env` is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
- `@babel/preset-react` is used for transforming JSX and React class syntax into valid JavaScript code.
- `babel-loader` is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

### Prettier

Run `npx prettier --write "src/**/*.js"` for code formatting.

or

Run `npm run format` in the project.

**NOTE**:
- [When using Prettier and ESLint together, you shouldn't be using ESLint's indent rule at all...](https://github.com/eslint/eslint/issues/10930#issuecomment-427690631)

### ESLint

- `eslint` is the core dependency for all functionalities
- `eslint-loader` enables us to hook eslint into webpack.
- `babel-eslint` is a parser that enables eslint to lint all valid ES6+ code (for React and ES6+ syntax)
- `eslint-config-react` enables ESLint to use pre-made rules
- `eslint-plugin-react` enables ESLint to use pre-made rules
