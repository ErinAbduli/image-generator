import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({
            success: true,
            data: posts
        });
    } catch (error) {
        next(createError(error.status, error.message));
    }
}

export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = new Post({
            name,
            prompt,
            photo: photoUrl?.secure_url
        });
        await newPost.save();
        return res.status(201).json({
            success: true,
            data: newPost
        });
    } catch (error) {
        next(createError(error.status, error.message));
    }
}