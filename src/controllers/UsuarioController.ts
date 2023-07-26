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
  public removerUsuario(idUsuario: string, email: string, senha: string):void {
  
      const indexUsuario = usuarios.findIndex(
        (item) => item.detalheUsuario().id === idUsuario);
      
      if (indexUsuario !== -1) {
        usuarios.splice(indexUsuario, 1)
        
        console.log(`Usuário excluido com sucesso`)
      }else {
      console.log(`Usuário não encontrado.`);
    }
  }
}
export default new UsuarioController();
