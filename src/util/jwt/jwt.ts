import * as jose from "jose";

export const jwt = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createToken: async (data: any) => {
    try {
      const jwt = await new jose.SignJWT(data)
        .setProtectedHeader({
          alg: "HS256",
        })
        .sign(new TextEncoder().encode(import.meta.env.VITE_JWT_KEY));
      if (!jwt) throw new Error("Error creating token");
      return jwt;
    } catch (err) {
      console.log("err", err);
    }
  },
  verifyToken: async (token: string) => {
    try {
      const { payload } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(import.meta.env.VITE_JWT_KEY)
      );
      if (!payload) throw new Error("Error verifying token");
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
};
