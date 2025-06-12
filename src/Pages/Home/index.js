import { useEffect, useState} from 'react';
import api from '../../services/api'
// 

function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

            async function loadFilmes() {

                const response = await api.get("movie/now_playing", {

                    params:{
                        api_key: "e532a21124bb56803222ed008a334199",
                        language: "pt-BR",
                        page: 1
                    }

                })
             
                    console.log(response.data.results);

            }

                loadFilmes();

    }, [] )


    return (

        <h1>Bem vindo a Home</h1>

    )

}

export default Home;


