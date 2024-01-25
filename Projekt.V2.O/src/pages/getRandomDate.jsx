export default function getRandomDate() {
  const startDate = new Date("1960-01-01").getTime();
  const endDate = new Date("1998-01-21").getTime();
  const randomDate = new Date(
    startDate + Math.random() * (endDate - startDate)
  );
  return randomDate.toISOString().split("T")[0];
}
