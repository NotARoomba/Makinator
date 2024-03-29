import Crypto from "crypto-js";
import { STATUS_CODES, User } from "./Types";

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
    if (!error.response) {
      alert(
        "We couldn't connect to the server! Please check your internet connection.",
      );
      return { status: STATUS_CODES.NO_CONNECTION };
    }
    return {
      status: STATUS_CODES.GENERIC_ERROR,
    };
  }
}

export async function checkIfLogin(): Promise<false | User> {
  const userID = getCookie("userID");
  if (!userID) return false;
  const validUser = await callAPI(`/users/${userID}`, "GET");
  if (validUser.status === STATUS_CODES.USER_NOT_FOUND) {
    setCookie("userID", null);
    return false;
  }
  return validUser.user;
}

export function convertToBase64(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateProblem(digit: number, guesses: number) {
  let equation = "",
    operations,
    randMax;
  // 1415926535
  // const randomness = Math.random() > 0.5;
  if (guesses <= 25) {
    operations = ["+", "-"];
    let a,
      b,
      o = "";
    randMax = 10;
    do {
      o = operations[Math.floor(Math.random() * operations.length)];
      a = getRandomInt(1, randMax);
      b = getRandomInt(1, randMax);
    } while (o == operations[0] ? a + b !== digit : a - b !== digit);
    equation = `${a}${o}${b}=x`;
  } else if (guesses > 25) {
    randMax = 5 * Math.floor(guesses / 10);
    let a,
      b,
      c = 0;
    do {
      a = getRandomInt(1, randMax);
      b = getRandomInt(1, randMax);
      c = a * digit + b;

      equation = `${a}x + ${b} = ${c}`;
    } while (a * digit + b != c);
  }
  return equation;
}

export function setCookie(key: string, value: string | null) {
  const expires = new Date();
  expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}
export function deleteCookies() {
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}
export function getCookie(key: string) {
  const keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}
