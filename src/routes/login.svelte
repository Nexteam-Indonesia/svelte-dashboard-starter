<script>
    import InputText from "../components/global/input/InputText.svelte";
    import PrimaryButton from "../components/global/button/PrimaryButton.svelte";
    import loginSuite from "../validation/auth/login_validation";

    let payload = {};

    let validationResult = loginSuite.get();

    function handleClick() {
        console.log(validationResult.isValid());
        console.log(isFormValid);
    }

    const doValidation = (input) => {
        validationResult = loginSuite(payload, input.detail);
    };

    $: isFormValid = validationResult.isValid();
</script>

<div class="bg-gray-50 h-screen w-full md:py-8 lg:py-16">
    <div class="h-full max-w-md mx-auto flex flex-col justify-center">
        <div class="bg-white shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 space-y-6 sm:p-6">
                <form action="">
                    <div class="grid col-span-12 gap-6">
                        <div class="col-span-12 mx-auto">
                            <img
                                class="h-36 w-36 object-cover"
                                src="https://res.cloudinary.com/nexteam-teknologi-indonesia/image/upload/v1643551911/api-specArtboard_1_nj5iug.png"
                                alt=""
                            />
                        </div>
                        <div class="col-span-12">
                            <InputText
                                name="email"
                                label="Email"
                                placeholder="email@domain.com"
                                type="email"
                                bind:value={payload.email}
                                on:input={doValidation}
                                error={validationResult.getErrors("email")}
                            />
                        </div>
                        <div class="col-span-12">
                            <InputText
                                name="password"
                                label="Password"
                                placeholder="rahasia123"
                                type="password"
                                bind:value={payload.password}
                                on:input={doValidation}
                                error={validationResult.getErrors("password")}
                            />
                        </div>
                        <div class="col-span-12">
                            <PrimaryButton
                                on:click={handleClick}
                                wide={true}
                                loading={true}
                                disable={!isFormValid}
                            >
                                Login
                            </PrimaryButton>
                        </div>
                        <div class="col-span-12 mx-auto">
                            <a class="text-blue-600 text-sm" href="/"
                                >Having Problem? Contact Developer Here
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
