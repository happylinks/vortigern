# README
Base setup for Typescript + Babel + React

Based on: https://github.com/barbar/vortigern

## Monitor client, server and restart when changed.
```
webpack --config config/webpack/server.js --watch
webpack --config config/webpack/dev.js --watch
nodemon build/server.js
concurrently "webpack --config config/webpack/server.js --watch" "webpack --config config/webpack/dev.js --watch" "nodemon build/server.js"
```

## Monitor semantic ui
```
cd semantic && gulp watch
```
