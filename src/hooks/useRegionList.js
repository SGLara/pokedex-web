import { useEffect, useState } from 'react';
import { getRegions } from '../services/pokeapi';

export default function useRegionList() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const results = await getRegions();

      setRegions(results);
    };

    fetchRegions();
  }, []);

  const getRegionId = (region) => {
    const regionId = region.url.split('/').slice(-2)[0];

    return regionId;
  };

  return {
    regions,
    getRegionId,
  };
}
