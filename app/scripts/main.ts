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

mdl.config([
    '$stateProvider', (stateProvider: angular.ui.IStateProvider) => {
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