import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallePokemon(){
    const {name} = useParams();
    const URL = "https://pokeapi.co/api/v2/pokemon/";

    const [detallePokemon, setDetallePokemon] = useState({});


    const getDetails = async () => {
        const response = await fetch(URL + name)
        const data = await response.json()
        setDetallePokemon(data)
    }
    console.log(detallePokemon)

    useEffect(() =>{
        getDetails();
    }, [name])

    return(
        <>
        <div className="container-card">
            <div className="card">
                <div className="card-header">
                    <img src="" alt=""/>
                    <h3>{detallePokemon?.name}</h3>
                </div>
                <div className="card-body">
                    <img src={detallePokemon?.sprites?.front_default} alt=""/>
                    <div className="card-info">
                        <div><strong>Tipo:</strong> Eléctrico</div>
                        <div><strong>HP:</strong> 35</div>
                        <div><strong>Ataque:</strong> 55</div>
                        <div><strong>Defensa:</strong> 40</div>
                    </div>
                    <div className="card-attack">
                        <strong>Ataque Especial:</strong> Impactrueno
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default DetallePokemon;