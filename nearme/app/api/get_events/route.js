import { NextResponse } from 'next/server'
export async function POST(req){
    let reqJSON = await req?.json();
    const city = reqJSON?.city;
    const radius = reqJSON?.radius;
    const cityPos = await fetch(`http://api.positionstack.com/v1/forward?access_key=${process.env.GEOCODING_KEY}&query=${encodeURI(city)}`)
    const cityPosJSON = await cityPos.json();
    const lat = cityPosJSON?.data[0]?.latitude;
    const lon = cityPosJSON?.data[0]?.longitude;
    const events = await fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius*1000}&lon=${lon}&lat=${lat}&rate=3&format=geojson&limit=15&apikey=${process.env.TRIPMAP_API_KEY}`)
    const eventsJSON = await events.json();
    let eventsArr = [];
    let coords;
    for (let i = 0; i < eventsJSON.features.length; i++) {
        coords = eventsJSON?.features[i]?.geometry?.coordinates;
        let address = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${process.env.GEOCODING_KEY}&query=${coords[1]},${coords[0]}`)
        let addressJSON = await address.json();
        eventsArr.push({
            name: eventsJSON?.features[i]?.properties?.name,
            location: addressJSON?.data[0]?.label,
            locationRating: eventsJSON?.features[i]?.properties?.rate,
            tags: eventsJSON?.features[i]?.properties?.kinds
        })
    }
    return NextResponse.json({ events: eventsArr});
}