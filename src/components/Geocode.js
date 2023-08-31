
async function Geocode(city,street,zipcode) {
    const MAPBOX_API_KEY = 'pk.eyJ1IjoicGFub3NrYXI5OCIsImEiOiJjbGx1Z3Z0cjMxaHdsM2NwOHA1aWx4aDY5In0.PWfHaNihe4NVZzWumTCAUA';
    const address = `${street} ${city}, ${zipcode}`;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${MAPBOX_API_KEY}`;

    const response = await fetch(url)
    const json = await response.json()
    const [longitude, latitude] = json.features[0].center
    const geo = {lat:latitude,lng:longitude}
    return(
        geo
    )
}

export default Geocode