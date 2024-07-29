import { env } from "$env/dynamic/private";
import { fail, redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get("username") as string;

        if (!username) {
            return fail(400, { error: "username is required" });
        }

        if (username.length < 3) {
            return fail(400, {
                error: "username must be at least 3 characters long",
            });
        }

        const token = jwt.sign(
            { username: username.toUpperCase() },
            env.JWT_SECRET
        );

        cookies.set("token", token, { path: "/", maxAge: 31536000 });

        return redirect(302, "/home");
    },
};
