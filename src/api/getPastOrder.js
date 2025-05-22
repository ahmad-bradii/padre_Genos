export default async function getPastOrders(order) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://padre-genos-api-1.onrender.com/api/past-order/${order}`
  );
  const data = await response.json();
  return data;
}
