const webResponse = require("../../helper/web_response")

const prismaClient = require("@prisma/client").PrismaClient
const prisma = new prismaClient()


module.exports = {
    index: async (req, res, next) => {
        try {
            let users = await prisma.user.findMany()
            if (!users) {
                return webResponse(res, {
                    isSucces: false,
                    code: 404,
                    message: "user data empty"
                })
            }
            return webResponse(res, { data: users })
        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        let id = Number(req.params.userId)
        try {
            if (id) {
                let user = await prisma.user.findUnique({ where: { id } })
                if (!user) {
                    return webResponse(res, {
                        code: 400,
                        isSucces: false,
                        message: `user with id ${id} not found`
                    })
                }
                return webResponse(res, { data: user })
            }
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        let userData = req.body
        try {
            let user = await prisma.user.create({ data: userData })
            if (!user) {
                return webResponse(res, {
                    code: 400,
                    message: "User Register failed"
                })
            }
            return webResponse(res, { data: user })
        } catch (err) {
            next(err)
        }
    }
}