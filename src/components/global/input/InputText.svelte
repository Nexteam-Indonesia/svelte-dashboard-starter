<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // binding value to root component
    export let value = "";

    export let error = null;
    export let placeholder = "Placeholder";
    export let label = "Label";
    export let required = false;
    export let disabled = false;
    export let type = "text";
    export let name = "input";

    function typeAction(node) {
        node.type = type;
    }

    function handleInput(event) {
        let inputs = event.target.value;
        dispatch("input", name);
    }
</script>

<div>
    <label
        htmlfor={name}
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
        {label}
    </label>
    <input
        use:typeAction
        id={name}
        class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {placeholder}
        {required}
        {disabled}
        {name}
        bind:value
        on:input={handleInput}
    />
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>
