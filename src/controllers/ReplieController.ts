import { stringify } from "querystring";
import usuarios from "../data/usuario";
import Replie from "../model/Replie";
import { log } from "console";
import { json } from "node:stream/consumers";


class ReplieController {

  public addReplie(id: string,idAutor:string, conteudo:string,idTweet:string,idUsuario:string){
    const autor = usuarios.find(
      (item) => item.detalheUsuario().id === idAutor
    );
    if (!autor) {
      return "Usuario não encontrado";
    }
    const autorTweet = usuarios.find((item)=>item.detalheUsuario().id === idUsuario)
    
    const findTweet = autorTweet?.tweet.find((item)=>item.pegarId() === idTweet)

    
    const newReplie = new Replie(id,conteudo, findTweet?.conteudo, autorTweet?.detalheUsuario().nome);
    
    autor?.replie.push(newReplie);
    console.log(autor)
  }
}

export default new ReplieController();
