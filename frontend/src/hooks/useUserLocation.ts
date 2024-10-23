import { useState, useEffect } from "react";

interface Coords {
    longitude: number,
    latitude: number
}
interface Position {
    coords: Coords
}


function useUserLocation(){
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    
    useEffect(() => {
        const success = (position: Position) => {
            const coords: [number, number] = [position.coords.longitude, position.coords.latitude];
            setUserLocation(coords);
        }
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success);
        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }, [])
    return {userLocation};
}

export default useUserLocation;