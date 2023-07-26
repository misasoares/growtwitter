import usuarios from "../data/usuario";
import Usuario from "../model/Usuario";

function validacaoUsuario(email: string, username: string): boolean {
  const existeEmail = usuarios.find(
    (item) => item.detalheUsuario().email === email
  );
  const existeUsername = usuarios.find(
    (item) => item.detalheUsuario().username === username
  );

  if (existeEmail || existeUsername) {
    return false;
  }
  return true;
}
export default validacaoUsuario;
