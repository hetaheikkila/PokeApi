import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [valinta, setValinta] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const etsiPokemon = () => {
   axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
        setPokemon({
          name: name,
          img: response.data.sprites.front_default,
          species: response.data.species.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name
        });
        setValinta(true);
      }
      );
  };

  return (
    <div className="App">
      <div className="Contents">
      <div className="TitleSection">
        <h1><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-ball.png" />
      Pokemon Stats
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-ball.png" />
      </h1>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }} />
        <button onClick={etsiPokemon}>Etsi pokemon</button>
        </div>
      <div className="DisplaySection">
        {!valinta ? (<h1>Valitse Pokemon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={pokemon.name} />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
          )}
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-ball.png" />
      </div>
      </div>
    </div>
  );
}
export default App;