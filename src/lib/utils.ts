import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Options{
  method: string;
  headers: {
    'x-rapidapi-key': string,
		'x-rapidapi-host': string
  }
};
	

export const exerciseOptions = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '11e79f43a8msh6251298c2fe7dfbp1c980fjsn1a0f5b8251ef',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
}; 

export const fetchData = async (url:string, options:Options) => {
  const res= await fetch(url, options);
  const data= await res.json();

  return data;
}
