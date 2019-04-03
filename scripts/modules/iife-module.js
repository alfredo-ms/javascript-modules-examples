(function(){
    // Se o console xterm estiver em memória, use-o para output. Caso contrário, use o console.log;
    const outputFn = (outputVariable) => {
        term ? term.input(outputVariable) : console.log(outputVariable);
    };

    outputFn('* iniciando script IIFE ...');
    someNum = 10;
    outputFn('* terminada execução de script IIFE.');
})()