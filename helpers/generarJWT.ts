const jwt = require("jsonwebtoken");

const generarJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err: any, token: unknown) => {
      if (err) {
        reject("Error al generar el token");
      } else {
        resolve(token);
      }
    });
  });
};

export default generarJWT;
