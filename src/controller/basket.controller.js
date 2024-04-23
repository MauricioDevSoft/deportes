import { Basket } from "../models/basquetbol.js";

export class BasketController {
    Crear = async (req, res) => {
        try {
            const { numPregunta, respuesta } = req.body;
            const basket = await Basket.create({
                numPregunta,
                respuesta,
            });
            res.json(basket);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    };

    Obtener = async (req, res) => {
        try {
            const basket = await Basket.findAll();
            res.status(200).json(basket);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    };

    Actualizar = async (req, res) => {
        try {
            const { id } = req.params;
            const { numPregunta, respuesta } = req.body;
            const basket = await Basket.update(
                { numPregunta, respuesta },
                { where: { id } },
            );
            res.status(200).json(basket);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    };

    Eliminar = async (req, res) => {
        try {
            const { id } = req.params;
            const basket = await Basket.destroy({ where: { id } });
            res.json(basket);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    };
}
