import { decodeToken, isAuthenticated } from "$lib/auth/auth.server";
import { redirect, type Handle } from "@sveltejs/kit";
export const handle: Handle = async ({ event, resolve }) => {
    const authenticated = isAuthenticated(event.cookies);

    if (authenticated) {
        const token = event.cookies.get("token")!;

        const decode = decodeToken(token)!;

        event.locals.user = {
            username: decode.username,
        };

        if (event.url.pathname === "/") {
            return redirect(302, "/home");
        }
    } else {
        if (event.url.pathname !== "/") {
            return redirect(302, "/");
        }
    }

    return await resolve(event);
};
