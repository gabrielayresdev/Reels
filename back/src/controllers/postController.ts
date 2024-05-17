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

      /* const newPost = await prisma.$transaction(async (prisma) => {
        // Cria o Post
        console.log(req.user);

        const file = await prisma.file.create({
          filename,
          originalname,
          size,
          mimetype,
          duration: 0,
        });

        const post = await prisma.post.create({
          data: {
            title,
            soundtrackUrl,
            authorId: req.user,
            file: {
              connect: { id: file.id },
            },
          },
        });
        console.log(post);

         await prisma.file.update({
          where: { id: post.id },
          data: {
            file: {
              connect: { id: file.id },
            },
          },
        }); 
      }); */
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
  async test(req: Request, res: Response) {
    try {
      if (!req.user) return res.send("User not found");
      res.send(req.user);
    } catch (err) {}
  }
}

export default new postController();
