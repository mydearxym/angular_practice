# Angular JS Common

A collection of useful directives, filters, and services for Angular JS.  Please treat these as learning examples of how to build directives and services.

If you have a module you'd like to add please start a discussion in a new issue.  I'm very open to good learning examples.

[Docs and Examples](http://michaeljcalkins.github.io/angular-common/)

[@michaeljcalkins](https://twitter.com/michaeljcalkins)

## Install

```
bower install angular-common
```

## Usage

```
angular.module('app', [
    'common.confirm',
    'common.dateRange',
    'common.drag',
    'common.dragdrop',
    'common.draw',
    'common.modal',
    'common.sortable',
    'common.strings',
    'common.time',
    'common.upload',
    'common.youtube'
]);
```

We recommend you can create a module that includes all the modules you want to use and just reference that `pointer` module.

```
angular.module('app', [
    'common.master'
]);
```

## Demo

***Run these commands from the root of the repo.***

`node server.js`

`php -S localhost:8888`

<a href='http://localhost:8888'>http://localhost:8888</a>

## Roadmap

The long term vision for this project is to one by one elimnate all dependencies for this project and create completely angular based modules without the need for including external libraries.
