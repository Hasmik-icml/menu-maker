import { MenuSubMenu, PrismaClient } from "@prisma/client";

export class FindAllService {
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
}