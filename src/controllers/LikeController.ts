import usuarios from "../data/usuario";
import Like from "../model/Like";
import Usuario from "../model/Usuario";

class LikeController {
  public addLike(idLike: string, idTweet: string, idAutorDoLike: string) {
    const existeUsuario = usuarios.find(
      (item) => item.detalheUsuario().id === idAutorDoLike
    );
    const existeTweet = existeUsuario!.tweet.find((item)=>item.pegarId()===idTweet);

    if(existeTweet){
    const newLike = new Like(idLike,idAutorDoLike)
    existeTweet?.like.push(newLike)
    console.log(`${newLike.like} Você curtiu o tweet: ${existeTweet?.conteudo}, do Usuario : ${existeUsuario?.detalheUsuario().nome}`);
      
  }else if(!existeTweet){
    const existeReplie = existeUsuario!.replie.find((item)=>item.detalheReplie().id === idTweet)
  
    if(existeReplie){
        const newReplieLike = new Like(idLike,idAutorDoLike)
        existeReplie.like.push(newReplieLike)
        console.log(existeReplie)
      }
    }else{
      console.log(`Tweet ou Reply não encontrado.`)
    } 
  }
}

export default new LikeController();
