import { arweave } from "../apis/arweaveConfig.api"
import { userPayload } from "../types/payload.type"


export const signupService = async (userAddress : string, userData : userPayload) => {
    try {
        const txn = await arweave.createTransaction({
            data : JSON.stringify(userData),
        })
    } catch (error) {
        
    }
}