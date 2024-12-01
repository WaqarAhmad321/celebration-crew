import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { format } from "date-fns";

const DateInput = ({ date, setDate, isLoading }) => {
  const [selectedTime, setSelectedTime] = useState(date || new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (date) {
      setSelectedTime(date);
    }
  }, [date]);

  const handleDateChange = (date) => {
    if (date) {
      setDate(
        new Date(
          date.setHours(selectedTime.getHours(), selectedTime.getMinutes())
        )
      );
      setIsCalendarOpen(false);
    }
  };

  const handleTimeChange = (time) => {
    if (date && time) {
      setDate(new Date(date.setHours(time.getHours(), time.getMinutes())));
      setSelectedTime(time);
    }
  };

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <div className="relative mt-1 w-full cursor-pointer rounded-[12px] border border-silver bg-lightgray px-4 py-3 text-base font-normal shadow-sm outline-none placeholder:text-midgray">
          <input
            id="start-date"
            placeholder=" yyyy / MM / dd hh:mm"
            value={date ? format(date, "dd/MM/yyyy HH:mm") : ""}
            readOnly
            className="cursor-pointer bg-lightgray outline-none"
            disabled={isLoading}
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer">
            <CalendarIcon
              className="h-4 w-4 text-subtlegray"
              aria-hidden="true"
              strokeWidth={2}
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="relative w-auto p-0">
        <div className="flex flex-col">
          <Calendar
            selectedDate={date}
            onDateChange={handleDateChange}
            selectedTime={selectedTime}
            onTimeChange={handleTimeChange}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateInput;

