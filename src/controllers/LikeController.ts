import usuarios from "../data/usuario";
import validacaoLikeUsuarios from "../middleware/validacaoLikeTweet";

import Like from "../model/Like";
import Usuario from "../model/Usuario";


class LikeController {
  public addLike(idLike: string,idAutorDoLike:string, idTweet: string, idAutorDoTweet: string) {
    const existeUsuario = usuarios.find(
      (item) => item.detalheUsuario().id === idAutorDoTweet
    );
    const existeTweet = existeUsuario!.tweet.find((item)=>item.pegarId()===idTweet);

     const validacao = validacaoLikeUsuarios(idAutorDoLike, idTweet);
     if (validacao === false ) {
      console.log("Ação Inválida");
     }
 
    if(existeTweet && validacao === true){
    const newLike = new Like(idLike,idAutorDoLike)
    
    existeTweet!.like.push(newLike);
      
  }else if(!existeTweet){
    
    const existeReplie = existeUsuario!.replie.find((item)=>item.detalheReplie().id === idTweet)
  
    if(existeReplie){
        const newReplieLike = new Like(idLike,idAutorDoLike)
        existeReplie.like.push(newReplieLike)
      }
    }else{
      console.log(`Tweet ou Reply não encontrado.`)
    } 
  } 
}
export default new LikeController();
