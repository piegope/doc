const map = new Map;

export default async function (url: string) {
  const cachedData = map.get(url);

  if (cachedData) return cachedData;

  const response = await fetch(url);
  const data = await response.json();

  map.set(url, data);

  return data;
}