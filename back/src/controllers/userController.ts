import auth from "../config/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";
import getVisibleDataFromUser from "../utils/getVisibleDataFromUser";

/* async function teste(req: Request, res: Response) {
  res.status(200).send("Funcionou");
} */

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, cpf, email, password, tel } = req.body;
      const { hash, salt } = auth.generatePassword(password);

      const user = await prisma.user.create({
        data: { name, cpf, email, tel, hash, salt, adm: false },
      });

      res.status(201).json(getVisibleDataFromUser(user));
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!user)
        return res.status(404).json({ message: "Usuário não encontrado." });
      const { password } = req.body;
      if (auth.checkPassword(password, user.hash, user.salt)) {
        const token = auth.generateJWT(user, true);
        return res.status(200).json({ token: token });
      } else {
        return res.status(401).json({ message: "Senha inválida." });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  /* async show(req: Request, res: Response) {
    try {
      if (!req.user)
        return res.status(400).json({ message: "Erro no token" });
      const user = await prisma.user.findUnique({
        where: {
          id: req.user
        }
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      delete user.hash;
      delete user.salt;
      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
 */

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /*

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
  } */
}

export default new UserController();
