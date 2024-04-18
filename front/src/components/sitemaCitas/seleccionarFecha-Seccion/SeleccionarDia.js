import * as React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");
dayjs.extend(updateLocale).updateLocale("es", { weekStart: 0 });

export default function SeleccionarDia() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    console.log(date.$d.getDate(), date.$d.getFullYear(), date.$d.getMonth());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disablePast
        disableHighlightToday
        onChange={handleDateSelection}
        sx={{
          "& .MuiDayCalendar-weekDayLabel": { color: "white" },
          "&.MuiDateCalendar-root": {
            border: "1px solid white",
            borderRadius: "8px",
          },
          "& .MuiDateCalendar-viewTransitionContainer": {
            pt: "0.5rem",
          },
          "& .MuiPickersDay-root:first-of-type, & .MuiPickersDay-root:last-child":
            {
              color: "#7B7B7B",
            },
        }}
        slotProps={{
          switchViewButton: {
            sx: {
              color: "white",
            },
          },
          calendarHeader: {
            sx: {
              ".MuiPickersCalendarHeader-label": {
                textTransform: "uppercase",
                color: "#F84646",
              },
            },
          },
          previousIconButton: {
            size: "large",
            sx: { color: "white" },
          },
          nextIconButton: {
            size: "large",
            sx: { color: "white" },
          },
          day: {
            sx: {
              "&.MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#F84646",
                fontSize: "large",
              },
              "&.MuiPickersDay-root": {
                color: "white",
                fontSize: "large",
              },
              //"&.MuiPickersDay-today": {
              //border: "1px solid rgba(255, 255, 255, 0.6)",
              //},
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
