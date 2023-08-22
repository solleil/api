import { connection } from "./connection";


//GET TODOS OS PRODUTOS
export async function pegarProdutos(){
    const comando = `select * from produtos_tb`;

    const [resposta] = connection.query(comando);
    return resposta
}

