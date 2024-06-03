import { MenuSubMenu, PrismaClient } from "@prisma/client";

export class MenuSubMenuService {
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

    public static async FindAllMenusAndSubmenus(type: string): Promise<[ data: MenuSubMenu[], count: number ]> {
        try {
            const client = new PrismaClient();
            const menuRepo = client.menuSubMenu;
            const [data, count] = await client.$transaction([
                menuRepo.findMany({
                    where: { type }
                }),
                menuRepo.count({
                    where: { type }
                })
            ]);

            return [data, count];
        } catch (error) {
            console.log(555, error);
            throw new Error("Error creating menu/submenu: ");
        }
    }

    public static async updateMenuSubMenu(id: number, data: Partial<MenuSubMenu>) {
        try {
            const client = new PrismaClient();
            const menuRepo = client.menuSubMenu;

            const updatedMenuSubMenu = await menuRepo.update({
                where: { id },
                data,
            });

            return updatedMenuSubMenu;
        } catch (error) {
            console.error('Error updating menu/submenu:', error);
            throw new Error('Error updating menu/submenu');
        }
    }
}