import "./mapStyles.css"
function genMapsURL(location) {
    return "https://maps.google.com/maps?q=" + encodeURI(location.replaceAll(" ", "+")) + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
}
export default function Event({ name, location, locationRating, tags }) {
    return (
        <div className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 max-h-fit">
            <a href={genMapsURL(location)} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tags.replaceAll(",", ", ").replaceAll("_", " ")}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{locationRating}</p>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="300" height="300" id="gmap_canvas" src={genMapsURL(location)} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://embedgooglemap.net/124/"></a>
                    <br/>
                    <a href="https://www.embedgooglemap.net"></a>
                </div>
            </div>
        </div>
    )
}