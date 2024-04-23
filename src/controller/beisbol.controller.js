import { Deporte } from "../models/deporte.js";

export class DeporteController {
    Crear = async (req, res) => {
        try {
            const deporte = await Deporte.create(req.body);
            return res.status(200).json(deporte);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    GetAll = async (req, res) => {
        try {
            const deporte = await Deporte.findAll();
            return res.status(200).json(deporte);
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
}
