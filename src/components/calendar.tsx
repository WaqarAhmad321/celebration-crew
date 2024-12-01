import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "../lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Helper function to strip time from date
const stripTime = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selectedDate,
  onDateChange,
  selectedTime,
  onTimeChange,
  selectedDayColor = "bg-black !rounded-md !text-white", // Default color for selected date
  ...props
}) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [dateSelected, setDateSelected] = React.useState(selectedDate || new Date());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear + i - 10);

  const [currentMonth, setCurrentMonth] = React.useState(
    stripTime(dateSelected),
  );

  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value, 10);
    const updatedMonth = new Date(currentMonth);
    updatedMonth.setMonth(newMonth);
    setCurrentMonth(updatedMonth);
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    const updatedMonth = new Date(currentMonth);
    updatedMonth.setFullYear(newYear);
    setCurrentMonth(updatedMonth);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() - 1);
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + 1);
      return newMonth;
    });
  };

  const handleDayClick = (day) => {
    setDateSelected(day);
    const updatedDate = new Date(day);
    updatedDate.setHours(selectedTime ? selectedTime.getHours() : 0);
    updatedDate.setMinutes(selectedTime ? selectedTime.getMinutes() : 0);
    if (onDateChange) onDateChange(updatedDate);
  };

  const handleTimeChange = (e) => {
    const [hours, minutes] = e.target.value.split(":");
    const updatedTime = new Date(selectedDate || dateSelected);
    updatedTime.setHours(hours);
    updatedTime.setMinutes(minutes);
    if (onTimeChange) onTimeChange(updatedTime);
  };

  return (
    <div className="relative flex w-80 flex-col items-center rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
      <div className="mb-2 mt-2 flex w-full items-center">
        <button
          onClick={goToPreviousMonth}
          className="p-2 text-gray-600 transition-colors duration-200 hover:text-gray-900"
          aria-label="Previous Month"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="flex-grow text-center font-semibold text-gray-800">
          <div className="flex items-center space-x-2">
            <select
              value={currentMonth.getMonth()}
              onChange={handleMonthChange}
              className="rounded-md border border-gray-300 bg-white p-1 font-medium text-gray-700 shadow-sm outline-none"
            >
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={currentMonth.getFullYear()}
              onChange={handleYearChange}
              className="rounded-md border border-gray-300 bg-white p-1 font-medium text-gray-700 shadow-sm outline-none"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={goToNextMonth}
          className="p-2 text-gray-600 transition-colors duration-200 hover:text-gray-900"
          aria-label="Next Month"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <DayPicker
        selected={dateSelected}
        onDayClick={handleDayClick}
        mode="single"
        month={currentMonth}
        showOutsideDays={showOutsideDays}
        className={cn("w-full p-1 !pl-0 text-sm", className)}
        classNames={{
          months: "flex flex-col space-y-2 items-center",
          month: "space-y-2",
          month_caption: "hidden",
          caption_label: "hidden",
          month_grid: "w-full border-collapse",
          weekdays: "flex",
          weekday: "text-gray-600 rounded-md w-10 text-sm flex justify-center",
          week: "flex w-full",
          day: cn("h-10 w-10 p-0 font-medium", "flex items-center justify-center", "rounded-sm", "square"),
          selected: selectedDayColor,
          today: "bg-[#f1f5f9] !text-black !rounded-md",
          outside: "day-outside text-gray-400 opacity-50 aria-selected:bg-pink-200 aria-selected:text-gray-600",
          disabled: "text-gray-300 opacity-50",
          range_middle: "aria-selected:bg-pink-200 aria-selected:text-gray-600",
          hidden: "invisible",
          button_previous: "hidden",
          button_next: "hidden",
          ...classNames,
        }}
        {...props}
      />

      <div className="mt-3 w-full">
        <input
          type="time"
          value={selectedTime ? selectedTime.toISOString().substr(11, 5) : ""}
          onChange={handleTimeChange}
          className="w-full rounded-md border bg-white p-2 text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-purple"
          style={{ height: "36px" }}
        />
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
