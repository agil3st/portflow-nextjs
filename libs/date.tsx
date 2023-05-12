export default function formatDate(dateTime) {
  const date = new Date(dateTime);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta",
  };

  return date.toLocaleDateString("en-US", options);
}
