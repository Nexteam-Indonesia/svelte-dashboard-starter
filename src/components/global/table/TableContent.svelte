<script>
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<table class="table-fixed w-full">
    <tbody>
        {#each numbers as number}
            <tr class={number % 2 == 0 ? "bg-white" : "bg-gray-50"}>
                <td class="w-1/3 lg:w-1/5 px-4 py-4 font-semibold text-sm"
                    >Hello
                </td>
                <td
                    class="px-4 py-4 text-sm text-gray-600 flex flex-row items-center"
                >
                    Bandung
                </td>
            </tr>
        {/each}
    </tbody>
</table>
