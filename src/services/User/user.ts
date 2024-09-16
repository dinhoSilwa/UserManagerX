import { UserModel, IUser } from "../../model/users/user.model";

export class UserService {
  static async createUser(data: IUser): Promise<IUser> {
    const user = new UserModel(data);
    return await user.save();
  }

  static async getUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

  static async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  static async updateUser(
    id: string,
    data: Partial<IUser>
  ): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteUser(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
