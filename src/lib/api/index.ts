const BASE_URL = `https://rickandmortyapi.com/api`;

export async function getAllCharacters(page = 1) {
  const res = await fetch(`${BASE_URL}/character?page=${page}`);
  return res.json();
}

export async function getCharacter(id: string) {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  return res.json();
}

export async function getMultipleCharacters(characters: number[]) {
  const res = await fetch(`${BASE_URL}/character/${characters}`);
  return res.json();
}

export async function getAllEpisodes(page = 1) {
  const res = await fetch(`${BASE_URL}/episode?page=${page}`);
  return res.json();
}

export async function getEpisode(id: string) {
  const res = await fetch(`${BASE_URL}/episode/${id}`);
  return res.json();
}

export async function getAllLocations(page = 1) {
  const res = await fetch(`${BASE_URL}/location?page=${page}`);
  return res.json();
}
