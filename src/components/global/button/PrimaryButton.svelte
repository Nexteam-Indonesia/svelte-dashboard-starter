<script>
    import { createEventDispatcher } from "svelte";
    import classnames from "classnames";

    const dispatch = createEventDispatcher();

    export let isSubmit = false;
    export let skin = "primary";
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
    class={btnClass}
    on:click={onButtonClicked}
    disabled={disable}
>
    {#if loading}
        <i class="bx bx-loader-alt bx-spin mr-1" />
    {/if}
    <slot name="children" />
</button>
