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

  public NomeAutorLike(idAutorDoLike:string){
    const nome = usuarios.find(item=>item.detalheUsuario().id === idAutorDoLike)
    

    return {nome:nome!.detalheUsuario().username}
  }
 
}
export default Like;
