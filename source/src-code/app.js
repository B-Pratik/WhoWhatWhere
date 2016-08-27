/**
 * Created by Pratik on 6/28/2016.
 */

import '../assets/main.scss';
import 'babel-polyfill';//pollyfill for latest features

import defaultRoute from './route/routes';

angular.module('WhoWhatWhere', ['ui.router', 'angular-loading-bar'])
    .config(defaultRoute);