import validarCampos from "./validarCampos";
import validarJWT from "./validarJWS";

export default {
  ...validarCampos,
  ...validarJWT,
};
