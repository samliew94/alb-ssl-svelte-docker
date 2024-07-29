<script lang="ts">
    export let form;
</script>

<div class="p-4 flex justify-center items-center h-full">
    <form
        method="post"
        class="border p-4 rounded-md flex flex-col justify-center gap-4"
    >
        <label for="username">
            <input
                class="w-full rounded-md text-lg px-4 py-2 text-center uppercase text-black"
                id="username"
                name="username"
                placeholder="username"
            />
        </label>
        {#if form?.error}
            <p class="text-red-500 text-xs text-center uppercase">
                {form.error}
            </p>
        {/if}
        <div class="flex justify-center">
            <button
                class="py-2 px-4 rounded-md text-white uppercase bg-blue-500 active:bg-blue-600"
            >
                submit
            </button>
        </div>
    </form>
</div>
