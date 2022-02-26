import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIdAlreadyExists = this.usersRepository.findById(user_id);

    if (userIdAlreadyExists.admin !== true) {
      throw new Error("User not admin!");
    }
    if (!userIdAlreadyExists) {
      throw new Error("User not exists!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
