module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    darkMode: 'class',
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}