import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";

class postController {
  async createPost(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(404).send("You must be logged in");
      if (!req.file) return res.status(404).send("You must provide a file");
      const { filename, originalname, size, mimetype } = req.file;
      const { title, soundtrackUrl } = req.body;

      const post = await prisma.post.create({
        data: {
          authorId: req.user,
          title,
          soundtrackUrl,
          file: {
            create: {
              filename,
              originalname,
              size,
              mimetype,
              duration: 0,
            },
          },
        },
      });
      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
  async getPosts(req: Request, res: Response) {
    try {
      const post = await prisma.post.findMany({ include: { file: true } });
      return res.status(200).json(post);
    } catch (err) {}
  }
  async getFiles(req: Request, res: Response) {
    try {
      const file = await prisma.file.findMany();
      return res.status(200).json(file);
    } catch (err) {}
  }
}

export default new postController();
