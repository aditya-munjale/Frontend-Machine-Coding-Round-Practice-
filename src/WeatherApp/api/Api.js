const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=20ac422f77e24c1eba643508262702";

export const getWheatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q${city}&aqi=yes`);
  return await response.json();
};
