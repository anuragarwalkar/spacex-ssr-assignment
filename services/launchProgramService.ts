import http from './httpService';
const apiPath = `https://api.spaceXdata.com/v3/launches`;

export const getLaunchPrograms = async (query: string) => {
    const { data } = await http.get(`${apiPath}${query}`);
    return data;
};