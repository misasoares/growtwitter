import { v4 as uuid } from "uuid";
import usuarios from "../data/usuario";
import Like from "./Like";

class TweetBase {
  protected id: string;
  public conteudo: string;
  public like: Like[];

  constructor(id: string, conteudo: string) {
    this.id = id;
     this.conteudo = conteudo;
     this.like =[];
  }

  public pegarId(): string {
    return this.id;
  }
}

export { TweetBase };
