import { Beisbol } from "../models/beisbol.js";

export class BeisbolController {
    Crear = async (req, res) => {
        try {
            const beisbol = await Beisbol.create(req.body);
            return res.status(200).json(beisbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    GetAll = async (req, res) => {
        try {
            const beisbol = await Beisbol.findAll();
            return res.status(200).json(beisbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    GetOne = async (req, res) => {
        try {
            const beisbol = await Beisbol.findByPk(req.params.id);
            return res.status(200).json(beisbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Update = async (req, res) => {
        try {
            const beisbol = await Beisbol.update(req.body, {
                where: { id: req.params.id },
            });
            return res.status(200).json(beisbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Delete = async (req, res) => {
        try {
            const beisbol = await Beisbol.destroy({
                where: { id: req.params.id },
            });
            return res.status(200).json(beisbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
