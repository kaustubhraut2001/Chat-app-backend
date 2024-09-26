import { Request, Response } from 'express';
import prisma from '../config/db.config.js';

interface LoginPayloadType {
	name: string;
	email: string;
	provider: string;
	oauth_id: string;
	image: string;
}

class AuthController {
	static async login(request: Request<{}, {}, LoginPayloadType>, response: Response) {
		try {
			const body: LoginPayloadType = request.body;
			let findUser = await prisma.user.findUnique({
				where: {
					email: body.email
				}
			});
			console.log(findUser);
			// Add your logic here to handle the user login
		} catch (error) {
			console.error(error);
			response.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

export default AuthController;
