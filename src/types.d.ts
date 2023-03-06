// ? contrato de subs -> formulario y div
export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

// ? contrato de la API
export type SubsResponseFromAPI = Array<{
  nick: string;
  months: number;
  profileURL: string;
  description: string;
}>;
