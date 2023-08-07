import { stringify } from "querystring";
import usuarios from "../data/usuario";
import Usuario from "../model/Usuario";

class Followcontroller{
    
    public follow(idSeguido:string, idSeguidor:string){
        const followUser = usuarios.find((item)=>item.detalheUsuario().id === idSeguido)
        const user = usuarios.find((item)=>item.detalheUsuario().id === idSeguidor)

        if(followUser !== undefined){
            user!.follow.push(followUser)
            
        }else{
            console.log(`Usuario n encontrado`)
        }
    }

    public mostrarFollow(idSeguido:string){
        const seguido = usuarios.find((item) => item.detalheUsuario().id === idSeguido)
        seguido!.follow.forEach(item=>{
            console.log(`O usuario @${seguido?.detalheUsuario().username} está seguindo: @${item.detalheUsuario().username}`)
        })
    }
}

export default new Followcontroller()