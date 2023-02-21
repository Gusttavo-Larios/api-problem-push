import jwt from "jsonwebtoken";

type JwtSignType = {
  payload: string | object | Buffer;
  secretKey: jwt.Secret;
  options?: jwt.SignOptions;
};

type JwtVerifyType = {
  token: string;
  secretKey: jwt.Secret;
  options?: jwt.VerifyOptions;
};

export { JwtSignType, JwtVerifyType };
