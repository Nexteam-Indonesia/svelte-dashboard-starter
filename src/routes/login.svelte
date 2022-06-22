<script>
    import InputText from "../components/global/input/InputText.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";

    let payload = {};

    function handleClick() {
        console.log(payload);
    }
</script>

<div class="bg-gray-50 h-screen w-full md:py-8 lg:py-16">
    <div class="h-full max-w-md mx-auto flex flex-col justify-center">
        <div class="bg-white shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 space-y-6 sm:p-6">
                <div class="grid col-span-12 gap-6">
                    <div class="col-span-12 mx-auto">
                        <img
                            class="h-36 w-36 object-cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png"
                            alt=""
                        />
                    </div>
                    <div class="col-span-12">
                        <InputText
                            label="Email"
                            placeholder="email@domain.com"
                            type="email"
                            bind:value={payload.email}
                        />
                    </div>
                    <div class="col-span-12">
                        <InputText
                            label="Password"
                            placeholder="rahasia123"
                            type="password"
                            bind:value={payload.password}
                        />
                    </div>
                    <div class="col-span-12">
                        <PrimaryButton on:click={handleClick} wide={true}
                            >Login</PrimaryButton
                        >
                    </div>
                    <div class="col-span-12 mx-auto">
                        <a class="text-blue-600 text-sm" href="/"
                            >Having Problem? Contact Developer Here</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
