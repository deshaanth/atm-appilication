import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/atm",
});

export const signup = (form) => API.post("/signup", form);
export const login = (accountNumber, pin) => API.post("/login", { accountNumber, pin });
export const getBalance = (accountNumber) => API.get(`/balance/${accountNumber}`);
export const deposit = (accountNumber, amount) => API.put("/deposit", { accountNumber, amount });
export const withdraw = (accountNumber, amount) => API.put("/withdraw", { accountNumber, amount });

export default API;
