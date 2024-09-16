import { Request, Response } from "express";
import { UserService } from "../../services/User/user";

export class UserController {
  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  }

  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updateUser = await UserService.updateUser(req.params.id, req.body);
      if (!updateUser) {
        res.status(404).json({ message: "User not Found" });
        return;
      }
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json({ error: "Error updating user" });
    }
  }
  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const deleteUser = await UserService.deleteUser(req.params.id);
      if (!deleteUser) {
        res.status(404).json({ message: "user not Found to delete" });
      }
      res.status(200).json({ message: "User deleted sucessfully" });
    } catch (error) {
      res.status(500).json({ error: "error deleting user" });
    }
  }
}
