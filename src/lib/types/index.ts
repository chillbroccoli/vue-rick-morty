export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  created: string;
  episode: string[];
  gender: string;
  image: string;
  url: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export interface APIData<T> {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: T[];
}
