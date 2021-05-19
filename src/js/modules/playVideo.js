export default class VideoPlayer{
    constructor(triggers, modal){
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(modal);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers(){
        this.btns.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                if(document.querySelector('iframe#frame')){             //если плеер уже создан (если не прописать это усл., то плеер будет созд. каждый раз при наж.btn)
                    this.overlay.style.display = 'flex';                //то показываем мод окно с ним     
                }else{                                                  //если нет, то создаем     
                    const path = btn.getAttribute('data-url');         //data-url указана ссылка на видео
                    this.createPlayer(path);                           //при нажатии на кнопку создается плеер с ссылкой на видео  
                }

            });
        });
    }

    bindCloseBtn(){
        this.close.addEventListener('click', () =>{
            this.overlay.style.display = 'none';  
            this.player.stopVideo();                        //в плеере завершаем видео
        });
    }

    createPlayer(url){
        this.player = new YT.Player('frame', {         //блок скопирован из YouTube Player API, но внесены изменения
            height: '100%',
            width: '100%',
            videoId: `${url}`                       //будет динамически подк. из аргумента этого метода
        });

        console.log(this.player);
        this.overlay.style.display = 'flex';            //показываем мод окно
        
    }

    init(){                                                                 //самый главный метод, где отражаются остальные    
        const tag = document.createElement('script');                       //этот блок кода скопирован из YouTube Player API 
        tag.src = "https://www.youtube.com/iframe_api";                     //создается эл. и помещается на стр перед гл. родителем script 
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}