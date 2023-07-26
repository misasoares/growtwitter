import { stringify } from "querystring";
import usuarios from "../data/usuario";
import Replie from "../model/Replie";
import { log } from "console";
import { json } from "node:stream/consumers";
import replies from "../data/replie";

class ReplieController {
  public addReplie(
    id: string,
    idAutor: string,
    conteudo: string,
    idTweet: string,
    idUsuario: string
  ) {
    const autor = usuarios.find((item) => item.detalheUsuario().id === idAutor);
    if (!autor) {
      return "Usuario não encontrado";
    }
    const autorTweet = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );

    const findTweet = autorTweet?.tweet.find(
      (item) => item.pegarId() === idTweet
    );

    const newReplie = new Replie(
      id,
      idUsuario,
      conteudo,
      findTweet?.conteudo,
      autorTweet?.detalheUsuario().nome
    );

    autor?.replie.push(newReplie);
    console.log(autor)
  }

  public removeReplie(idUsuario: string, idReplie: string): void {
    const usuario = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );
    const indexReplie = usuario!.replie.findIndex(
      (item) => item.detalheReplie().id === idReplie
    );

    if (indexReplie !== -1) {
      usuario!.replie.splice(indexReplie, 1);

      console.log("replie excluido com sucesso");
    } else {
      console.log(`Replie não encontrado`);
    }
  }
}

export default new ReplieController();
