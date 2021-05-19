export default class Slider {
    constructor(page, btns){
        this.page = document.querySelector(page);    //this -обр. к экз. нового созданного объекта
        this.slides = this.page.children;            //получаем всех детей стр
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;                        //нумерация слайда, по умолчанию показывается первый
    }

    showSlides(n) {                                 //n = тек. нумерация слайда
        if(n > this.slides.length){                 //если тек. индекс больше  кол-во слайдов, 
            this.slideIndex = 1;                    //то возврат к 1-му слайду
        }
        if(n < 1){                                    
            this.slideIndex = this.slides.length;    //если меньше 1, то показ посл.слайд
        }

        try{
         
          this.hanson.style.opacity ='0';                   //скрываем блок (становится прозрачным    

          if(n ===3){                                       //если на стр.3, то через 3 сек. появляется блок
                this.hanson.classList.add('animatad');  
                setTimeout(() => {
                    this.hanson.style.opacity  ='1';
                    this.hanson.classList.add('slideInUp');                  
                }, 3000);
            }else{
                this.hanson.classList.remove('slideInUp');
             }
        }catch(e){}
        


        this.slides.forEach(slide => {
            slide.classList.add('animated');         //для плавного скрытия
            slide.style.display = 'none';
        });
        
        this.slides[this.slideIndex - 1].style.display = 'block';  //-1, т.к. в js 0=1, т.е показываем тек. слайд
        
    }

    
    plusSlides (n){                                 //переключение слайдов,  n - будем передавать 1 или -1(вперед или назад)
        this.showSlides(this.slideIndex += n);
    }


    render(){                                     //главный метод, ктр будет выполнять главное действие на стр

        try{
          this.hanson = document.querySelector('.hanson');  //получаем доступ к блоку, ктр необходимо будет вызвать 
        }catch(e){}
    
        this.btns.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                this.plusSlides(1);
                this.slides[this.slideIndex - 1].classList.add('slideInLeft');
            });

            //при клике на логотип - идет переход к первому слайду:
            btn.parentNode.previousElementSibling.addEventListener('click', (e) =>{   //при клике на родителя предыдущего эл.
                e.preventDefault();     //отменяем действие ссылки

                this.slideIndex = 1;  
                this.showSlides(this.slideIndex); //показ текущего слайда
            });
        });

        this.showSlides(this.slideIndex); //показ текущего слайда

     

        
    }


}
