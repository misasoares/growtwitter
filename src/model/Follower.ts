import { stringify } from "querystring";
import usuarios from "../data/usuario";
import Usuario from "./Usuario";

class Follow{
    
    public follow(idUsuario:string, idToFollow:string){
        const followUser = usuarios.find((item)=>item.detalheUsuario().id === idToFollow)
        const user = usuarios.find((item)=>item.detalheUsuario().id === idUsuario)

        if(followUser !== undefined){
            user!.follow.push(followUser)
            
            console.log(`${followUser.detalheUsuario().nome}, você segue ${user?.follow.length} pessoas.` )
            console.log(user?.follow)
            
        }else{
            console.log(`Usuario n encontrado`)
        }
    }
}

export default Follow