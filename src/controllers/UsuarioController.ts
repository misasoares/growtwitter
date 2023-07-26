import usuarios from "../data/usuario";
import validacaoUsuario from "../middleware/validacaoUsuario";
import { TweetBase } from "../model/TweetBase";
import Usuario from "../model/Usuario";

class UsuarioController {
  public cadastrarUsuario(
    id: string,
    nome: string,
    email: string,
    username: string,
    senha: string
  ): Usuario | undefined {
    const validacao = validacaoUsuario(email, username);

    if (validacao) {
      const novoUsuario = new Usuario(id, nome, email, username, senha);
      usuarios.push(novoUsuario);
      return novoUsuario;
    } else {
      console.log("Dados Inválidos");
      return undefined;
    }
  }
}
export default new UsuarioController();
