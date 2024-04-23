import { Americano } from "../models/americano.js";

export class AmericanoController {
    Crear = async (req, res) => {
        try {
            const americano = await Americano.create(req.body);
            return res.status(200).json(americano);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    GetAll = async (req, res) => {
        try {
            const americano = await Americano.findAll();
            return res.status(200).json(americano);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    GetOne = async (req, res) => {
        try {
            const americano = await Americano.findByPk(req.params.id);
            return res.status(200).json(americano);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Update = async (req, res) => {
        try {
            const americano = await Americano.update(req.body, {
                where: { id: req.params.id },
            });
            return res.status(200).json(americano);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Delete = async (req, res) => {
        try {
            const americano = await Americano.destroy({
                where: { id: req.params.id },
            });
            return res.status(200).json(americano);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
