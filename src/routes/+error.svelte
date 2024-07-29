<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
</script>

<div
    class="flex flex-col justify-center items-center gap-4 p-4 h-full text-center"
>
    <p class="text-2xl uppercase">error {$page.status}</p>
    <p>{$page.error?.message}</p>
    <button
        on:click={() => goto("/")}
        class="py-2 px-4 rounded-md uppercase bg-blue-500 active:bg-blue-600"
        >home</button
    >
</div>
