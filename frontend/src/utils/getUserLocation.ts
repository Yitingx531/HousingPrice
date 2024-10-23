interface Coords{
    longitude: number
    latitude: number
}
interface Position {
    coords: Coords
}

const getUserLocation = () => {
function success(position: Position){
    const crds: [number, number] = [position.coords.longitude, position.coords.latitude];
    return crds;
}
return navigator.geolocation.getCurrentPosition(success);
}

export default getUserLocation;