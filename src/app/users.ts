
export interface User {
  id?: number;      // json-server auto generates ID
  name: string;
  password: string;
  email: string;
  phone: string;
  // address: string;
}