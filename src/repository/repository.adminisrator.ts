import prismaClient from "../database/database.prisma-client";
import AdministratorInterface from "../interfaces/controllers/interface.administrator";
import EncryptUtil from "../utils/util.encrypt";

class AdministratorRepository {
    async select(id: string) {
        if (typeof parseInt(id) !== "number") {
            throw {
                message: "O id deve ser um número inteiro."
            }
        }

        try {
            const response = await prismaClient.administrator.findUnique({
                select: {
                    id: true,
                    name: true,
                    email: true
                },
                where: {
                    id: parseInt(id),
                }
            })

            return response
        } catch (error) {
            throw { message: "Não foi possível obter o administrador solicitado." }
        }
    }

    async selectAll() {
        try {
            const response = await prismaClient.administrator.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            })

            return response
        } catch (error) {
            throw { message: "Não foi possível obter a lista de administradores cadastrados." }
        }
    }

    async create(object: AdministratorInterface) {
        const { name, email, password } = object

        const encryptUtil = new EncryptUtil()

        try {
            await prismaClient.administrator.create({
                data: {
                    name,
                    email,
                    password: encryptUtil.encrypt(password, EncryptUtil.PASSWORD_KEY_SECRET_ENCRYPT),
                }
            })

            return {
                message: "Administrador cadastrado com sucesso."
            }
        } catch (error) {
            throw {
                message: "Não foi possível criar um novo administrador."
            }
        }
    }

    async update(id: string, object: AdministratorInterface) {
        if (typeof parseInt(id) !== "number") {
            throw {
                message: "O id deve ser um número inteiro."
            }
        }

        const { name, email, password } = object

        try {
            await prismaClient.administrator.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    name,
                    email,
                    password
                }
            })
            return {
                message: "Administrador atualizado com sucesso."
            }
        } catch (error) {
            throw {
                message: "Não foi possivel atualizar o administrador."
            }
        }
    }

    async delete(id: string) {
        if (typeof parseInt(id) !== "number") {
            throw {
                message: "O id deve ser um número inteiro."
            }
        }

        try {
            await prismaClient.administrator.delete({
                where: {
                    id: parseInt(id)
                }
            })

            return {
                message: "Administrador excluido com sucesso."
            }
        } catch (error) {
            throw { message: "Não foi excluir o administrador." }
        }
    }

    async find(column: string, fieldValue: string | number) {
        try {
            const response = prismaClient.administrator.findUnique({
                where: {
                    [`${column}`]: fieldValue
                }
            })

            return response
        } catch (error) {
            throw { message: "Não foi possível obter o administrador solicitado." }
        }
    }
}

export default AdministratorRepository