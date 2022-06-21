<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import TableBase from "../components/global/table/TableBase.svelte";
    import PaginationBase from "../components/global/pagination/PaginationBase.svelte";
</script>

<BackofficeLayout>
    <WrapperContent label="Order Data">
        <div slot="header">
            <PrimaryButton>
               Add Data
            </PrimaryButton>
        </div>
        <div class="flex flex-col" slot="children">
            <TableBase />
            <PaginationBase />
        </div>
    </WrapperContent>
</BackofficeLayout>
