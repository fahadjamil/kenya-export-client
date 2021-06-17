import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  role: null,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
