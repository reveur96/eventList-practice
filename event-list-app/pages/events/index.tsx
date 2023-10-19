import supabase from '../../lib/supabase-client';
import EventItem from '../../components/events/eventItem'
import { useCallback, useEffect, useState } from 'react';
import { Events } from '../../types/collection'

const Eventpage = () => { 
  const [events, setEvents] = useState<Events[]>([])
  const fetcher = useCallback(
     async() => {
    const { data, error } = await supabase.from("events").select()
        
        if (error) {
          console.log(error)
        } else {
          setEvents(data)
        }
    }
  ,[])
    
  useEffect(() => {
    fetcher()
  }, [fetcher])
  
  
  return (
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {events.map((event) => (
      <li
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7"
        key={event.id}>
        <EventItem event={event} />
      </li>
    ))}
        </ul>  
      </div>
    </div>
  )
}

export default Eventpage

