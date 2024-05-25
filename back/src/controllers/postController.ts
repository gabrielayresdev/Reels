import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";

class postController {
  async createPost(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(404).send("You must be logged in");
      if (!req.file) return res.status(404).send("You must provide a file");
      const { filename, originalname, size, mimetype } = req.file;
      console.log(filename);
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
  async getPost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
        include: { file: true },
      });
      return res.status(200).json(post);
    } catch (err) {}
  }
  async getPosts(req: Request, res: Response) {
    try {
      const post = await prisma.post.findMany({
        include: { file: true, author: true },
      });
      return res.status(200).json(post);
    } catch (err) {}
  }
  async updatePost(req: Request, res: Response) {
    try {
      const { title, soundtrackUrl } = req.body;
      const { id } = req.params;
      const post = await prisma.post.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          soundtrackUrl: soundtrackUrl,
        },
      });
      return res.status(200).json(post);
    } catch (err) {}
  }
  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
        include: { file: true },
      });

      if (post && post.file) {
        console.log("Estou tentando deletar o arquivo:");
        const filename = post.file.filename;
        const filePath = path.join(__dirname, "..", "..", "uploads", filename);
        console.log(filePath);

        await prisma.file.delete({
          where: {
            id: post.file.id,
          },
        });
        console.log("Deletei o arquivo no BD");

        await prisma.post.delete({
          where: {
            id: id,
          },
          include: { file: true },
        });
        console.log("Deletei o Post");

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error: " + err);
            return res.status(500).send("Something went wrong");
          } else {
            console.log("Deletei o arquivo no servidor");
            return res.status(200).json(post);
          }
        });
      }
    } catch (err) {}
  }
  /*  async getFiles(req: Request, res: Response) {
    try {
      const file = await prisma.file.findMany();
      return res.status(200).json(file);
    } catch (err) {}
  } */
}

export default new postController();
