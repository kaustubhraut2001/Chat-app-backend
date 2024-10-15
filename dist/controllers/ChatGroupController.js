class ChatGroupController {
    static async store(req, res) {
        try {
            const body = req.body;
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
export default ChatGroupController;
