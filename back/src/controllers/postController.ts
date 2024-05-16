import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";

class postController {
  async createPost(req: Request, res: Response) {
    try {
      const { description, soundtrackUrl } = req.body;
      /* req.file; */
      /* const post = await prisma.post.create({
        data: {
          description,
          soundtrackUrl,
          file: {
            create: {
              filename,
              path,
              type,
              duration,
            },
          },
        },
        include: {
          file: true,
        },
      }); */
    } catch (err) {}
  }
}

export default new postController();
