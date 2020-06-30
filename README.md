## About

A review project I did to reinforce webpack and redux basics, and to give myself a good, reliable React-Redux base project I've been wanting for ages.

Repo contains a ReactJS toolchain made for React-Redux projects in 2020 with Webpack, Babel, ESLint (Prettier/Airbnb blend), Thunk. Environment variables and webpack configurations are compartmentalized separately for development and production builds to improve efficiency, and build is configured output to a single bundle.js file.

A simple working React-Redux example with store, actions, reducer and index.js clearly separated can be found in the root src directory.

## Usage

Clone or download and then run `npm install`.

Replace src files with your own or edit existing files/re-arrange folder structure.

ESLint issues can be fixed by running `eslint --fix src/<filename.js>`.

## Acknowledgements

The advanced webpack configuration is heavily influenced by [Robin Wieruch's posts from 2019](https://www.robinwieruch.de/minimal-react-webpack-babel-setup), and the sample project is presented step-by-step alongside Redux theory on [Dave Ceddia's site also written in 2019](https://daveceddia.com/redux-tutorial/).
