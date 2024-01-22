// import { useSelector } from "react-redux";
// import config from "../config";
// import CryptoJS from "crypto-js";
// import CartURL from "../apiEndPoints/User/Cart";
// import orderAPIrequest from "../services/OrderAxios";
// import { BookUploadService } from "../services/Books/index.service";
// import UserBook from "../apiEndPoints/User/Book";
// import bookAPIrequest from "../services/BooksAxios";
// import { useState } from "react";

// let localItem = [];

// export const setLocalStorageToken = (token) => {
//   localStorage.setItem(
//     `${config.NAME_KEY}:token`,
//     CryptoJS.AES.encrypt(token, `${config.NAME_KEY}-token`).toString()
//   );
// };

// export const setLocatCartItems = (data) => {
//   localStorage.setItem(`${config.CART_ITEM_KEY}:items`, JSON.stringify(data));
// }

// async function isCartItem(cart, bookId) {
//   if (cart) {
//     return cart.some((item) => {
//       return item.id === bookId;
//     });
//   }
// }

// export const GetLocalCartItems = async (setter) => {
//   let data = JSON.parse(localStorage.getItem(`${config.CART_ITEM_KEY}:items`));
//   if (data) {
//     for (let bookId of data) {
//       try {
//         const payload = {
//           ...UserBook.UserBookDetailsById(bookId),
//           queryParams: bookId
//         };
//         const res = await bookAPIrequest(payload);
//         if (! await isCartItem(localItem, res.data.data.id)) {
//           localItem.push(res.data.data);
//         }
//         setter?.setCartData([...localItem]);
//       } catch (error) {
//         return error;
//       }
//     }
//     return data
//   }
//   return false;
// };

// export const removeLocalCartItems = () => {
//   localStorage.removeItem(
//     `${config.CART_ITEM_KEY}:items`
//   );
// };

// export const removeOneItemFromLocalStorage = async (bookId) => {
//   let myArray = await GetLocalCartItems();
//   const updatedArray = myArray.filter(item => item !== bookId);
//   localStorage.setItem(`${config.CART_ITEM_KEY}:items`, JSON.stringify(updatedArray));
// }

// export const GetLocalStorageToken = () => {
//   const token = localStorage.getItem(`${config.NAME_KEY}:token`);
//   if (token) {
//     const bytes = CryptoJS?.AES?.decrypt(token, `${config.NAME_KEY}-token`);
//     return bytes?.toString(CryptoJS.enc.Utf8);
//   }
//   return false;
// };

// export const RemoveLocalStorageToken = () => {
//   localStorage.removeItem(`${config.NAME_KEY}:token`);
//   localStorage.removeItem(`${config.APP_PERSIST}:root`);
// }

// export const generateUserToken = (token) => {
//   localStorage.setItem(
//     `${config.USER_KEY}:token`,
//     CryptoJS.AES.encrypt(token, `${config.USER_KEY}-token`).toString()
//   );
// };

// export const getUserToken = () => {
//   const token = localStorage.getItem(`${config.USER_KEY}:token`);
//   if (token) {
//     const bytes = CryptoJS?.AES?.decrypt(token, `${config.USER_KEY}-token`);
//     return bytes?.toString(CryptoJS.enc.Utf8);
//   }
//   return false;
// };

// export const removeUserToken = () => {
//   localStorage.removeItem(`${config.USER_KEY}:token`);
//   localStorage.removeItem(`${config.APP_PERSIST}:root`);
// }

// export const checkCartItem = async () => {
//   try {
//     const payload = {
//       ...CartURL.CartList,
//     };
//     const res = await orderAPIrequest(payload);
//     return res;
//   } catch (error) {
//     return error;
//   }
// }

// export const dateFormatter = (date) => {
//   try {
//     const [year, month, day] = date.split("-");
//     const formattedDate = `${day}/${month}/${year}`;
//     return formattedDate;
//   } catch (error) {
//     return error;
//   }
// }
