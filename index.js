const readline = require('readline');
let buffer = '';

const executeOptions = {
    1: () => {
        console.log('\n\n');
        require('./scripts/modules/iife-module');
        console.log(`Variável {someNum} (a qual o módulo IIFE deve ter processado): ${someNum}`);
        askQuestion();
    },
    2: () => {
        console.log('\n\n');
        const RevealingModule = require('./scripts/modules/revealing-module-pattern');
        const revealingModule = new RevealingModule();
        console.log('Teste com Revealing Module Pattern.\n')
        for (let i=0; i< 10; i++) {
            revealingModule.addNum();
            console.log(`Próximo número: ${revealingModule.getNum()}`);
        }
        askQuestion();
    },
    3: () => {
        console.log('\n\n');
        const CJSModule = require('./scripts/modules/cjs/commonjs-test');
        CJSModule();
        askQuestion();
    },
    4: () => {
        console.log('\n\n');
        const UMDModule = require('./scripts/modules/umd/umd-user');
        const user = UMDModule.create();
        console.log(`Dados do usuário: ${JSON.stringify(user)}`);
        askQuestion();
    },
}

const askQuestion = () => {
    console.log(`\n\n\n ********* Exemplo de módulos em JavaScript ********* `);
    console.log(`
    Módulos disponíveis para execução:
    1. IIFE;
    2. Revealing Module
    3. CommonJS
    4. UMD
    `);
    
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    reader.question('Você dejesa executar qual módulo? ', function(answer) {
        buffer = answer;
        reader.close();

        if (executeOptions[buffer]){
            executeOptions[buffer]();
        } else {
            console.log('\nOpção não disponível.\n\n');
            process.exit();
        }   
    });
}

askQuestion();