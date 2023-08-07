import replies from "../data/replie";
import usuarios from "../data/usuario";
import Like from "../model/Like";
import { TweetBase } from "../model/TweetBase";
import LikeController from "./LikeController";

class TweetController {
  public addTweet(idTweet: string, idUsuario: string, conteudo: string) {
    const usuario = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );
    if (!usuario) {
      return "Usuario não encontrado";
    } else {
      const newTweet = new TweetBase(idTweet,idUsuario, conteudo);
      usuario!.tweet.push(newTweet);
    }
  }

  public removerTweet(idUsuario: string, idTweet: string): void {
    const usuario = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );
    const index = usuario!.tweet.findIndex(
      (item) => item.pegarId() === idTweet
    );
    if (index !== -1) {
      usuario?.tweet.splice(index, 1);
      console.log("Tweet removido com sucesso.");
    } else {
      console.log(`Tweet não encontrado.`);
    }
  }

  public mostrarTweet(idUsuario: string, idTweet: string) {
    const findUsuario = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );
    const findTweet = findUsuario!.tweet.find(
      (item) => item.pegarId() === idTweet
    );

    if (findTweet!.like.length === 0) {
      return;
    } else if (findTweet!.like.length === 1) {
      console.log(
        `@${findUsuario!.detalheUsuario().username}: ${findTweet!.conteudo}`
      );
      console.log(
        `[${findTweet!.like.map(
          (item) => item.NomeAutorLike(findTweet!.like[0].idAutorDoLike).nome
        )} curtiu]`
      );
    } else if (findTweet!.like.length >= 2) {
      console.log(
        `@${findUsuario!.detalheUsuario().username}: ${findTweet!.conteudo}`
      );
      console.log(
        `[${
          findTweet!.like[0].NomeAutorLike(findTweet!.like[0].idAutorDoLike)
            .nome
        } e outros ${findTweet!.like.length} curtiram.]`
      );
    }

    if (findTweet!.replie.length !== 0) {
      findTweet!.replie.forEach((item) => {
        console.log(`>@${item.autor}: ${item.conteudo}`);
      });
      return console.log("--------------------------------");
    } else {
      return console.log("--------------------------------");
    }
  }
}

export default new TweetController();
