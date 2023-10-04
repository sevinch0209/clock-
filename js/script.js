 let h = document.querySelector('.h'),
     m = document.querySelector('.m'),
     s = document.querySelector('.s'),
     hours = document.querySelector('.hours'),
     minutes = document.querySelector('.minutes');

    function clock() {
        let min = new Date().getMinutes()
        let hour = new Date().getHours()
        let sec = new Date().getSeconds()
        h.style.transform = `rotate(${hour *30}deg)`
        m.style.transform = `rotate(${min *6}deg)`
        s.style.transform = `rotate(${sec *6}deg)`
        hours.innerHTML = hour < 10 ? '0' + hour : hour
        minutes.innerHTML = min < 10 ? '0' + min : min
        
        


        setTimeout(()=> clock(), 1000)
    }

    clock()
    let tabsItem = document.querySelectorAll('.tabsItem')
    let tabsContentItem = document.querySelectorAll('.tabsContentItem')
    tabsItem.forEach((el,index)=>{
    el.addEventListener('click', function(e) {
        tabsItem.forEach((elem,i)=>{
            elem.classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        })
        this.classList.add('active')
        tabsContentItem[index].classList.add('active')
    })

})
const btn = document.querySelector('.stopwatch__btn'),
         span  = document.querySelector('.tabsLink__span'),
  stopwatch__hours =  document.querySelector('.stopwatch__hours'),
  stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
  stopwatch__seconds = document.querySelector('.stopwatch__seconds');
  btn.addEventListener('click',function(){
    if (btn.innerHTML == 'start'){
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0
        setTimeout(() =>{
            stopwatch(this, i)
        }, 1000);
    }else if(btn.innerHTML == 'stop'){
        btn.innerHTML = 'clear'
        span.classList.replace('active', 'active_clear')
    }else{
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
    }
  })
 function stopwatch(btn,i) {
    if (btn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            stopwatch__seconds.innerHTML = i
        }else{
            i++
            stopwatch__minutes.innerHTML = i
        }
        setTimeout(() => {
            stopwatch(btn,i)
        }, 1000);
    }
    
 }