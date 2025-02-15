import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const config = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY
})

const openai = new OpenAIApi(config);

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        })
        const generatedImage = response.data.data[0].b64_json;
        return res.status(200).json({ photo: generatedImage })
    } catch (err) {
        next(createError(err.status, err.response?.data?.error?.message));
    }

}
