import axios from 'axios';
import { useEffect, useState } from "react";

const POKEAPI = `${import.meta.env.VITE_POKEAPI_URL}/region`;

export default function useRegionList () {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
      axios.get(POKEAPI)
        .then((response) => {
          setRegions(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching regions:', error);
        });
    }, []);

    const getRegionId = (region) => {
      const regionId = region.url.split('/').slice(-2)[0];
  
      return regionId;
    };

    return {
      regions,
      getRegionId,
    }
  }