export default function formatDate(timestamp) {
  let date = new Date(timestamp);

  const [year, day] = [date.getFullYear(), date.getDate()];
  const monthNames = [
    "Janury",
    "Febuary",
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
  const month = monthNames[date.getMonth()];

  const [hour, minutes] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const dateStr = `${month} ${day}, ${year}`;

  let digital_hours = hour;

  if (digital_hours === 0) {
    digital_hours += 12;
  } else if (digital_hours > 12) {
    digital_hours -= 12;
  }

  let meridian;
  if (hour > 11) {
    meridian = " P.M";
  } else {
    meridian = " A.M";
  }

  const time = `${digital_hours}:${minutes} ${meridian}`;

  return { dateStr, time };
}
