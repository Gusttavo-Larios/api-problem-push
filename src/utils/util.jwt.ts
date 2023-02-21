import jwt from "jsonwebtoken";
import { JwtSignType, JwtVerifyType } from "../interfaces/utils/interface.jwt";

class JwtUtil {
  sign(
    payload: JwtSignType["payload"],
    secretKey: JwtSignType["secretKey"],
    options?: JwtSignType["options"]
  ) {
    const token = jwt.sign(payload, secretKey, options);
    return token;
  }

  verify(
    token: JwtVerifyType["token"],
    secretKey: JwtVerifyType["secretKey"],
    options?: JwtVerifyType["options"]
  ) {
    try {
      const result = jwt.verify(token, secretKey, options);
      // console.log(result);

      return true;
    } catch (error) {
      throw { message: "Token inválido." };
    }
  }
}

export default JwtUtil;
