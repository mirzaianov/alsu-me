import { useEffect, useState } from 'react';

const getMatches = (query: string) => window.matchMedia(query).matches;

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
