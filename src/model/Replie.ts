import usuarios from "../data/usuario";
import { TweetBase } from "./TweetBase";
import Usuario from "./Usuario";

class Replie {
  protected id: string;
  protected idUsuario:string;
  public conteudo: string;
  public tweet:string;
  public autorTweet:string;
  
  
  
  constructor(id: string, idUsuario:string,conteudo: string, tweet:any, autorTweet:any) {
    this.id = id;
    this.idUsuario = idUsuario;
    this.conteudo = conteudo;
    this.tweet = tweet;
    this. autorTweet = autorTweet;
  }
  public detalheReplie(){
    return{
     id:this.id,
     idUsuario:this.idUsuario,

    }
  }
}

export default Replie;
