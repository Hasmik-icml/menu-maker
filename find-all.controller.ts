import { MenuSubMenu } from "@prisma/client";
import { Response, Request } from "express";
import { FindAllService } from "./find-all.service";

export class FindAllController {
    public static async findAllMenusAndSubMenus(req: Request, res: Response): Promise<void> {
        try {
            const type = req.params.infotype;
            const [data, count] = await FindAllService.FindAllMenusAndSubmenus(type);
            console.log(222, data, count);
           
            res.status(200).send({ data, count });
        } catch (errror) {
            console.log(errror);
            res.status(500).send();
        }   
    }
}