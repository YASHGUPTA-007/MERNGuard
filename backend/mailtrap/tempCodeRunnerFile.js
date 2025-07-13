import { MailtrapClient } from "mailtrap";
import dotenv from"dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const client = new MailtrapClient({
    token: TOKEN,
});

console.log(TOKEN)

export const sender = {
    email: "hello@demomailtrap.co",
    name: "Mern Auth",
};