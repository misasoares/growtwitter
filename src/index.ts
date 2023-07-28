import { Console, log } from "console";
import ReplieController from "./controllers/ReplieController";
import TweetController from "./controllers/TweetController";
import UsuarioController from "./controllers/UsuarioController";
import replies from "./data/replie";
import usuarios from "./data/usuario";
import Replie from "./model/Replie";
import Usuario from "./model/Usuario";
import { TweetBase } from "./model/TweetBase";
import Follower from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import FeedController from "./controllers/FeedController";


  const usuario1  =  new Usuario("1234","Alexandre","alexandre@growdev.com","xandão","12345");
  const usuario2 = new Usuario("4321", "Misael", "misael@growdev.com", "misa", "12345")
  const usuario3 = new Usuario("5678", "Jose", "jose@growdev.com", "ze", "20202")

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);

  TweetController.addTweet("11","1234","Esse é meu primeiro tweet dentro desta plataforma")
  TweetController.addTweet("12","4321","Tweet do Misael!!")

  LikeController.addLike("55","4321","11","1234")
  LikeController.addLike("57","5678","11","1234")

  ReplieController.addReplie("22","4321","Este também é minha primeira vez aqui.","11","1234")
  ReplieController.addReplie("89","5678","Replie do zé","11","1234")




FollowController.follow("1234","4321")//primeiro parametro: id de quem eu quero seguir, segundo parametro: meu id
FollowController.follow("5678","4321")//primeiro parametro: id de quem eu quero seguir, segundo parametro: meu id
FollowController.follow("5678","1234")//primeiro parametro: id de quem eu quero seguir, segundo parametro: meu id
FollowController.follow("4321","5678")//primeiro parametro: id de quem eu quero seguir, segundo parametro: meu id



FeedController.mostrarFeed("4321")



//TO DO:
//CRIAR VALIDAÇÃO PARA NÃO SEGUIR A SI PRÓPRIO
//FEED DE TWEETS