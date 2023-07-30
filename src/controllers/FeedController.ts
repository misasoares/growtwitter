import usuarios from "../data/usuario";
import FollowController from "./FollowController";
import TweetController from "./TweetController";

class FeedController{
    public mostrarFeed(idUsuario:string){
        const usuario = usuarios.find((item)=>item.detalheUsuario().id === idUsuario)
        console.log(`Feed do ${usuario?.detalheUsuario().username}`)
        console.log("-------------------------------------------")
        // usuario!.follow.forEach(item => {
        //     console.log(item.detalheUsuario().id)
        //     usuario!.follow.forEach(item =>{
        //         item.tweet.forEach(item =>{console.log(item.conteudo)})
        //     });
        // })


        usuario!.follow.forEach(item=>{
            item.tweet.forEach(item2=>{ console.log(TweetController.mostrarTweet(item.detalheUsuario().id, item2.pegarId()))})
           
        })

                // usuario!.follow.forEach(item=>{
                //  item.tweet.forEach(item2=>{console.log(item2)})})


        // usuario!.follow.forEach(item =>{
        //     item.tweet.forEach(item =>{console.log(item.conteudo)})
        // });

        //console.log(usuario?.follow[0].tweet[0].conteudo )
    }
}
export default new FeedController()
//imprimir os tweets de todos que eu sigo = eu.forEach(item=>item.follow{
//
//})