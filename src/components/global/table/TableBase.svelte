<script>
    import { getLabel } from "../../../utils/schema_utils";

    export let isHaveBaseAction = true;
    export let schemas = {};
    export let payloads = [];


</script>

<table class="table-auto w-full">
    <thead
        class="text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-md"
    >
        <tr class="">
            {#each Object.entries(schemas) as [key, value]}
                <th class="px-6 py-4 font-medium"> {getLabel(value)} </th>
            {/each}
            <th class="px-6 py-4 font-medium"> Action </th>
        </tr>
    </thead>
    <tbody>
        {#each payloads as payload}
            <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
                {#each Object.keys(schemas) as key}
                    {#if schemas[key]["format"] != null}
                        {@html schemas[key]["format"](payload)}
                    {:else}
                        <td class="px-6 py-4">{payload[key]}</td>
                    {/if}
                {/each}
                <td class="px-6 py-4">
                    <div class="flex flex-row items-center space-x-6 text-xl">
                        {#if isHaveBaseAction}
                            <a
                                class="text-grey-600 hover:text-grey-700 "
                                href="/"
                            >
                                <i class="bx bx-detail" />
                            </a>
                            <a
                                class="text-blue-600 hover:text-blue-700"
                                href="/"
                            >
                                <i class="bx bxs-edit-alt" />
                            </a>
                            <a class="text-red-600 hover:text-red-700" href="/">
                                <i class="bx bxs-trash-alt" />
                            </a>
                        {/if}
                        <slot name="custom_action" {payload} />
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
