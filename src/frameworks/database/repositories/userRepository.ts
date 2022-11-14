import { PrismaClient, Prisma } from "@prisma/client";
import { UserRpositoryInterface } from "../../interfaces/repositories/user-repositories";

export default function UserRepository(
  datasource: PrismaClient
): UserRpositoryInterface {
  return {
    getUser: async (id) => {
      return null;
    },
    listUsers: async () => {
      return null;
    },
  };
}
