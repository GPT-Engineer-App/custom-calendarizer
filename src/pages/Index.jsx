import React, { useState } from "react";
import EventModal from "../components/EventModal";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  const onClose = () => setIsOpen(false);
  const addEvent = (event) => {};
  const updateEvent = (eventId, newEventDetails) => {};
  const deleteEvent = (eventId) => {};

  return <EventModal isOpen={isOpen} onClose={onClose} date={selectedDate} events={events[selectedDate?.toISOString().split("T")[0]] || []} onAddEvent={addEvent} onUpdateEvent={updateEvent} onDeleteEvent={deleteEvent} />;
};

export default Index;
