import { Aurelia, PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "Aurelia";
		config.map([{
			route: ["", "home"], name: "home", title: "Home", settings: { icon: "home" }, moduleId: PLATFORM.moduleName("./index", "home"), nav: true
		}, {
				route: "counter", name: "counter", title: "Counter", settings: { icon: "education" }, moduleId: PLATFORM.moduleName("../counter/index", "counter"), nav: true
		}, {
				route: "fetch-data", name: "fetchdata", title: "Fetch data", settings: { icon: "th-list" }, moduleId: PLATFORM.moduleName("../fetchdata/index", "fetchdata"), nav: true
		}]);

		this.router = router;
	}
}
