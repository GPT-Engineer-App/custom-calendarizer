import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

const EventModal = ({ isOpen, onClose, date, events, onAddEvent, onUpdateEvent, onDeleteEvent }) => {
  const [newEvent, setNewEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      onAddEvent(date, newEvent.trim());
      setNewEvent("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Events for {date.toDateString()}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {events.map((event, index) => (
            <Box key={index} mb={2}>
              <Text>{event}</Text>
              <Button size="xs" onClick={() => onDeleteEvent(date, index)} ml={2}>
                Delete
              </Button>
            </Box>
          ))}
          <Input
            placeholder="Add new event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddEvent();
              }
            }}
          />
          <Button onClick={handleAddEvent} mt={2}>
            Add Event
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;