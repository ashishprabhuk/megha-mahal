import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Events.css';

const localizer = momentLocalizer(moment);

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch access token using refresh token
        const tokenResponse = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
          params: {
            refresh_token: 'YOUR_REFRESH_TOKEN',
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
            redirect_uri: 'YOUR_REDIRECT_URI',
            grant_type: 'refresh_token',
          },
        });

        const accessToken = tokenResponse.data.access_token;

        // Fetch events using access token
        const eventsResponse = await axios.get('https://calendar.zoho.com/api/v1/events', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const formattedEvents = eventsResponse.data.events.map(event => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-header">Events Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Events;
