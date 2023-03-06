import axios from "axios";

// ? contrato que tiene que tener un objeto
import { Sub, SubsResponseFromAPI } from "../types";

// const fetchSubs = (): Promise<SubsResponseFromAPI> => {
//   return fetch("http://localhost:3000/subs").then((subs) => subs.json()) }

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};

const fetchSubs = (): Promise<SubsResponseFromAPI> => {
  return axios
    .get("http://localhost:3000/subs")
    .then((response) => response.data);
};

// ? transformar los datos de la api a datos que entiende la aplicacion
// * cambiar de contrato
const mapFromApiToSubs = (apiResponse: SubsResponseFromAPI): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileURL: avatar,
      description,
    } = subFromApi;

    return {
      nick,
      description,
      avatar,
      subMonths,
    };
  });
};
