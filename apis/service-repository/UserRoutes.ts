export class UserRouter {
  public controller: UserController;

  constructor(_controller: UserController) {
    this.controller = _controller;
  }

  public routes(router: express.Router): express.Router {
    router
      .route("/users/:id")
      .get(this.controller.getUser)
      .put(this.controller.updateUser);

    // More routes...
  }
}
