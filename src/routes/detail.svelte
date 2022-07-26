<script>
    import BackofficeLayout from "../layout/BackofficeLayout.svelte";
    import WrapperContent from "../components/global/wrapper/WrapperContent.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import TableContent from "../components/global/table/TableContent.svelte";

    import Chart from "svelte-frappe-charts";

    let data = {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
            {
                values: [100, 120, 30, 90, 88, 157, 90],
            },
        ],
    };
</script>

<BackofficeLayout>
    <WrapperContent label="tokopaedi-search-feature Analytics">
        <div slot="header">
            <PrimaryButton>Export Data</PrimaryButton>
        </div>
        <div class="flex flex-col w-full space-y-12" slot="children">
            <div class="grid grid-cols-12 gap-8">
                <div class="col-span-4">
                    <p>Weekly Active Users</p>
                    <div class="flex flex-row mt-4">
                        <p class="text-3xl font-medium mr-2">10K</p>
                        <i
                            class="bx bx-up-arrow-alt font-medium text-green-500"
                        />
                        <p class="text-sm text-green-500">50%</p>
                    </div>
                </div>
                <div class="col-span-4">
                    <p>Monthly Active Users</p>
                    <div class="flex flex-row mt-4">
                        <p class="text-3xl font-medium mr-2">10K</p>
                        <i
                            class="bx bx-down-arrow-alt font-medium text-red-500"
                        />
                        <p class="text-sm text-red-500">10%</p>
                    </div>
                </div>
                <div class="col-span-4">
                    <p>Monthly New Users</p>
                    <div class="flex flex-row mt-4">
                        <p class="text-3xl font-medium mr-2">10K</p>
                        <i
                            class="bx bx-down-arrow-alt font-medium text-red-500"
                        />
                        <p class="text-sm text-red-500">7%</p>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <p>Daily User Analytic</p>
                <Chart {data} type="line" />
            </div>
        </div>
    </WrapperContent>
</BackofficeLayout>
