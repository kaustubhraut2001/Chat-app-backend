import { request, response } from 'express'
import prisma from '../config/db.config.js';


interface LoginPayloadType {
	name: string;
	email: string;
	provider: string;
	oauth_id: string;
	image: string;
}
class AuthController {
	static async login(request: Request, response: Response) {
		try {
			const body: LoginPayloadType = request.body;
			let findUser = await prisma.user.findUnique({
				where: {
					email: body.email
				}
			}
			)
		} catch (error) {

		}

	}
};


export default AuthController;