import { request } from "@playwright/test";
import dotenv from 'dotenv';


dotenv.config();

export async function createContext(data: { email?: string; pass?: string }) {
  data = data || { email: process.env.EMAIL!, pass: process.env.PASSWORD! };

  const token = await getToken(data);

  const context = await request.newContext({
    extraHTTPHeaders: {
      Authorization: "Token " + token,
    },
  });

  return context;
}

export async function getToken(data: { email?: string; pass?: string }) {
  const context = await request.newContext();

  const response = await context.post("users/login", {
    data: {
      user: { email: data.email, password: data.pass },
    },
  });

  const responseJson = await response.json();
  return responseJson.user.token as string;
}

export async function createUser(data: {
  username: string;
  email: string;
  pass: string;
}) {
  const context = await request.newContext();
  const response = await context.post("users", {
    data: {
      user: {
        email: data.email,
        password: data.pass,
        username: data.username,
      },
    },
  });

  const responseJson = await response.json();
  return responseJson.user.token as string;
}
