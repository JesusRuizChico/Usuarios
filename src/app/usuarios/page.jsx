
import axios from "axios";
import Link from "next/link";
async function usuariosPagina(){
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios1=await axios.get(url);
    return usuarios1.data;
}

export default async function Usuarios(){
    var usuarios1=await usuariosPagina();
    return(
        <div>
            <h1>Usuarios</h1>
            <p>Estas en Usuarios</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Email</th>
                       



                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios1.map((usuario,i)=>(
                            <tr key="{i}">
                                <td>{i+1}</td>
                                <td> 
                                    <Link href={`/usuarios/${usuario.id}`}>
                                    {usuario.name}
                                </Link>
                                </td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
        
    );
}