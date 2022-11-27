# film-society-club
The Film Society Club

Angular Project working with a 3rd-Party API (http://www.omdbapi.com/) for searching Movies!

Run nmp install to install all the necessary depedencies.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6 (Node V16.13.0).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Brief Documentation

I used mainly Angular Material for css theming and UI controls.

The dark mode is also implemented with Material Theming.

I also used the localStorage for saving the user's preference for dark theme but also for saving the favorites and watched movies list.

My main issue would be some configurations with the API, since some parameters won't work as expected or the default value would be different (for example some strings would take the dafault "" for empty value for strings but some others needed "empty" as an empty string). It also took me a while to figure out the data type that each API call returns, but since that got out of the way, i made my classes and interfaces so i could easily manipulate the data and their types.

I tried to make some shared components, such as the movie-utils, but I would might try to add one more just to make a little bit more shared the 3 lists and clean up the code.
