import { User } from "./UserModel";

// The UserService uses the UserRepository to fetch and manipulate data
class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: string): Promise<User> {
    return this.userRepository.getById(id);
  }

  async updateUser(user: User): Promise<User> {
    // You can add business logic here before updating the user
    return this.userRepository.update(user);
  }

  // More methods to interact with UserRepository...
}
