<script>
    export let label = "Label";
    export let id = "file_id";
    export let multiple = false;
    export let error = null;
</script>

<div class="w-full">
    <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for={id}
        htmlfor={id}
    >
        {label}
    </label>
    <input
        class="block mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        {id}
        type="file"
        {multiple}
    />
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>
