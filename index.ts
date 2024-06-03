import { Router } from "express";
import { body, param } from "express-validator";
import { CreateMenuSubMenuController } from "./create-menuSubMenu.controller";
import { FindAllController } from "./find-all.controller";

const router: Router = Router();
router
    .post("/:infotype",
        [
            body('name').trim().escape().isString().isEmpty().withMessage("Please provide a name for the menu/submenu"),
            body('status').optional(),
            param("infotype").isString().isIn(["menu", "subMenu"]).withMessage("Invalid infotype"),
        ],
        CreateMenuSubMenuController.create,
    )
    .get("/:infotype",
        [
            param("infotype").isString().isIn(["menu", "subMenu"]).withMessage("Invalid infotype"),
        ],
        FindAllController.findAllMenusAndSubMenus
    )


export { router as menuRouter }