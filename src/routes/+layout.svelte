<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import "../app.css";

    export let data;
    const user = writable();
    $: user.set(data.user);
    setContext("user", user);
</script>

<div class="flex flex-col h-screen">
    <Header />
    <div class="h-full">
        <slot></slot>
    </div>
    <Footer />
</div>
