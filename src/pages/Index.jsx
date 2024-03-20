import { useState } from "react";
import { Box, Button, Heading, Grid, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Index = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const calendarBg = useColorModeValue("gray.100", "gray.700");
  const calendarColor = useColorModeValue("gray.800", "white");

  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Calendar
      </Heading>
      <Box bg={calendarBg} p={4} borderRadius="md">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <IconButton icon={<FaChevronLeft />} aria-label="Previous Month" onClick={prevMonth} size="sm" variant="ghost" />
          <Text fontSize="xl" fontWeight="bold">
            {months[currentMonth]} {currentYear}
          </Text>
          <IconButton icon={<FaChevronRight />} aria-label="Next Month" onClick={nextMonth} size="sm" variant="ghost" />
        </Box>
        <Grid templateColumns="repeat(7, 1fr)" gap={2} textAlign="center">
          <Text fontWeight="bold">Sun</Text>
          <Text fontWeight="bold">Mon</Text>
          <Text fontWeight="bold">Tue</Text>
          <Text fontWeight="bold">Wed</Text>
          <Text fontWeight="bold">Thu</Text>
          <Text fontWeight="bold">Fri</Text>
          <Text fontWeight="bold">Sat</Text>
          {[...Array(firstDayOfMonth).keys()].map((day) => (
            <Box key={`empty-${day}`} />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <Button key={day + 1} size="sm" variant="ghost" colorScheme="blue" color={calendarColor}>
              {day + 1}
            </Button>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
