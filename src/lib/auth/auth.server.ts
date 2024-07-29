import { env } from "$env/dynamic/private";
import type { Cookies } from "@sveltejs/kit";
import jwt, { type JwtPayload } from "jsonwebtoken";

export function isAuthenticated(cookies: Cookies) {
    const token = cookies.get("token");

    if (!token) {
        return false;
    }

    try {
        jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
        return false;
    }

    return true;
}

export function decodeToken(token: string) {
    return jwt.decode(token) as JwtPayload;
}
