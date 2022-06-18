<script>
    import Header from "../components/global/header/Header.svelte";
    import Sidebar from "../components/global/sidebar/Sidebar.svelte";
</script>

<div class="h-screen flex flex-col">
    <Header />
    <div class="flex flex-grow flex-row flex-wrap bg-gray-100">
        <Sidebar />
    </div>
</div>
