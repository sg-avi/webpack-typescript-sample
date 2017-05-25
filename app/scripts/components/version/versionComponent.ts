import { VersionController } from "./versionController"

export function VersionComponent(): ng.IComponentOptions {
    return {
      template: require("./_version.html"),
      controller: VersionController
    };
}