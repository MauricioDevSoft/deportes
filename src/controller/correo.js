import nodemailer from "nodemailer";

export class EmailController {
    sendMail = async (req, res) => {
        try {
            let transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: "mauriciodevsoft@gmail.com",
                    pass: "rkgy pgkv gams hgbf ",
                },
            });

            let mailOption = {
                from: "mauriciodevsoft@gmail.com",
                to: "mauriciodevsoft@gmail.com",
                subject: "Correo de prueba desde Node.js",
                text: "Este es un correo de prueba desde Node.js",
            };

            let info = await transporter.sendMail(mailOption);
            console.log(
                "Correo enviado correctamente:",
                info.response,
            );
            return res
                .status(200)
                .json({ message: "correo correctamente" });
        } catch (error) {
            console.log("Error al enviar el correo:", error);
            throw error;
        }
    };
}
