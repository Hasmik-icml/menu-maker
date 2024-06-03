import { Response, Request } from "express";
import { CreateMenuSubMenuService } from "./create-menuSubMenu.service";
import { MenuSubMenu } from "@prisma/client";

export class CreateMenuSubMenuController {
    public static async create(req: Request, res: Response): Promise<void> {
        const type = req.params.infotype;
        const { name, status } = req.body;
        console.log("1111", type, name,)
        try {
            const result: MenuSubMenu = await CreateMenuSubMenuService.create(name, type);
            res.status(200).send(result);
        } catch (errror) {
            console.log(errror);
            res.status(500).send();
        }
    }
}
