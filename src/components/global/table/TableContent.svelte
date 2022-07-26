<script>
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    let schemas = {
        id: "ID",
        name: "Name",
        email: {
            label: "Customer Email",
            format: (value) =>
                `<td class="px-6 py-4 text-blue-500"><a href=mailto:${value["email"]}>${value["email"]}</a></td>`,
        },
    };

    let payload = {
        "name" : "Muhammad Ilzam Mulkhaq",
        "age" : "25"
    }

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
