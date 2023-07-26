import { Console, log } from "console";
import ReplieController from "./controllers/ReplieController";
import TweetController from "./controllers/TweetController";
import UsuarioController from "./controllers/UsuarioController";
import replies from "./data/replie";
import usuarios from "./data/usuario";
import Replie from "./model/Replie";
import Usuario from "./model/Usuario";


const usuario1  =  new Usuario(
    "1234",
    "alexandre",
    "alexandre@growdev.com",
    "alexandre",
    "12345"
  );
  const usuario2 = new Usuario("4321", "Misael", "misael@growdev.com", "misa", "12345")

  usuarios.push(usuario1);
  usuarios.push(usuario2);

  TweetController.addTweet("1","1234","meu primeiro tweet");
  TweetController.addTweet("2","1234","meu segundo tweet");
  TweetController.addTweet("3","1234","meu terceiro tweet");

  TweetController.addTweet("1","4321","meu primeiro tweet");
  TweetController.addTweet("8","4321","meu segundo tweet");
  TweetController.addTweet("3","4321","meu terceiro tweet");

  // TweetController.pegarTweetBase("2","4321")

  ReplieController.addReplie("1","1234","repostei porque gostei","8","4321")



  




