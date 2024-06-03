import { Request, Response } from "express";
import { UpdateService } from "./update.service";

export class UpdateController {
    public static async updateMenuSubMenu(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id, 10);
        const data = req.body;

        try {
            const updatedMenuSubMenu = await UpdateService.updateMenuSubMenu(id, data);
            res.status(200).send(updatedMenuSubMenu);
        } catch (error) {
            console.error('Error updating menu/submenu:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}