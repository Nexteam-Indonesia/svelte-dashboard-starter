<script>
    import { beforeUpdate, onMount } from "svelte";

    export let currentRoute = "/";

    let menus = [
        {
            menu: "Home",
            child: [
                {
                    name: "Home",
                    route: "/",
                    icon: "bx bx-home-alt",
                },
                {
                    name: "Project",
                    route: "/project",
                    icon: "bx bxs-box",
                },
            ],
        },
        {
            menu: "Setting",
            child: [
                {
                    name: "Key",
                    route: "/key",
                    icon: "bx bx-key",
                },
            ],
        },
    ];

    let activeItemclass =
        "flex items-center py-2 px-3 text-base font-normal text-white rounded-lg dark:text-white bg-blue-500 hover:bg-blue-600";

    let inActiveItemClass =
        "flex items-center py-2 px-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100";

    beforeUpdate(() => {
        console.log("BEFORE UPDATE");
    });

    onMount(() => {
        console.log("ON MOUNT");
    });
</script>

<aside
    class="flex flex-col z-10 overflow-y-hidden flex-wrap bg-white border-r border-gray-200 p-6 flex-none w-64 md:translate-x-0 top-0  h-full shadow-xl md:shadow-none transform transition ease-in-out duration-500 sm:duration-700 overflow-auto -translate-x-64"
>
    <div class="flex flex-col">
        <div class="text-right md:hidden block mb-4">
            <button type="button" id="sideBarHideBtn">
                <i class="bx bxs-x-circle" />
            </button>
        </div>
        {#each menus as menu}
            <div class="flex flex-col mb-6">
                <h1 class="capitalize mb-2">{menu.menu}</h1>
                <ul class="space-y-2">
                    {#each menu.child as child}
                        <li>
                            <a
                                href={child.route}
                                class={currentRoute == child.route
                                    ? activeItemclass
                                    : inActiveItemClass}
                            >
                                <i class={`${child.icon} mr-2`} />
                                <span class="ml-1">{child.name}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</aside>
