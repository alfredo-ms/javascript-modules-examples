// Se o console xterm estiver em memória, use-o para output. Caso contrário, use o console.log;
const outputFn = (outputVariable) => {
    term ? term.input(outputVariable) : console.log(outputVariable);
};

selectOptions = () => {
    if (term) { term.clear(); }

    const selectElement = document.getElementById('module-select');
    const indexValue = selectElement.options[selectElement.selectedIndex].value;

    if (executeModuleCode[indexValue]) {
        executeModuleCode[indexValue]();
    } else {
        outputFn('Escolha um tipo de módulo.');
    }
}

const executeModuleCode = {
    'IIFE': () => {
        outputFn(`Variável {someNum} (a qual o módulo IIFE deve ter processado): ${someNum}`)
    },
    'REVEALING': () => {
        const revealingModule = new RevealingModule();
        outputFn('Teste com Revealing Module Pattern.\n')
        for (let i=0; i< 10; i++) {
            revealingModule.addNum();
            outputFn(`Próximo número: ${revealingModule.getNum()}`);
        }
    },
    'AMD': () => {
        const user1 = fillUser.getUser('address-teste-1');
        const user2 = fillUser.getUser('address-novo');
        const user3 = fillUser.getUser('av. teste');
        outputFn(`Dados do usuário #1: ${JSON.stringify(user1)}`);
        outputFn(`Dados do usuário #2: ${JSON.stringify(user2)}`);
        outputFn(`Dados do usuário #3: ${JSON.stringify(user3)}`);
    },
    'UMD': () => {
        const user = umdUser.create();
        outputFn(`Dados do usuário: ${JSON.stringify(user)}`);
    }
};