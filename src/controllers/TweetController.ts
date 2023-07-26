import usuarios from "../data/usuario";
import {  TweetBase } from "../model/TweetBase";

class TweetController {

public addTweet(idTweet: string, idUsuario:string, conteudo: string) {

    const usuario = usuarios.find(
      (item) => item.detalheUsuario().id === idUsuario
    );
    if (!usuario) {
      return "Usuario não encontrado";
    }
    const newTweet = new TweetBase(idTweet, conteudo);
    usuario?.tweet.push(newTweet);

    console.log(usuario)
    
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
      console.log("Tweet removido com sucesso.")
    } else {
      console.log(`Tweet não encontrado.`);
    }
  }
  // public pegarTweetBase(idTweet:string,idUsuario:string) {
  //   const usuario = usuarios.find(
  //     (item) => item.detalheUsuario().id === idUsuario
  //   );
  //   const tweet = usuario?.tweet.find(
  //     (item) => item.pegarId() === idTweet
  //   );
    
    
  // }
}

export default new TweetController();
