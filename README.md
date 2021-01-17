# About
Boilerplate code for setting up a Webpack configuration with React.
## Commands

| Command                 | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `npm run dev`           | Runs a development build and spins up webpack dev server |
| `npm run build`         | Runs a production build                                  |
| `npm run test`          | Runs all tests                                           |
| `npm run test:watch`    | Runs all tests and watches for changes                   |
| `npm run test:coverage` | Checks for total test coverage                           |
&nbsp;
# Tools
- Webpack 5
	- `webpack module` — which include all core webpack functionality
	- `webpack-dev-server` — this development server automatically rerun webpack when our file is changed
	- `webpack-cli` — enable running webpack from the command line
- Babel 7
	- `@babel/core` is the main dependency that includes babel transform script.
	- `@babel/preset-env` is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
	- `@babel/preset-react` is used for transforming JSX and React class syntax into valid JavaScript code.
	- `babel-loader` is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.
- Jest
	- For general unit testing
- Enzyme
	- For React component unit testing
- Sass
	- Styling
- Prettier
	- Run `npx prettier --write "src/**/*.js"` for code formatting.
	- Run `npm run format` in the project.
	- **NOTE**:
		- [When using Prettier and ESLint together, you shouldn't be using ESLint's indent rule at all...](https://github.com/eslint/eslint/issues/10930#issuecomment-427690631)
- ESLint
	- `eslint` is the core dependency for all functionalities
	- `eslint-loader` enables us to hook eslint into webpack.
	- `babel-eslint` is a parser that enables eslint to lint all valid ES6+ code (for React and ES6+ syntax)
	- `eslint-config-react` enables ESLint to use pre-made rules
	- `eslint-plugin-react` enables ESLint to use pre-made rules
