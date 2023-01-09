const dateFormatter = new Intl.DateTimeFormat("en-us", {
  weekday: "long",
  month: "short",
  day: "numeric",
});
function getDate(isoDate: string) {
  const date = new Date(isoDate);
  return dateFormatter.format(date);
}

export default getDate;
