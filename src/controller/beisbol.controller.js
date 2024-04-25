import { Deporte } from "../models/deporte.js";
import puppeteer from "puppeteer";
import nodemailer from "nodemailer";

export class DeporteController {
  Crear = async (req, res) => {
    try {
      for (const respuesta of req.body.respuestas) {
        await Deporte.create({
          numPregunta: respuesta.numPregunta,
          Pregunta: respuesta.pregunta,
          respuesta: respuesta.respuesta,
          deporte: respuesta.deporte,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
        });
      }
      const deporte = await Deporte.findOne({
        order: [["createdAt", "DESC"]],
      });
     
      const data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        respuestas: req.body.respuestas.map((respuesta) => ({
          numPregunta: respuesta.numPregunta,
          Pregunta: respuesta.pregunta,
          respuesta: respuesta.respuesta,
          deporte: respuesta.deporte,
        })),
      };

      const pdfPath = "respuesta_encuesta.pdf";
      res.render("template.ejs", data, async (err, htmlContent) => {
        if (err) console.log(err, "HAA");
        try {
          const browser = await puppeteer.launch({
            headless: true,
          });
          const page = await browser.newPage();

          // Establecer el HTML generado en la página
          await page.setContent(htmlContent, {
            waitUntil: "load",
          });

          // Generar el PDF

          await page.pdf({
            path: pdfPath,
            format: "letter",
          });

          await browser.close();

          console.log(`PDF generado correctamente en: ${pdfPath}`);
          let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "mauriciodevsoft@gmail.com",
              pass: "rkgy pgkv gams hgbf ", // ¡Recuerda utilizar una contraseña de aplicación!
            },
          });

          // Detalles del mensaje
          let mailOption = {
            from: "mauriciodevsoft@gmail.com",
            to: "brayanpoot22@gmail.com",
            subject: "Encuesta de deportes",
            text: `Encuesta Respondida por ${req.body.nombre} ${req.body.apellido}. Adjunto se encuentra el PDF con las respuestas.`,
            attachments: [
              { filename: "respuesta_encuesta.pdf", path: pdfPath },
            ],
          };

          // Enviar el correo electrónico
          let info = await transporter.sendMail(mailOption);
          console.log("Correo enviado correctamente:", info.response);

          // Devolver respuesta
          return res.status(200).json({
            mensaje: "PDF generado correctamente",
            pdfPath,
          });
        } catch (error) {
          console.error("Error al generar el PDF:", error);
          return res.status(500).json({
            error: "Error al generar el PDF",
          });
        }
      });
    } catch (error) {
      console.log("ERROR EN CREAR UWU ", error);
      return res.status(500).json(error);
    }
  };

  GetAll = async (req, res) => {
    try {
      console.log("SI");
      const nombre = "CiberSmk";
      const apellido = "wrwerwe";
      const respuestas = [
        {
          numPregunta: 1,
          Pregunta: "¿De cuántos jugadores pueden ser los equipo?",
          respuesta: "6",
        },
        {
          numPregunta: 2,
          Pregunta: "¿De qué otra forma se le llama al básquet bol?",
          respuesta: "Baloncesto",
        },
        {
          numPregunta: 3,
          Pregunta: "¿Cuantas posiciones hay en el básquetbol?",
          respuesta: "18",
        },
        {
          numPregunta: 4,
          Pregunta: "¿Qué horario prefieres para tu clase?",
          respuesta: "7 am a 8 am",
        },
      ];
      res.render("template", { nombre, apellido, respuestas });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  GetOne = async (req, res) => {
    try {
      const deporte = await Deporte.findByPk(req.params.id);
      return res.status(200).json(deporte);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  Update = async (req, res) => {
    try {
      const deporte = await Deporte.update(req.body, {
        where: { id: req.params.id },
      });
      return res.status(200).json(deporte);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  Delete = async (req, res) => {
    try {
      const deporte = await Deporte.destroy({
        where: { id: req.params.id },
      });
      return res.status(200).json(deporte);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // sendMail = async (data, names, apellido) => {
  //     try{} catch (error) {
  //         console.log("ERROR EN CORREO XD ", error);
  //         throw error;
  //     }
  // };
}
