import { Request, Response } from "express";
import { arweave } from "../apis/arweaveConfig.api";

export interface ProfileData {
  walletAddress: string;
  fullName: string;
  username: string;
  interests: string[];
}

const createProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { walletAddress, fullName, username, interest } =req.body;
    const profileData: ProfileData = {
      walletAddress,
      fullName,
      username,
      interests: interest,
    }   

    console.log("Profile data:", profileData);
    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profileData
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({
      success: false,
      message: "Error creating profile"
    });
  }
};

export default createProfile; 