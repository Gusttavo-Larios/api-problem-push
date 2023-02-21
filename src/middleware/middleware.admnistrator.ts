import { NextFunction, Request, Response } from "express";
import JwtUtil from "../utils/util.jwt";

class AdministratorMiddleware {
  auth(request: Request, response: Response, next: NextFunction) {
    try {
      const headers = request.headers;

      if (typeof headers.authorization !== "string") {
        return response.status(401).json({
          message: "Acessso negado.",
        });
      }

      const jwtSecretKey = process.env.JWT_SECRET_KEY as string;

      const jwtUtil = new JwtUtil();

      jwtUtil.verify(headers.authorization, jwtSecretKey);

      next();
    } catch (error) {
      console.log(error);
      return response.status(401).json({
        message: "Acessso negado.",
      });
    }
  }
}

export default AdministratorMiddleware;
