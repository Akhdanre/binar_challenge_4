const prismaClient = require("@prisma/client").PrismaClient
const prisma = new prismaClient()


module.exports = {
    show: async (req, res, next) => {
        try {
            let users = await prisma.user.findMany()
            if (!users) {
                return res.status(404).json({
                    status: false,
                    message: "Users data not found",
                    data: null
                })
            }
            return res.json({
                status: true,
                message: "success",
                data: users
            })
        } catch (err) {
            next(err)
        }
    }
}