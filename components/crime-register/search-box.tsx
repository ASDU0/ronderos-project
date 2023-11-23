
import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

interface SearchBoxProps {
    map: mapboxgl.Map | null;
    setLocation: (location: { name: string; coordinates: [number, number] }) => void;
}


function SearchBox({ setLocation: setUbicacion }: SearchBoxProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (query) {
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=pk.eyJ1IjoibmF0YzVzYSIsImEiOiJjbG91a2tzOXYwaTd5MmlvOW96cXRubTlzIn0.HIMdltIYeNRsgHmdwT6Sww`)
                .then(response => response.json())
                .then(data => setResults(data.features));
        } else {
            setResults([]);
        }
    }, [query]);

    const handleSearch = (result: { place_name: string; center: [number, number] }) => {
        setUbicacion({
          name: result.place_name,
          coordinates: result.center,
        });
      };

      const handleSelect = (place: any) => {
        setQuery(place.place_name);
        setResults([]);
        setUbicacion({
            name: place.place_name,
            coordinates: place.center as [number, number],
        });
        //console.log("direcciona::: ", place.center);
    };
    

    return (
        <div className="absolute top-0 left-0 m-4">
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="p-2 rounded border"
                placeholder="Buscar Dirección"
            />
            {results && results.length > 0 && ( // Asegúrate de que 'results' esté definido antes de acceder a 'length'
                <div className="border rounded mt-2">
                    {results.map(result => (
                        <div
                            key={result.id}
                            onClick={() => handleSelect(result)}
                            className="p-2 bg-gray-200 hover:bg-rose-500 cursor-pointer"
                        >
                            {result.place_name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBox;

