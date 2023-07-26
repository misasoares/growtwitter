import { v4 as uuid } from "uuid";
import usuarios from "../data/usuario";
import Replie from "./Replie";
import { TweetBase } from "./TweetBase";
import replies from "../data/replie";



class Usuario {
  private id: string;
  private nome: string;
  private email: string;
  private username: string;
  private senha: string;
  public tweet: TweetBase[];
  public replie:Replie[];
  

  constructor(
    id: string,
    nome: string,
    email: string,
    username: string,
    senha: string
  ) {
    // this.id = uuid();
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.username = username;
    this.senha = senha;
    this.tweet = [];
    this.replie =[];
    
  }


  public pegarId() {
    return this.id;
  }
  public detalheUsuario() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      username: this.username,
      senha: this.senha,
      tweet: this.tweet,
      replie: this.replie,
    };
  }
}

export default Usuario;
