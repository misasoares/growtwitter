import usuarios from "../data/usuario";
import FollowController from "./FollowController";
import TweetController from "./TweetController";

class FeedController{
    public mostrarFeed(idUsuario:string){
        const usuario = usuarios.find((item)=>item.detalheUsuario().id === idUsuario)
        console.log(`Feed do ${usuario?.detalheUsuario().username}`)
        console.log("-------------------------------------------")

        usuario!.follow.forEach(item=>{
            item.tweet.forEach(item2=>{TweetController.mostrarTweet(item.detalheUsuario().id, item2.pegarId())})})
    }
}
export default new FeedController()
