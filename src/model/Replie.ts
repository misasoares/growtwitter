import usuarios from "../data/usuario";
import { TweetBase } from "./TweetBase";
import Usuario from "./Usuario";

class Replie {
  protected id: string;
  public conteudo: string;
  public tweet:string
  public autorTweet:string
  
  constructor(id: string, conteudo: string, tweet:any, autorTweet:any) {
    this.id = id;
    this.conteudo = conteudo;
    this.tweet = tweet
    this. autorTweet = autorTweet
  }
  public detalheReplie(){
    return{

    }
  }
}

export default Replie;
