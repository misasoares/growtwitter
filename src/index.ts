import { Console, log } from "console";
import ReplieController from "./controllers/ReplieController";
import TweetController from "./controllers/TweetController";
import UsuarioController from "./controllers/UsuarioController";
import replies from "./data/replie";
import usuarios from "./data/usuario";
import Replie from "./model/Replie";
import Usuario from "./model/Usuario";
import { TweetBase } from "./model/TweetBase";
import Follower from "./model/Follower";
import LikeController from "./controllers/LikeController";


const usuario1  =  new Usuario("1234","alexandre","alexandre@growdev.com","alexandre","12345"
  );
  const usuario2 = new Usuario("4321", "Misael", "misael@growdev.com", "misa", "12345")
  const usuario3 = new Usuario("5678", "Jose", "jose@growdev.com", "ze", "20202")

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);

  TweetController.addTweet("1","1234","meu primeiro tweet");
  TweetController.addTweet("2","1234","meu segundo tweet");
  TweetController.addTweet("3","1234","meu terceiro tweet");

  TweetController.addTweet("1","4321","tweet de choro");
  TweetController.addTweet("8","4321","tweet");
  TweetController.addTweet("3","4321"," tweet de afirmação");

  ReplieController.addReplie("1","1234","repostando porq gostei ...","8","4321")
  ReplieController.addReplie("90","1234","pura verdade","3","4321")
  ReplieController.addReplie("3","1234","chorei ","1","4321")

  ReplieController.removeReplie("1234","3")

const follower = new Follower
follower.follow("1234","4321")// meu id depois o id de quem eu quero seguir.
follower.follow("1234","5678")

UsuarioController.removerUsuario("5678","jose@growdev.com","20202")
  
LikeController.addLike("9","90","1234")

