import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import EventModal from "../components/EventModal";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const addEvent = (date, event) => {
    console.log(`Added event on ${date}: ${event}`);
  };
  const deleteEvent = (date, index) => {
    console.log(`Deleted event on ${date} with index ${index}`);
  };

  return (
    <Box>
      <Text fontSize="2xl">Select a date to add an event:</Text>
      {}
      {}
      <Button onClick={() => setIsOpen(true)}>Add Event</Button>
      <EventModal isOpen={isOpen} onClose={() => setIsOpen(false)} date={selectedDate} events={[]} onAddEvent={addEvent} onDeleteEvent={deleteEvent} />
    </Box>
  );
};

export default CalendarPage;
