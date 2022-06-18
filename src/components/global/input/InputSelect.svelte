<script>
    export let error = null;
    export let options = [];
    export let label = "Label";
    export let id = "select_id";
    export let disabled = false;
</script>

<div class="w-full">
    <label
        for={id}
        htmlfor={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
        {label}
    </label>
    <select
        {id}
        {disabled}
        class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        {#each options as option}
            <option value={option["value"]}>{option["name"]}</option>
        {/each}
    </select>
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>
