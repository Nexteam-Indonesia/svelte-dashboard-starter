<script>
    import { createEventDispatcher } from "svelte";
    import classnames from "classnames";

    const dispatch = createEventDispatcher();

    export let isSubmit = false;
    export let skin = "blue";
    export let wide = false;
    export let disable = false;
    export let loading = false;

    let onButtonClicked = () => {
        dispatch("click");
    };

    let btnClass = classnames("btn", `btn-${skin}`, {
        "w-full": wide,
        disabled: disable,
    });
</script>

<button
    type={isSubmit ? "submit" : "button"}
    class={`text-center capitalize block py-2 px-5 rounded transition-all ease-in-out duration-300 border text-white border-transparent bg-${skin}-600`}
    on:click={onButtonClicked}
    disabled={disable}
>
    {#if loading}
        <i class="bx bx-loader-alt bx-spin mr-1" />
    {/if}
    <slot />
</button>
