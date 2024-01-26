import prisma from "../config/db.config.js";

class UserController {
  static async getUser(req, res) {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return res.json({ user: user });
  }

  static async getUsers(req, res) {
    const { userIds } = req.body;
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.json({ users: users });
  }
}

export default UserController;
