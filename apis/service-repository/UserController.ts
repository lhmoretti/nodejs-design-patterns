// The UserController uses the UserService
class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: Request, res: Response) {
    const user = await this.userService.getUser(req.params.id);
    ApiResponse({ res, data: user });
  }

  async updateUser(req: Request, res: Response) {
    const updatedUser = await this.userService.updateUser(req.body);
    ApiResponse({ res, data: updatedUser });
  }

  // More controller methods...
}
