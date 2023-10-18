import EventItem from '../../components/events/eventItem'

const DUMMY_EVENT_LIST:Dummy_event_items[]= [
  {
    id: 1,
    title: 'event1',
    date: 'Wed Oct 18 2023 19:15:25 GMT+0900',
    location: 'somewhere',
    description: 'some information about event, ',
  image:'https://images.unsplash.com/photo-1571619983063-ffbbc82b30eb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2669',
  },
  {
    id: 2,
    title: 'event2',
    date: 'Wed Oct 10 2023 19:15:25 GMT+0900',
    location: 'somewhere',
    description: 'some information about event, ',
  image:'https://images.unsplash.com/photo-1603252657769-b02e019cc479?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670',
  },
  {
    id: 3,
    title: 'event3',
    date: 'Wed Oct 30 2023 19:15:25 GMT+0900',
    location: 'somewhere',
    description: 'some information about event, ',
  image:'https://images.unsplash.com/photo-1459260216545-994dda21d51a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670',
  },
  {
    id: 4,
    title: 'event4',
    date: 'Wed Oct 08 2023 19:15:25 GMT+0900',
    location: 'somewhere',
    description: 'some information about event, ',
  image:'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670',
  },
]

interface Dummy_event_items {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
}[]

const Eventpage = () => {
  return (
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {DUMMY_EVENT_LIST.map((event) => (
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

