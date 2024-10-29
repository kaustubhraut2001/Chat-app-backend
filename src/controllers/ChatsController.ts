import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatsController {
  static async index(req: Request, res: Response) {
    try {
      const { groupId } = req.params;
      const chats = await prisma.chats.findMany({
        where: {
          group_id: groupId,
        },
      });
      return res
        .status(200)
        .json({ message: "Got trhe chats Sucessfully!", data: chats });
    } catch (error) {
      return res.status(500).json({ message: "Some thing went wrong", error });
    }
  }
}
export default ChatsController;
