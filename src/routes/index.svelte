<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
</script>

<BackofficeLayout>
    <WrapperContent label="Order Data">
        <div slot="header">
            <PrimaryButton>
               Add Data
            </PrimaryButton>
        </div>
        <div class="flex flex-col" slot="children">
            <div class="h-20 w-20 bg-blue-400 mb-8" />
            <div class="h-20 w-20 bg-blue-400 mb-8" />
            <div class="h-20 w-20 bg-blue-400 mb-8" />
            <div class="h-20 w-20 bg-blue-400 mb-8" />
            <div class="h-20 w-20 bg-blue-400 mb-8" />
            <div class="h-20 w-20 bg-blue-400 mb-8" />
        </div>
    </WrapperContent>
</BackofficeLayout>
