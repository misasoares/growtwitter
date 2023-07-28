import usuarios from "../data/usuario";
import FollowController from "./FollowController";
import TweetController from "./TweetController";

class FeedController{
    public mostrarFeed(idUsuario:string){
        

        const usuario = usuarios.find((item)=> item.detalheUsuario().id === idUsuario)
        const idSeguidor = usuario?.follow.forEach(item => {
            TweetController.mostrarTweet(item.pegarId(),idUsuario)
        });
        
        
        
    }
}
export default new FeedController()
//imprimir os tweets de todos que eu sigo = eu.forEach(item=>item.follow{
//
//})