<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import TableBase from "../components/global/table/TableBase.svelte";
    import PaginationBase from "../components/global/pagination/PaginationBase.svelte";
    import usersApi from "../api/users/users_api";

    let schemas = {
        id: "ID",
        first_name: "Name",
        email: {
            label: "Admin Email",
            format: (value) =>
                `<td class="px-6 py-4 text-blue-500"><a href=mailto:${value["email"]}>${value["email"]}</a></td>`,
        },
    };

    let payloads = [];

    const loadOrderData = async () => {
        try {
            const result = await usersApi.getAllUser();
            payloads = result;
        } catch (error) {
            console.error(error)
        }
    };
</script>

<BackofficeLayout>
    <WrapperContent label="Order Data">
        <div slot="header">
            <PrimaryButton>Add Data</PrimaryButton>
        </div>
        <div class="flex flex-col" slot="children">
            <TableBase
                let:payload
                isHaveBaseAction={false}
                {schemas}
                {payloads}
                on:load={loadOrderData}
            >
                <a slot="custom_action" href={`/detail/${payload["id"]}`}>
                    <i class="bx bx-detail" />
                </a>
            </TableBase>
            <PaginationBase />
        </div>
    </WrapperContent>
</BackofficeLayout>
