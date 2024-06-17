import auth from "../config/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";
import getVisibleDataFromUser from "../utils/getVisibleDataFromUser";

/* async function teste(req: Request, res: Response) {
  res.status(200).send("Funcionou");
} */

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, phone } = req.body;
      const { hash, salt } = auth.generatePassword(password);

      const user = await prisma.user.create({
        data: { name, email, phone, hash, salt, adm: false },
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
        include: { likes: true },
      });
      if (!user) return res.status(404).json({ message: "User not found." });
      const { password } = req.body;
      if (auth.checkPassword(password, user.hash, user.salt)) {
        const token = auth.generateJWT(user, true);
        const { adm, ...returnUser } = user;
        return res.status(200).json({ token, user: returnUser });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async getData(req: Request, res: Response) {
    try {
      const id = req.user;
      const user = await prisma.user.findUnique({
        where: { id: id },
        include: { likes: true },
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      const { hash, salt, adm, ...returnData } = user;
      return res.status(200).json({ user: returnData });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async getSpotifyAuth(req: Request, res: Response) {
    try {
      const client_id = process.env.SPOTIFY_CLIENT_ID;
      const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
      const encoded = Buffer.from(`${client_id}:${client_secret}`).toString(
        "base64"
      );

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encoded}`,
        },
        body: "grant_type=client_credentials",
      });
      const json = await response.json();
      return res.status(200).json({ data: json });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
}

export default new AuthController();
