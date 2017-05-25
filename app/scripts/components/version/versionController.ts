export class VersionController {

    private version: string;

    constructor(config: Config) {
        this.version = config.appVersion;
    }

    public static $inject = ['config'];
}