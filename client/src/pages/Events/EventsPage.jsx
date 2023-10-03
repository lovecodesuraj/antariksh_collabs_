import React from 'react';
import Event from './components/Event';
import eventsData from './events-data.json';
import './EventsPage.css';

function EventsPage() {
  return (
    <div className='EventsPage page' id='EventsPage'>
      <h1>Events we organise</h1>
      <div className='EventContainer'>
        {eventsData.map((event, index) => (
          // <div key={index} className={`Event ${index % 2 === 0 ? 'Even' : 'Odd'}`}>
            <Event name={event.name} description={event.description} photo={require(`../../assets/events/${event.photoName}`)} />
          // </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
