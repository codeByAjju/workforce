const config = {
  APP_NAME: process.env.APP_NAME || "BOOK STORE",
  NAME_KEY: process.env.REACT_APP_NAME_KEY || "DemoCommerce",
  CART_ITEM_KEY: process.env.CART_ITEM_KEY || "CartItems",
  MEDIA_API_BASE_URL: process.env.MEDIA_API_BASE_URL || "http://localhost:3000/upload-media/user",
  BOOK_API_URL: process.env.BOOK_API_URL || "http://localhost:3000",
  USER_API_URL: process.env.USER_API_URL || "http://localhost:4000/users",
  ORDER_API_URL: process.env.ORDER_API_URL || "http://localhost:5000/orders"
};
export default config;