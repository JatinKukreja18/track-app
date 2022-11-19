window.addEventListener("DOMContentLoaded",function(){
    const list = document.querySelector('.ta-status-step-list');
    if(window.innerWidth > 767){        
        document.querySelector('.ta-timeline-track').style.width = 0;
    }else{
        document.querySelector('.ta-timeline-track').style.height = 0;
    }

    console.log(list);
    // for (let i = 0; i < list.childElementCount; i++){
    var i=0;
    const staggerInterval = setInterval(() => {
        if(i === list.childElementCount){
            clearInterval(staggerInterval)
            fadeinTimeline()
        }
        list.children[i].classList.add('fadedin')
        i++
    }, 400);
    
})

function fadeinTimeline(){
    // display timeline
    // document.querySelector('.ta-timeline').classList.add('fadein');
    
    // display track
    const totalSteps = document.querySelectorAll('.completed .ta-status-icons');
    const transitionTotalSeconds = totalSteps.length;
    if(window.innerWidth >767){
        document.querySelector('.ta-timeline-track').style.transition = "width " + transitionTotalSeconds + "s" +" linear 0s"
    }else{
        document.querySelector('.ta-timeline-track').style.transition = "height " + transitionTotalSeconds + "s" +" linear 0s"
    }

        document.querySelector('.ta-timeline-track').style.removeProperty('width');
        document.querySelector('.ta-timeline-track').style.removeProperty('height');
    let i=0;
    if(i==0){
        totalSteps[i].classList.add('jump')
        console.log(totalSteps[i]);
        i++
    }

    let timeoutValue = 0;
    const tillStep5 = document.querySelector('.ta-timeline').classList.contains('to-step-5');
    const tillStep4 = document.querySelector('.ta-timeline').classList.contains('to-step-4');
    const tillStep3 = document.querySelector('.ta-timeline').classList.contains('to-step-3');
    const tillStep2 = document.querySelector('.ta-timeline').classList.contains('to-step-2');
    if(document.querySelector('.ta-timeline').classList.contains('has-5-steps')){
        if(tillStep5 && totalSteps.length === 5){
            timeoutValue = 1300;
        }
        else{
            timeoutValue = 1000;
        }
    }else{
        if(tillStep4 && totalSteps.length === 4){
            timeoutValue = 1300;
        }
        else{
            timeoutValue = 1000;
        }
    }
    const iconInterval = setInterval(() => {
        if(i === totalSteps.length){
            clearInterval(iconInterval)
        }
        totalSteps[i].classList.add('jump');
        i++
    }, timeoutValue);
    console.log(timeoutValue);
    // ((totalSteps.length-1)/transitionTotalSeconds*1000)
}