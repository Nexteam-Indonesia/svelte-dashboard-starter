<script>

    export let label = "Label";
    export let id = "checkbox_id";
    export let error =  null;

</script>

<div>
    <div class="flex items-center mb-4">
        <input id={id} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for={id} htmlfor={id} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    </div>
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>