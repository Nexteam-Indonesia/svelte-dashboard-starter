<script>
    let numbers = [1, 2, 3, 4, 5, 6, 7];
</script>

<table class="table-auto w-full">
    <thead
        class="text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-md"
    >
        <tr class="">
            <th class="px-6 py-4 font-medium"> ID </th>
            <th class="px-6 py-4 font-medium"> Name </th>
            <th class="px-6 py-4 font-medium"> Email </th>
            <th class="px-6 py-4 font-medium"> Action </th>
        </tr>
    </thead>
    <tbody>
        {#each numbers as num}
            <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
                <td class="px-6 py-4"> Sliver </td>
                <td class="px-6 py-4"> Sliver </td>
                <td class="px-6 py-4"> Sliver </td>
                <td class="px-6 py-4">
                    <div class="flex flex-row items-center space-x-6 text-xl">
                        <a class="text-grey-600 hover:text-grey-700 " href="/">
                            <i class="bx bx-detail" />
                        </a>
                        <a class="text-blue-600 hover:text-blue-700" href="/">
                            <i class="bx bxs-edit-alt" />
                        </a>
                        <a class="text-red-600 hover:text-red-700" href="/">
                            <i class="bx bxs-trash-alt" />
                        </a>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
