const prismaClient = require("@prisma/client").PrismaClient
const prisma = new prismaClient()
const webResponse = require("../../helper/web_response")


module.exports = {
    index: async (req, res, next) => {
        try {
            let bankAccounts = await prisma.bankAccount.findMany()
            return webResponse(res, {
                data: bankAccounts
            })
        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        let id = Number(req.params.accountId)
        try {
            let bankAccount = await prisma.bankAccount.findUnique({ where: { id } })

            return webResponse(res, {
                data: bankAccount
            })
        } catch (err) {
            next(err)
        }
    },
    create: async (req, res, next) => {
        let { user_id, bank_name, bank_account_number } = req.body
        try {
            let bankAccount = await prisma.bankAccount.create({
                data: {
                    user_id,
                    bank_name,
                    bank_account_number,
                    balance: 0
                }
            })
            if (!bankAccount) {
                return webResponse(res, {
                    code: 400,
                    message: "bad request",
                    isSucces: false
                })
            }
            return webResponse(res, {
                body: bankAccount
            })
        } catch (err) {
            next(err)
        }
    }
}

