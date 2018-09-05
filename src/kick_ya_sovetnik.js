/**
 * Блокирует Яндекс-Советник на страницах вашего интернет-магазина
 * https://github.com/Taroxx/kick_ya_sovetnik
 * Если скрипт по каким то причинам перестал работать или что-то ломает на вашем сайте, пожалуйста, создайте тикет:
 * https://github.com/Taroxx/kick_ya_sovetnik/issues
 */

(function () {

    function setObserveBlazer(observeClass,timeout){
        if (!this.init) {
            var blazer = document.createElement('div');
            blazer.className = observeClass;
            setTimeout(function(){
                document.body.appendChild(blazer);
                removeYaSovetnik(observeClass);
            },timeout);
            this.init = true;
        }
    }

    function removeYaSovetnik(observeClass){
        var blazer = document.getElementsByClassName(observeClass),
            n;
        if(!this.removeAll){
           var isOff = false,
               RYS = setInterval( function(){
                if (isOff) clearInterval(RYS);
                n = blazer[0].nextElementSibling;
                if (!this.removeStyle && n && n.tagName === 'STYLE') {
                    n.remove();
                    $('html').css('margin-top',0);
                    this.removeStyle = true;
                }
                else if (this.removeStyle && !this.removeAll &&  n.tagName === 'DIV'){
                    n.remove();
                    this.removeAll = true;
                    isOff = true;
                    // console.log('Sovetnik removed!');
                }
            },300);
        }
    }

})();