import usuarios from "../data/usuario";
import Like from "../model/Like";

function validacaoLikeUsuarios(idUsuario: string, idTweet: string): boolean {
  
  const tweetAutor = usuarios.find(
    (item) => item.detalheUsuario().id === idUsuario
  );

  const tweet = tweetAutor?.tweet.find((item) => item.pegarId() === idTweet);

  if (tweetAutor?.detalheUsuario().id === tweet?.detalheTweet().idAutor) {
    return false;
  }
  return true;
  
}
export default validacaoLikeUsuarios;
