
import { Request, Response } from "express";
import { userPayload } from "../types/payload.type";
import { arweave } from "../apis/arweaveConfig.api";
import { signupService } from "../services/signup.service";



export const signupUser = async (req: Request, res: Response) => {
    const { fullName, username, interest, password, userAddress } = req.body;

    const userData : userPayload = {
        fullName: fullName,
        username : username,
        interest : interest,
        password : password,
        joinedAt : new Date().toISOString(),
    }

    signupService(userAddress, userData);


}

export default signupUser