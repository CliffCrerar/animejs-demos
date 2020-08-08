

const el = document.getElementById('block');
const dirBtn = document.getElementById('changeDirection');
const demoHeading = document.querySelector('#demoHeading');

const hdg = anime({
    targets: '#demoHeading',
    autoplay: false,
    opacity: {
        value: 1,
        duration: 10000,
        delay: 5000
    },
});

function toggleButton(btn, state = null) {
    state = state == null ? btn.disabled : state;
    if (state) {
        btn.disabled = false;
        btn.setAttribute('style', 'pointer-events:auto; color:rgb(85, 85, 85);');
    } else {
        btn.disabled = true
        btn.setAttribute('style', 'pointer-events:none; color: #A5A5A5');
    }
}

toggleButton(dirBtn);

const oneStyle = {
    height: '200px',
    width: '200px',
    translateX: '0%',
    'border-radius': '0%',
    background: 'rgb(100,100,100)',
}

applyStyle(oneStyle, el)

const one = anime({
    targets: oneStyle,
    translateX: '50vw',
    background: 'rgb(0,200,200)',
    duration: 5000,
    'border-radius': '50%',
    autoplay: false,
    easing: 'linear',
    update: (someValue) => {
        // console.log('someValue: ', someValue);
        applyStyle(oneStyle, el);
    }
})

initDisabled = true;
function animationOne() {
    console.log('one.reversed: ', one.reversed);
    initDisabled && toggleButton(dirBtn);
    initDisabled = false
    one.play()
}

dirBtn.value = 'Forward';
function animationOneRev() {
    if (one.reversed) {
        dirBtn.value = 'Forward';
        dirBtn.style.background = '#ffffff';
    } else {
        dirBtn.value = 'Reverse';
        dirBtn.style.background = '#F0F0FE';
    }
    one.reverse()
    one.play()
}


function applyStyle(object, el) {
    const styleString = Object.keys(object).map(key => transformVal(key, object)).join('; ');
    el.setAttribute('style', styleString);
    function transformVal(key, obj) {
        switch (key) {
            case 'translateX': return `transform: ${key}(${obj[key]})`;
            default: return `${key}:${obj[key]}`;
        }
    }
}

const bounce = anime({
    targets: '.ball-two',
    top: 0,
    duration: 1000,
    loop: true,
    easing: 'easeOutQuart',
    direction: 'alternate',
    rotate: '180deg',
    borderRadius: '7px',
    background: '#0000BB'
});

const bounceOne = anime({
    targets: '.ball-one',
    top: 0,
    duration: 500,
    loop: true,
    easing: 'easeOutQuart',
    direction: 'alternate',
    background: '#0000BB'
});

const bounceThree = anime({
    targets: '.ball-zero',
    top: 0,
    duration: 300,
    loop: true,
    easing: 'easeOutQuart',
    direction: 'alternate',
})

const flexObj = { left: '0%', right: '100%' }

const movingBar = document.getElementById('moving-bar')
const move = anime({
    targets: flexObj,
    autoplay: false,
    left: '100%',
    right: '0%',
    duration: 10000,
    easing: 'linear',
    update: () => {
        movingBar.setAttribute('style', `left:${flexObj.left};right:${flexObj.right}`)
    }
})
const reverse = false;
document.addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowRight') {
        if(move.reversed){
                    move.reverse();}
            // move.play();
        // } else {
            move.play();
        // }
    } else if (ev.key === 'ArrowLeft') {
        if (!move.reversed) { 
            move.reverse();}
            // move.play();
        // } else { 
            move.play();
        //  };
    }

})
document.addEventListener('keyup', function (ev) {
    if (ev.key = 'ArrowRight') {
        move.pause()
    } else if (ev.keu === 'ArrowLeft') {
        move.pause()
    }
})
