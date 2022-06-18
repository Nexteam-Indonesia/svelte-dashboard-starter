<script>
    export let label = "Label";
    export let id = "input_icon_id";
    export let placeholder = "placeholder";
    export let error = null;
    export let icon = "search";
</script>

<div>
    <label
        for={id}
        htmlfor={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
        {label}
    </label>
    <div class="relative mb-2">
        <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
            <i class={`bx bx-${icon} text-xl`} />
        </div>
        <input
            type="text"
            {id}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {placeholder}
        />
    </div>
    {#if error != null}
        <span class="text-sm text-red-500 tracking-tight capitalize">
            {error}
        </span>
    {/if}
</div>
