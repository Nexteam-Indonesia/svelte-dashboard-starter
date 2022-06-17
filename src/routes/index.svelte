<script>
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";

    let handleButton = (event) => {
        console.log('Passed Function')
    }

</script>

<div class="max-w-sm flex flex-row items-center p-8">
    <PrimaryButton on:click={handleButton}>
        <p slot="children">Submit</p>
    </PrimaryButton>
</div>
