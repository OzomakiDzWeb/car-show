export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "8946ffdcd2msh67973932a2913bep172030jsn4b2538fa7fdb",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const respons = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const resalt = await respons.json();
  return resalt;
}
