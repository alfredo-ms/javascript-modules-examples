requirejs.config({
    baseUrl: 'scripts/modules/amd',
});

requirejs(['fill-user'], (fillUser) => {
    window.fillUser = fillUser;
})