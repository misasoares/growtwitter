import { v4 as uuid } from "uuid";
import usuarios from "../data/usuario";
import Like from "./Like";
import Replie from "./Replie";

class TweetBase {
  protected id: string;
  private idAutor: string;
  public conteudo: string;
  public like: Like[];
  public replie: Replie[];

  constructor(id: string, idAutor: string, conteudo: string) {
    this.id = id;
    this.idAutor = idAutor;
    this.conteudo = conteudo;
    this.like = [];
    this.replie = [];
  }
  public pegarId(): string {
    return this.id;
  }

  public detalheTweet() {
    return {
      id: this.id,

      conteudo: this.conteudo,

      idAutor: this.idAutor,
    };
  }
}

export { TweetBase };
