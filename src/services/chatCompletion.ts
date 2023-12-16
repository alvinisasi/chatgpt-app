import OpenAI from "openai";
import { Message } from "../types";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true
})

export const completions = async (chat: Message) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: chat.message }],
        model: "gpt-3.5-turbo",
    });

    return completion
}