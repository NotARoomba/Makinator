import Crypto from "crypto-js";
import { STATUS_CODES } from "./Types";

export function isPrime(num: number) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function getFactors(num: number) {
  let factors = 0;
  for (let i = 1; i <= num; i++) {
    if (Number.isInteger(num / i)) factors++;
  }
  return factors;
}

const API_URL = "https://api.notaroomba.dev";

export async function callAPI(
  endpoint: string,
  method: string,
  body: object = {},
) {
  const time = Date.now().toString();
  const data = JSON.stringify(body);
  const digest = Crypto.enc.Hex.stringify(
    Crypto.HmacSHA256(
      time + method + endpoint + Crypto.MD5(data).toString(),
      Math.floor(Date.now() / (60 * 1000)).toString(),
    ),
  );
  const hmac = `HMAC ${time}:${digest}`;
  try {
    return method === "POST"
      ? await (
          await fetch(API_URL + endpoint, {
            method: method,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: hmac,
            },
            body: JSON.stringify(body),
          })
        ).json()
      : await (
          await fetch(API_URL + endpoint, {
            method: method,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: hmac,
            },
          })
        ).json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    if (!error.response) return { status: STATUS_CODES.NO_CONNECTION };
    // Alert.alert('Error!', 'No podemos conectar a nuestro servidor! Revisa tu conexion al internet.')
    return {
      status: STATUS_CODES.GENERIC_ERROR,
    };
  }
}
