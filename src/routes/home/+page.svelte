<script lang="ts">
    import { goto } from "$app/navigation";
    import { getContext } from "svelte";

    const user: any = getContext("user");

    async function handleLogout() {
        const res = await fetch("/api/logout", {
            method: "POST",
        });

        if (res.ok) {
            goto("/");
        }
    }
</script>

<div
    class="h-full flex flex-col justify-center items-center p-4 border text-center gap-4"
>
    <p>You Are Logged in As:</p>
    <p class="text-4xl">{$user.username}</p>
    <div class="flex justify-center">
        <button
            on:click={handleLogout}
            class="py-2 px-4 rounded-md uppercase bg-red-500 active:bg-red-600"
        >
            logout
        </button>
    </div>
</div>
