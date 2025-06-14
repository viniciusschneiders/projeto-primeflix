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
             
                    //console.log(response.data.results.slice(0,10));
                    setFilmes(response.data.results.slice(0,10))
            }

                loadFilmes();

    }, [] )


    return (

        <div className='container'>
            <div className='lista-filmes'>

              {filmes.map((filme)=>{

            return (

                <article key={filme.id}>
                <strong>{filme.title}</strong>

                </article>
            )

        })}

        </div>

        </div>

    )

}

export default Home;


