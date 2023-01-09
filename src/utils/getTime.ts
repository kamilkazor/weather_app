const timeFormatter = new Intl.DateTimeFormat("en-us", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
function getTime(isoDate: string) {
  const date = new Date(isoDate);
  return timeFormatter.format(date);
}

export default getTime;
