    const header =document.querySelector('header')
    window.addEventListener('scroll',function(){
        
        if(this.window.scrollY > 800){  
            header.classList.add('on');
        }else{
            header.classList.remove('on')
        }
    })

