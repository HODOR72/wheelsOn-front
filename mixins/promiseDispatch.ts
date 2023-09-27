import { useDispatch } from "react-redux";

export const promiseDispatch = (callback: any) => {
  return new Promise<void>((resolve, reject) => {
    callback();
    resolve();
  });
};
