import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CommentaryController {
  async createCommentary(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(404).send("You must be logged in");

      const { content, postId } = req.body;
      const commentary = await prisma.commentary.create({
        data: {
          content: content,
          author: { connect: { id: req.user } },
          post: { connect: { id: postId } },
        },
      });
      return res.status(201).json(commentary);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
  async getCommentaries(req: Request, res: Response) {
    try {
      const commentaries = await prisma.commentary.findMany();
      return res.status(200).json(commentaries);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
  async updateCommentary(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const commentary = await prisma.commentary.update({
        where: { id: id },
        data: {
          content: content,
        },
      });
      return res.status(200).json(commentary);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
  async deleteCommentary(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const commentary = await prisma.commentary.delete({
        where: { id: id },
      });
      return res.status(201).json(commentary);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
}
export default new CommentaryController();
