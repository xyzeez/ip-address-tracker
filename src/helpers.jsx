import { API_KEY } from './configs';

export const getIpData = async (ip = '') => {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );

    if (!res.ok) throw new Error();

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
