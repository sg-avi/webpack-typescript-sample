import * as angular from "angular";
import "angular-ui-router";
import { MainComponent } from "./components/main/mainComponent"

class BLA {
    static MakeSound(): void {
        console.log("HI");
    }
}

var mdl: ng.IModule = angular.module('SampleApp', ['ui.router']);

mdl.component('mainComponent', MainComponent());

mdl.config(['$compileProvider', (compileProvider: ng.ICompileProvider) => {
    compileProvider.debugInfoEnabled(false);
    compileProvider.commentDirectivesEnabled(false);
    compileProvider.cssClassDirectivesEnabled(false);
}]);

mdl.config([
    '$stateProvider', '$locationProvider',
    (stateProvider: angular.ui.IStateProvider, locationProvider: ng.ILocationProvider) => {

        locationProvider.html5Mode(true);

        stateProvider.state({
            name: 'main',
            url: '/:num?',
            component: 'mainComponent',
            resolve: {
                input: ['$stateParams', (stateParams: ng.ui.IStateParamsService) => {
                    return stateParams['num'] || 1;
                }]
            }
        });
    }
]);
