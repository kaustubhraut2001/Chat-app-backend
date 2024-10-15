import { Request, Response } from "express";

class ChatGroupController {
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default ChatGroupController;
