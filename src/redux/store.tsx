import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "admin/adminApi";
import { productApi } from "admin/productApi";
import { userApi } from "admin/userApi";
import { cartApi } from "order/cartApi";
import { orderApi } from "order/orderApi";
import { authApi } from "auth/authApi";
import authSlice from "auth/authSlice";

console.log("authApi", authApi);

const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            adminApi.middleware,
            productApi.middleware,
            userApi.middleware,
            cartApi.middleware,
            orderApi.middleware,
            authApi.middleware,
        ),
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore