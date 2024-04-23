import { Futbol } from "../models/futbol.js";

export class FutbolController {
    Create = async (req, res) => {
        try {
            const futbol = await Futbol.create(req.body);
            return res.json(200).json(futbol);
        } catch (error) {
            return res.json(500).json(error);
        }
    };

    Read = async (req, res) => {
        try {
            const futbol = await Futbol.findAll();
            return res.status(200).json(futbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Update = async (req, res) => {
        try {
            const futbol = await Futbol.update(req.body, {
                where: { id: req.params.id },
            });
            return res.status(200).json(futbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    Delete = async (req, res) => {
        try {
            const futbol = await Futbol.destroy({
                where: { id: req.params.id },
            });
            return res.status(200).json(futbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    ReadOne = async (req, res) => {
        try {
            const futbol = await Futbol.findOne({
                where: { id: req.params.id },
            });
            return res.status(200).json(futbol);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
