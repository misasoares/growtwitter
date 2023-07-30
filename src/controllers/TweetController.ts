import replies from "../data/replie";
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

  public mostrarTweet(idUsuario:string, idTweet:string){
    const findUsuario = usuarios.find((item)=>item.detalheUsuario().id === idUsuario)
    const findTweet = findUsuario?.tweet.find((item)=>item.pegarId() === idTweet)
    console.log(`@${findUsuario?.detalheUsuario().username}: ${findTweet?.conteudo}`)
    console.log(`[${findTweet!.like.length} likes]`)
    

    const arrayReplie = findTweet!.replie


    if(findTweet?.replie.length !== 0){
      arrayReplie.forEach(item =>{
        console.log(`>@${item.autor}: ${item.conteudo}`)
        
      })
      console.log("--------------------------------")
    }else{
      console.log("--------------------------------")
    }
  }
}

export default new TweetController();