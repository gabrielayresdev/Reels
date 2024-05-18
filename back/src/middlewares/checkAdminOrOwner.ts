import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response, NextFunction } from "express";

async function checkAdminOrOwner(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) return res.status(400).json({ message: "Unauthorized" });

    const requester = await prisma.user.findUnique({
      where: {
        id: req.user,
      },
    });
    const { id } = req.params;
    const target = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!requester || !target) return res.status(400).send("User not found");
    if (requester.adm || target.id === requester.id) next();
    else return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export { checkAdminOrOwner };
