import Event from "./event";
export default function Events({ events }) {
    return (
        <div className="flex flex-col items-center justify-center py-2 min-h-screen">
            {events.map((event, index) => {
                return <Event key={index} name={event.name} location={event.location} locationRating={event.locationRating} tags={event.tags} />
            })}
        </div>
    )
}