import usuarios from "../data/usuario";
import Usuario from "./Usuario";

class Like {
  public id:string;
  public idAutorDoLike:string;
  public like :string

  constructor(idTweet:string,idAutorDoLike:string) {
    this.idAutorDoLike = idAutorDoLike;
    this.id = idTweet;
    this.like = "❤"

  }
 
}
export default Like;
