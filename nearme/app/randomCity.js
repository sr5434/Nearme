export function randomCity(){
    const cities = [
        "New York City",
        "Los Angeles",
        "San Diego, California",
        "Seattle, Washington",
        "Portland, Oregon",
        "Las Vegas, Nevada",
        "Atlanta, Georgia",
        "San Francisco",
        "London, England",
        "Paris, France",
        "Lyon, France",
        "Tokyo, Japan",
        "Beijing, China",
        "New Delhi, India",
        "Mumbai, India",
        "Bengaluru, India",
        "Oakland, California",
        "Mexico City, Mexico",
        "Jersey City",
        "Newark, New Jersey",
        "Milan, Italy",
        "Rome, Italy",
        "Denver, Colorado",
        "St. Louis, Missouri",
        "Honolulu, Hawaii",
        "Kansas City, Kansas",
        "Omaha, Nebraska",
        "San Jose, California",
        "Cheyenne, Wyoming",
        "Boise, Idaho",
        "Buffalo, New York",
        "Rochester, New York",
        "Seoul, South Korea",
        "Berlin, Germany",
        "Munich, Germany",
        "Vienna, Austria",
        "Anchorage, Alaska",
        "Miami, Florida",
        "San Juan, Puerto Rico",
        "Palo Alto, California",
        "Dallas, Texas",
        "Houston, Texas",
        "Hollywood",
        "Lagos, Nigeria",
        "Dublin, Ireland",
        "New Orleans, Louisiana",
        "Louisville, Kentucky",
        "Memphis, Tennessee",
        "Tulsa, Oklahoma",
        "Oklahoma City, Oklahoma",
        "Phoenix, Arizona",
        "Tucson, Arizona",
        "Albuquerque, New Mexico",
        "Salt Lake City, Utah",
        "Jacksonville, Florida",
        "Tampa, Florida",
        "Orlando, Florida",
        "Miami, Florida",
        "Fort Lauderdale, Florida",
        "Baltimore, Maryland",
        "Washington, D.C.",
        "Seoul, South Korea",
        "Shanghai, China",
        "Hyderabad, India",
        "Budapest, Hungary",
    ]
    var index = Math.floor(Math.random() * cities.length);
    return cities[index];
}