import User from "../../../entities/user";

export interface UserRpositoryInterface {
  getUser(id: string): Promise<User | null>;
  listUsers(): Promise<User[] | null>;
}
