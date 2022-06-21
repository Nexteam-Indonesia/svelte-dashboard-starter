<script>
    export let label = "Content Label";
</script>

<div class="bg-white px-7 pt-6 pb-10 rounded-md w-full">
    <div class="flex items-center justify-between mb-10">
        <div class="py-2 text-lg font-semibold">{label}</div>
        <slot name="header" />
    </div>
    <slot name="children" />
</div>
