import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState<Array<Card>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const size = 20;
  const [offset, setOffset] = useState(0);

  const fetchCard = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`,
      };

      const response = await axios.request(options);
      response.data.results.forEach(async (pokemon: any) => {
        await fetchPokemon(pokemon.url);
      });
      setOffset((prevState) => prevState + size);
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const reFetch = () => {
    setOffset(0);
    fetchCard();
  };

  const fetchPokemon = async (url: string) => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url,
      };
      const response = await axios.request(options);
      const pokemon: Card = {
        name: response.data.name,
        number: response.data.order,
        image: response.data.sprites.other.home.front_default,
        type: response.data.types.map((type: any) => type.type.name),
      };
      setData((prevState) => [...prevState, pokemon]);
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDetails = async (name: string) => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${name}/`,
      };
      const { data } = await axios.request(options);

      const speciesOptions = {
        method: "GET",
        url: data.species.url,
      };

      const species = await axios.request(speciesOptions);
      
      const pokemon: Pokemon = {
        name: data.name,
        number: data.order,
        image: data.sprites.other.home.front_default,
        type: data.types.map((type: any) => type.type.name),
        weight: data.weight,
        height: data.height,
        color: species.data.color.name,
        abilities: data.abilities.map((item: any) => item.ability.name),
        description: species.data.flavor_text_entries[0].flavor_text.replace(/(\n)/gm, " "),
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialattack: data.stats[3].base_stat,
          specialdefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        },
      };
      return pokemon;
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return { data, isLoading, error, fetchCard, reFetch, fetchDetails };
};

export default useFetch;
