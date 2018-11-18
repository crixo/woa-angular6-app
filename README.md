# WoaAngular6App

[![Build Status](https://travis-ci.org/crixo/woa-angular6-app.svg?branch=master)](https://travis-ci.org/crixo/woa-angular6-app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
ng build --prod --build-optimizer
http-server --push-state

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## docker
docker build -t woa-angular6-app .
docker run -d --rm -p 8012:80 --name woa-angular6-app woa-angular6-app

Step 6/13 : RUN npm run build -- --configuration production
 ---> Running in eec62596c193

> woa-angular6-app@0.0.0 build /usr/src/app
> ng build "--configuration" "production"

## heroku
https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api
generate authtoken: heroku authorizations:create
https://devcenter.heroku.com/changelog-items/1426
heroku container:release web -a woa-angular6-app
https://medium.com/@javierfernandes/continuous-deployment-con-docker-travis-heroku-c24042fb830b
https://toedter.com/2018/06/02/heroku-docker-deployment-update/

## travis 
https://docs.travis-ci.com/user/encryption-keys/
run the following command from the repo root, the secret will added into the .travis.yml file
travis encrypt SOMEVAR="secretvalue" --add
add “[ci skip]” to your commit message, and Travis will automatically skip that build. 
validate .travis.yml locally
travis lint <.travis.yml  path>

## git
store credentials
https://stackoverflow.com/questions/34400272/visual-studio-code-always-asking-for-git-credentials