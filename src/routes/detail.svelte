<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import TableContent from "../components/global/table/TableContent.svelte";
</script>

<BackofficeLayout>
    <WrapperContent label="Order Detail">
        <div slot="header">
            <PrimaryButton>Add Data</PrimaryButton>
        </div>
        <div class="flex flex-col" slot="children">
            <TableContent />
        </div>
    </WrapperContent>
</BackofficeLayout>
