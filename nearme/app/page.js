"use client";
import { useState } from "react";
import { randomCity } from "./randomCity";
import Loading from "./components/loading";
import Events from "./components/events";

export default function Home() {
  const [ city, setCity ] = useState("");
  const [ radius, setRadius ] = useState(10);
  const [events, setEvents] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const handleInputCity = async (e) => {
    const fieldValue = e.target.value;

    await setCity(fieldValue);
  }
  const handleInputRadius = async (e) => {
    const fieldValue = e.target.value;

    await setRadius(fieldValue);
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await setLoading(true);
    let res = await fetch('/api/get_events', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `{"city":"${city}", "radius": "${radius}"}`
    });
    let resJson = await res.json();
    await setEvents(resJson.events);
    await setLoading(false);
    await setCity("");
    await setRadius(10);
  }
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <h1 className="text-5xl font-extrabold">NearMe</h1>

          <form onSubmit={submitHandler}>
            <br/>
            <label htmlFor="city" className='ml-8'>City/Address</label>
            <textarea
            name="city"
            placeholder={randomCity()}
            value={city}
            onChange={handleInputCity}
            className="block p-2.5 w-full h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label htmlFor="radius" className='ml-8'>Radius(in Kilometers)</label>
            <textarea
            name="radius"
            placeholder="10"
            value={radius}
            onChange={handleInputRadius}
            className="block p-2.5 w-full h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button 
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg">
              Whats Near Me?
            </button>
          </form>
          {loading ? <Loading/> : <Events events={events}/> }
        </div>
  )
}
