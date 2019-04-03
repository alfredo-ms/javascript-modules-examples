define([], function() {
    function create() {
        // define o próximo identificador para o usuário
        window.id ? window.id++ : window.id = 1;
        
        return {
            id: id,
            name: `user-${id}`,
            address: undefined,
        }
    }

    return {
        create
    }     
});