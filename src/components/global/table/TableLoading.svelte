<script>
    import { getLabel } from "../../../utils/schema_utils";
    import Skeleton from "svelte-skeleton/Skeleton.svelte";
    import { onMount } from "svelte";
    import usersApi from "../../../api/users/users_api";

    export let schemas = {};

    let nums = [1, 2, 3, 4, 5, 6, 7];

    onMount(async () => {
        await usersApi.getAllUser();
    });
</script>

<tbody>
    {#each nums as num}
        <tr>
            {#each Object.entries(schemas) as [key, value]}
                <td class="px-6 py-4 font-medium">
                    <Skeleton height="15" width="100" />
                </td>
            {/each}
            <td class="px-6 py-4 font-medium">
                <Skeleton height="15" width="100" />
            </td>
        </tr>
    {/each}
</tbody>
