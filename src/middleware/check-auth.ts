import * as jwt from "jsonwebtoken";

export const checkAuth: any = (req:
    { headers: { authorization: string; };
    userData: { email: any; userId: any; }; },
    res: { status: (arg0: number) => {
         (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }, next: () => void) => {
    try {
      const token: any = req.headers.authorization.split(" ")[1];
      const decodedToken: string | object = jwt.verify(token, process.env.JWTSECRET);
      req.userData = { email: (decodedToken as any).email, userId: (decodedToken as any).userId };
      next();
    } catch (error) {
      res.status(401).json({message: "You are not authenticated!"});
    }
  };