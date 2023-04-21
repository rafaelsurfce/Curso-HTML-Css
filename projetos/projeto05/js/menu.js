
function Menu(config){
    this.btn = typeof config.toggleBtn === 'string' ? document.querySelector(config.toggleBtn) : config.toggleBtn;
    this.nav = typeof config.container === 'string' ? document.querySelector(config.container) : config.container;
    this.maxWidth = config.widthEnabled || false;
    var open = false;
    var thhis = this;
    

    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > thhis.maxWidth){
                thhis.nav.removeAttribute('style');
                open = true;
                thhis.btn.style.display = 'none';
            }
            else{
                thhis.btn.style.display = 'block';
                closeMenu();
            }
        })
        if(window.innerWidth <= thhis.maxWidth){
            thhis.btn.style.display = 'block';
            closeMenu();
        }
    }

    
    this.btn.addEventListener('click', function(){
        if(!open){
            openMenu();
        }
        else{
            closeMenu();
        }

    });


    function openMenu(){
        var topWindow = thhis.nav.getBoundingClientRect().top + 'px';
        var style = {
            maxHeight: 'calc(100vh - ' + topWindow + ' )',
            overflow: 'hidden'
        }
        applyStilo(style);
        open = true;

    }

    function closeMenu(){
        var style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
        applyStilo(style);
        open = false;
    }


    function applyStilo(estilo){
        Object.keys(estilo).forEach(stl => {
            thhis.nav.style[stl] = estilo[stl];
        })
    }
}