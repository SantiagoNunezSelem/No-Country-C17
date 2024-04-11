import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import "dayjs/locale/es";
import updateLocale from 'dayjs/plugin/updateLocale';
dayjs.locale("es");
dayjs.extend(updateLocale);
dayjs.updateLocale('es',{
  weekStart: 0,
});


export default function DatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          "& .MuiDayCalendar-weekDayLabel": {color: "white",},
          "&.MuiDateCalendar-root": {
            border: "1px solid white",
            borderRadius: "8px",
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
            sx: { color: "white" ,},
          },
          nextIconButton: {
            size: "large",
            sx: { color: "white" ,},
          },
          day: {
            sx: {
              "&.MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#F84646",
              },
              "&.MuiPickersDay-root": {
                color: "white",
              },
              "&.MuiPickersDay-today": {
                border: "1px solid rgba(255, 255, 255, 0.6)",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}