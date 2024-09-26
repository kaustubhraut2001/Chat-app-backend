import { Request, Response } from 'express';
import prisma from '../config/db.config.js';
import jwt from "jsonwebtoken";

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

			if(!findUser){
				findUser = await prisma.user.create({
					data:body
				});

			}

			let JWTPayload = {
				name : body.name,
				email : body.email,
				id:findUser.id,

			}
			const taoken = jwt.sign(JWTPayload , process.env.JWT_SECREAT , {
				expiresIn : "365d"
			}

			);
			return response.json({
				message : "Logged in sucessfull",
				user : {
					...findUser,
					token : `Bearer ${taoken}`
				}
			});
			// Add your logic here to handle the user login
		} catch (error) {
			console.error(error);
			response.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

export default AuthController;
