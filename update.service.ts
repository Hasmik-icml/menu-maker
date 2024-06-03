import { MenuSubMenu, PrismaClient } from "@prisma/client";

export class UpdateService {
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