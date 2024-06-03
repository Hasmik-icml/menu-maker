import { MenuSubMenu, PrismaClient } from "@prisma/client";

export class CreateMenuSubMenuService {
    public static async create(name: string, type: string, status?: boolean): Promise<MenuSubMenu> {
        try {
            const client = new PrismaClient();
            const menuRepo = client.menuSubMenu;
            const menu: MenuSubMenu = await menuRepo.create({
                data: { name, type }
            });
            
            return menu;
        } catch (error) {
            console.log(555, error);
            throw new Error("Error creating menu/submenu: ");
        }
    }
}