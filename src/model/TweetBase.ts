import { v4 as uuid } from "uuid";
import usuarios from "../data/usuario";


class TweetBase {
  protected id: string;
  public conteudo: string;

  constructor(id: string, conteudo: string) {
    (this.id = id), (this.conteudo = conteudo);
  }

  public pegarId(): string {
    return this.id;
  }

 
}

export { TweetBase };
