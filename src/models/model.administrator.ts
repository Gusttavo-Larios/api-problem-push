import { Administrator } from "@prisma/client";
import AdministratorInterface from "../interfaces/controllers/interface.administrator";
import AdministratorRepository from "../repository/repository.adminisrator";
import EncryptUtil from "../utils/util.encrypt";
import JwtUtil from "../utils/util.jwt";

class AdministratorModel {
  async auth(
    email: AdministratorInterface["email"],
    password: AdministratorInterface["password"]
  ) {
    try {
      const adminisratorRepository = new AdministratorRepository();

      const repositoryResponse = (await adminisratorRepository.find(
        "email",
        email
      )) as Administrator;

      const encryptUtil = new EncryptUtil();

      const originalPassword = encryptUtil.dencrypt(
        repositoryResponse.password,
        EncryptUtil.PASSWORD_KEY_SECRET_ENCRYPT
      );

      if (originalPassword !== password) {
        throw { message: "Credenciais inválidas." };
      }

      const jwtUtil = new JwtUtil();

      const token = jwtUtil.sign(
        {
          id: repositoryResponse.id,
          email: repositoryResponse.email,
        },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: 3600,
        }
      );

      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AdministratorModel;
