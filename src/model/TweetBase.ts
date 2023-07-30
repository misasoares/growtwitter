import { v4 as uuid } from "uuid";
import usuarios from "../data/usuario";
import Like from "./Like";
import Replie from "./Replie";

class TweetBase {
  protected id: string;
  public conteudo: string;
  public like: Like[];
  public replie: Replie[]

  constructor(id: string, conteudo: string) {
    this.id = id;
    this.conteudo = conteudo;
    this.like =[];
    this.replie = []
  }

  

  public pegarId(): string {
    return this.id;
  }
}

export { TweetBase };
