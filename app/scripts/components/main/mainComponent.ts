import "./main.less";
import { MainController } from "./mainController";

export function MainComponent(): ng.IComponentOptions {
    return {
      template: require("./_main.html"),
      controller: MainController,
      bindings: {
          input: '<'
      }
    };
}