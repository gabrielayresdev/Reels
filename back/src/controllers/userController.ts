import auth from "../config/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";
import getVisibleDataFromUser from "../utils/getVisibleDataFromUser";

/* async function teste(req: Request, res: Response) {
  res.status(200).send("Funcionou");
} */

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const limit = parseInt(
        typeof req.query.limit === "string" ? req.query.limit : "10"
      );
      const offset = parseInt(
        typeof req.query.offset === "string" ? req.query.offset : "0"
      );
      const users = await prisma.user.findMany({
        take: limit,
        skip: offset,
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: id },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.update({
        where: { id: id },
        data: req.body,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.delete({
        where: { id: id },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new UserController();
