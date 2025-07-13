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

// recepients is of format array of object! (will be dynamic)
// const recipients = [
//     {
//         email: "myprojects0504@gmail.com",
//     }
// ];

// client
//     .send({
//         from: sender,
//         to: recipients,
//         subject: "You are awesome!",
//         text: "Congrats for sending test email with Mailtrap!",
//         category: "Integration Test",
//     })
//     .then(console.log, console.error);