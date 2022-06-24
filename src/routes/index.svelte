<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import TableBase from "../components/global/table/TableBase.svelte";
    import PaginationBase from "../components/global/pagination/PaginationBase.svelte";

    let payload = {};

    let schemas = {
        id: "ID",
        name: "Name",
        email: {
            label: "Customer Email",
            format: (value) =>
                `<td class="px-6 py-4 text-blue-500"><a href=mailto:${value["email"]}>${value["email"]}</a></td>`,
        },
    };

    let payloads = [
        {
            id: "1",
            name: "Nama",
            email: "email@domain.com",
        },
        {
            id: "2",
            name: "Nama",
            email: "email@domain.com",
        },
        {
            id: "2",
            name: "Nama",
            email: "email@domain.com",
        },
        {
            id: "2",
            name: "Nama",
            email: "email@domain.com",
        },
        {
            id: "2",
            name: "Nama",
            email: "email@domain.com",
        },
        {
            id: "2",
            name: "Nama",
            email: "email@domain.com",
        },
    ];
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
            >
                <a slot="custom_action" href={`/detail/${payload["id"]}`}>
                    <i class="bx bx-detail" />
                </a>
            </TableBase>
            <PaginationBase />
        </div>
    </WrapperContent>
</BackofficeLayout>
