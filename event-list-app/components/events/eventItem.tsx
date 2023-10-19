import {FC} from 'react'
import Link from 'next/link'
import { Events } from '../../types/collection'

const EventItem = ({event}:any) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    });
 
  return (
  <Link href={`/events/${event.id}`} className="group">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src={`${event.image}`} alt={event.title}
     className="h-full w-full object-cover object-center group-hover:opacity-75"/>
    </div>
    <div className="px-2 pb-4">
        <div>
          <h2 className="mt-1 text-lg font-medium text-gray-900">{event.title}</h2>
          <p className="mt-4 text-sm text-gray-700">{formattedDate}</p>
          <p className="mt-4 text-sm text-gray-700">{event.location}</p>
        </div>
        {/* <p>
          <Link href={`/events/${event.id}`} className="">
            View Details
          </Link>
        </p> */}
      </div>
      </Link>
  )
}


export default EventItem