// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Error {
            message: string;
        }
        interface Locals {
            user?: { username: string };
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
