<script>
    export let error = null;
    export let id = "text_area_id";
    export let label = "Text Area Label";
    export let rows = 4;
    export let placeholder = "placehoder";
</script>

<div class="w-full">
    <label
        for={id}
        htmlfor={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >
        {label}
    </label>
    <textarea
        {id}
        {rows}
        class="mb-2 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {placeholder}
    />
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>
