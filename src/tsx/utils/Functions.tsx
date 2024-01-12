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
    if (!error.response) return { status: STATUS_CODES.NO_CONNECTION };
    // Alert.alert('Error!', 'No podemos conectar a nuestro servidor! Revisa tu conexion al internet.')
    return {
      status: STATUS_CODES.GENERIC_ERROR,
    };
  }
}

export async function checkIfLogin(): Promise<false | User> {
  const userID = localStorage.getItem("userID");
  if (!userID) return false;
  const validUser = await callAPI(`/users/${userID}`, "GET");
  if (validUser.status === STATUS_CODES.USER_NOT_FOUND) {
    localStorage.clear();
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

export function generateProblem(digit: number, guesses: number) {
  let equation, operations, randMax;
  // 1415926535
  // const randomness = Math.random() > 0.5;
  if (guesses <= 10) {
    operations = ["+", "-"]
    randMax = 10;
    do {
      equation = `${Math.round(Math.random()*randMax)}${operations[Math.floor(Math.random()*operations.length)]}${Math.round(Math.random()*randMax)}`
    } while (eval(equation) !== digit)
  } else if( guesses <= 20) {
    operations = ["+", "-", "/", "*"]
    randMax = 25;
    do {
        equation = `((${Math.round(Math.random()*randMax)+Math.round(Math.random()*randMax)}${operations[Math.floor(Math.random()*operations.length)]}${Math.round(Math.random()*randMax)})${operations[Math.floor(Math.random()*operations.length)]}x)${operations[Math.floor(Math.random()*operations.length)]}${Math.round(Math.random()*randMax)+Math.round(Math.random()*randMax)}`
    } while ((eval(equation.replace("x", digit.toString())) !== digit || eval(equation.replace("x", digit.toString())).toString()[0] !== digit.toString()) && (eval(equation.replace("x", (digit+1).toString())) !== digit+1 || eval(equation.replace("x", (digit+1).toString())).toString()[0] !== (digit+1).toString()))
  }
  return equation+"=x";
}
