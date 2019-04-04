(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Requester = factory();
    }
}(this, function () {
    function create() {
        // define o próximo identificador para o usuário
        typeof amd_user_id === 'number' ? amd_user_id++ : amd_user_id = 1;
        
        return {
            id: amd_user_id,
            name: `umd-user-${amd_user_id}`,
            address: undefined,
        }
    }

    return {
        create
    }
}));