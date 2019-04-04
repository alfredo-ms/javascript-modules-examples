// expor o módulo como uma variável global
var RevealingModule = function(){

    function addNum() {
        this.num ? this.num++ : this.num = 1;
    }

    function getNum() {
        return this.num;
    }
  
    // Expose API
    return {
        addNum: addNum,
        getNum: getNum,
    }
  }

if (typeof exports === "object")
    module.exports = RevealingModule;