<script>
</script>

<header
    class="w-full top-0 flex flex-row flex-wrap items-center justify-between bg-white py-4 px-6 border-b border-gray-200"
>
    <div class="flex-none w-56 flex flex-row items-center">
        <h1 class="font-semibold text-xl">NTI Project</h1>
        <button
            id="sliderBtn"
            class="flex-none text-right text-gray-900 block md:hidden"
            type="button"
        >
            <i class="bx bx-menu" />
        </button>
    </div>

    <div class="flex items-center justify-center space-x-4">
        <div class="relative">
            <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
                <i class="bx bx-search text-xl" />
            </div>
            <input
                type="text"
                autocomplete="off"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
            />
        </div>
        <img
            class="w-9 h-9 object-cover rounded-full"
            alt="profile"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
        />
    </div>
</header>
