import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function Pokemones(){

    //Estado que almacena nuestros datos de la api
    const [pokemones, setPokemones] = useState([]);

    //Estado que guarda el nombre que el usuario elige
    const [nombrePokemon, setNombrePokemon] = useState("");

    //Constante que guarda el hook de useNavigate
    const navigate = useNavigate();

    //Url de la api
    const URL = "https://pokeapi.co/api/v2/pokemon";

    //Función fetch
    const getData = async () => {
        try{
            const response = await fetch(URL);
            const data = await response.json();
            setPokemones(data.results);

        }
        catch (error){
            console.log("Houston, We've a problem :(")
        }
        
    }

    //UseEffect que posee el llamado a la api y un array de dependencias.
    useEffect(() => {
        getData() 
    }, [])


    return(
        <>
        <div className="container-main">
            <div className="container-select">
                <div className="select">
                    <h2>Buscar Pokemones</h2>
                    <select className="select-pokemon" value={nombrePokemon} onChange={(e) => setNombrePokemon(e.target.value)}>
                        <option value="">Selecciona un Pókemon</option>
                        {
                        pokemones.map(({name}) => <option key={name} value={name}>{name}</option>)
                        }
                    </select>
                    <button onClick={() => navigate(`/pokemones/${nombrePokemon}`)}>Ver Pokemon</button>  
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Pokemones;