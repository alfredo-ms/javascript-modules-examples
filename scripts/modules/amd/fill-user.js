define(['create-user'], function(createUser) {
    function getUser(address) {
        const newUser = createUser.create();
        newUser.mark = 'filled';

        return Object.assign(newUser, { address: address });
    }

    return {
        getUser: getUser
    }
    
});