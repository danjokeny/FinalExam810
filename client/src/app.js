export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      {
        route: ["",'ToDos'],
        moduleId: './modules/ToDos',
        name: 'ToDos',
      },
    ]);
  }
}