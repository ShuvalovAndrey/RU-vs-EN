    let but = document.querySelector('button');

    let label = document.querySelectorAll('label');

    let lab1 = document.querySelector('.lab1');

    let lab2 = document.querySelector('.lab2');

    let lab3 = document.querySelector('.lab3');

    let radio = document.querySelectorAll('input');

    let radio1 = document.querySelector('#radio-1');

    let radio2 = document.querySelector('#radio-2');

    let radio3 = document.querySelector('#radio-3');

    let spa1 = document.querySelector('.spa1');

    let spa2 = document.querySelector('.spa2');

    let spa3 = document.querySelector('.spa3');

    let spa11 = document.querySelector('.spa11');

    let spa22 = document.querySelector('.spa22');

    let spa33 = document.querySelector('.spa33');

    let fall = document.querySelector('.fall');

    let h2 = document.getElementById("h2");

    let h3 = document.getElementById("h3");

    let waves = document.querySelector(".waves");

    let wave = document.querySelector(".wave");

    let progress = document.querySelector(".progress-bar");

    let progressStep = document.querySelector(".progress-step");

    let particles = Array.from(document.querySelectorAll(".particles"));

    console.log(particles)
    
    let textList = ['1', '2', '3', '4', '5', '6', '7', '8'];

    let textArray = [
        'Выберите предложение без ошибок',
        'Выберите пропущенный знак препинания Guns never say( ) "I am only kidding."',
        'Выберите предложение с ошибкой',
        'Какой набор знаков препинания верен для предложения: «I would trust Hagrid with my life said Dumbledore»?',
        'Какое утверждение верно для английской пунктуации?',
        'Какой знак препинания поставлен неверно? He told me(,) “just remember that all the people in this world haven’t had the advantages that you’ve had(.)”(.)',
        'Какой знак препинания отделяет прямую речь в английском языке?',
        'Верно ли предложение? Why did she shout to me: "Get out!"?'
    ];

    let textArray1 = [
        'Well, Jane Eyre, and are you a good child?',
        'Запятая',
        '"Stew the rabbits!", squealed Gollum in dismay.',
        'Запятая',
        'Если простые предложения в составе сложного не распространены, то запятая не нужна.',
        'Вторая точка (.)',
        'Запятая',
        'Да, восклицательный знак относится к цитате, а не к предложению вцелом.'
    ];

    let textArray11 = [
        'You’re god damn right! 👏<',
        'Верно! Теперь главное ничего не перепутать 🤓',
        'Метко! Зорко! 👏<',
        'You’re god damn right! 👏',
        'Еее, это верный ответ!',
        'Верно! 👏',
        'Да, всё верно! 🙌',
        'Верно! 👍'
    ]; 

    let textArray2 = [
        '“Whenever you feel like criticizing anyone”, he told me...',
        'Знак не нужен',
        '“Always,” said Snape.',
        '— — .',
        'В прямой речи не нужны кавычки.',
        'Запятая (,)',
        '—',
        'Нет, восклицательный знак должен быть вне кавычек.'
    ];

    let textArray22 = [
        'Запятая, отделяющая прямую речь, должны быть *внутри* кавычек.',
        'Нужно отделить прямую речь запятой.',
        'Неа, здесь всё верно 😜',
        'Увы, это верно для прямой речи русского языка.',
        'Неа, куда же мы без кавычек? 🥺',
        'Увы, знак указан верно ☝️',
        'Увы, неверный ответ ☝️',
        'Нет, увы 😔 Предложение верно.'
    ];

    let textArray3 = [
        '"Right here,” Tyler said. "Right now”.',
        'Двоеточие',
        '"The Eagles! The Eagles!" he shouted.',
        '" " : .',
        'Знаки препинания относящиеся к прямой речи ставятся вне кавычек.',
        'Первая точка (.)',
        ':',
        'Нет, вопросительный знак должен быть внутри кавычек.'
    ];

    let textArray33 = [
        'Точка должна быть внутри закрывающих прямую речь кавычек.',
        'В прямой речи на месте русского двоеточия в английском запятая.',
        'Неа, здесь всё верно 😜',
        'Увы, неверно для обоих языков.',
        'Нет, верно обратное.',
        'Увы, знак указан верно ☝️',
        'Увы, неверный ответ ☝️',
        'Нет, увы 😔 Предложение верно.'
    ];

    // if (sessionStorage.map == null) {
    //     sessionStorage.setItem('done', 0)
    // }
    

    if (sessionStorage.map == null) {
        sessionStorage.setItem('map', 0);
    };
    
    

    window.onload = function() {
        let a = sessionStorage.getItem('map');
        h2.innerHTML = textList[parseInt(a)];
        h3.innerHTML = textArray[parseInt(a)];
        spa1.innerHTML = textArray1[parseInt(a)];
        spa11.innerHTML = textArray11[parseInt(a)];
        spa2.innerHTML = textArray2[parseInt(a)];
        spa22.innerHTML = textArray22[parseInt(a)];
        spa3.innerHTML = textArray3[parseInt(a)];
        spa33.innerHTML = textArray33[parseInt(a)];
    };
    // let progBar = parseInt(sessionStorage.map) * progress.offsetWidth / 7.8688;
    // wave.style.left = -150 + progBar + "px"
     
    
    // window.addEventListener(`resize`, event => {
    //     let size = progress.offsetWidth / 7.8688;
    //     but.onclick = function () {
            
    //         wave.style.left = -150 + (progBar * size) + "px"
    //         waves.style.left = (progBar * size) + "px"
    //     }
    //     console.log(progBar)
    //     console.log(size)
    // },false);
    // console.log(progress.offsetWidth)
    // let size = progress.offsetWidth / 7.8688;
    
    // window.addEventListener('resize', () => {
    //     let sizeSave = progress.offsetWidth / 7.8688;
        
    // },false);

    // let progSave = sessionStorage.map * 61;

    // go();
    // window.addEventListener('resize', go);

    // function go(){
    //     waves.style.left = progress.clientWidth / 9.83 * sessionStorage.map + "px"
    //     console.log(progress.clientWidth / 9.83)
        // if (sessionStorage.map > 0) {
        //     waves.style.right = progress.clientWidth / 9.83 * sessionStorage.map + "px"
        // } else {
        //     waves.style.right = progress.clientWidth / 9.83 + "px";
        // }
        
    // }
    // console.log(progress.clientWidth / 9.83 * sessionStorage.map + "px")
    // console.log(progress.clientWidth / 9.83 + "px")
// waves.style.left = progress.clientWidth / 9.83 + "px";
        // console.log(progress.clientWidth / 9.83 * sessionStorage.map + "px")
    // document.querySelector('.height').innerText = document.documentElement.clientHeight;

    // console.log(size)
    // console.log(sizeSave)
    // setTimeout(go, 3000)
    // let sizeMap = parseInt(sessionStorage.map);
    // let sizeBar = progress.clientWidth / 9.83;

    go();
    window.addEventListener('resize', go);

    function go() {
        // wave.classListadd(hoverWave);
        waves.classList.add('hoverWaves');
        // setTimeout(() => wave.classListremuve(hoverWave), 2000);
        setTimeout(() => waves.classList.remove('hoverWaves'), 4000);
        // console.log(god)
        if (sessionStorage.map > 0) {
            waves.style.left = progress.clientWidth / 8 * (parseInt(sessionStorage.map) + 1) + "px";
            setTimeout(() => wave.style.left = progress.clientWidth / 8 * (parseInt(sessionStorage.map) + 1) + "px", 100);
            // wave.style.left = progress.clientWidth / 8 * (parseInt(sessionStorage.map) + 1) + "px";
            // setTimeout(() => wave.classList.add('hoverWave'), 1100);
            wave.classList.add('hoverWave');
            setTimeout(() => wave.classList.remove('hoverWave'), 4100);
            particles.forEach(function(item) {
                item.style.left = progress.clientWidth / 8.7 * (parseInt(sessionStorage.map) + 1) + "px";
            });
            // particles.style.left = progress.clientWidth / 8.7 * (parseInt(sessionStorage.map) + 1) + "px";
            progressStep.style.width = 8 * (parseInt(sessionStorage.map) + 1) + "%";
            progressStep.style.opacity = 1
        } else {
            waves.style.left = progress.clientWidth / 9.83 + "px";
            setTimeout(() => wave.style.left = progress.clientWidth / 9.83 + "px", 3000);
            particles.forEach(function(item) {
                item.style.left = progress.clientWidth / 12 + "px";
            });
            // particles.style.left = progress.clientWidth / 12 + "px";
            // wave.style.left = progress.clientWidth / 9.83 + "px";
        }
        // waves.style.left = progress.clientWidth / 9.83 + "px";
        // wave.style.left = progress.clientWidth / 9.83 + "px";
        
    }

    //   console.log(parseInt(sessionStorage.map) + 1)
    // let progBar = parseInt(sessionStorage.map) * 75;

    // let progBar = 75;
    

    // if (sessionStorage.map != null) {
    //     wave.style.left = -150 + progSave + "px"
    //     waves.style.left = progSave + "px"
    // }
        




    // }
    // let barwidth = function() {
    //     return progress.offsetWidth
    // }
    // console.log(isHidden())

    // const mediaQuery = window.matchMedia('(min-width: 1px) and (max-width: 44000px), (min-device-width: 1px) and (max-device-width: 44000px)');
    
    // function handleMobileChange(e) {

    //     if (e.matches) {
    //         progress.offsetWidth
            
    //     };
    // };
    // console.log(isHidden())
    // mediaQuery.addListener(handleMobileChange)

    // handleMobileChange(mediaQuery)





    // Доработать с CSS
    // if (sessionStorage.check != null) {
    //     but.style.visibility = "visible";
    //         but.removeAttribute("disabled", true);
    // if (sessionStorage.check == 1) {
    //     radio1.checked = true;
    //     radio2.disabled = true;
    //     radio3.disabled = true;
    //     lab2.classList.remove('p');
    //     lab3.classList.remove('p');
    // } else if (sessionStorage.check == 2) {
    //     radio2.checked = true;
    //     radio1.disabled = true;
    //     radio3.disabled = true;
    //     lab1.classList.remove('p');
    //     lab3.classList.remove('p');
    // } else if (sessionStorage.check == 3) {
    //     radio3.checked = true;
    //     radio1.disabled = true;
    //     radio2.disabled = true;
    //     lab1.classList.remove('p');
    //     lab2.classList.remove('p');
    // };
    // }







    // window.onload = function() {
    //     if (sessionStorage.map >= 1 && sessionStorage.map < 8) {
    //         let a = sessionStorage.getItem('map');
    //         h2.innerHTML = textList[parseInt(a)];
    //         h3.innerHTML = textArray[parseInt(a)];
    //         spa1.innerHTML = textArray1[parseInt(a)];
    //         spa11.innerHTML = textArray11[parseInt(a)];
    //         spa2.innerHTML = textArray2[parseInt(a)];
    //         spa12.innerHTML = textArray22[parseInt(a)];
    //         spa3.innerHTML = textArray3[parseInt(a)];
    //         spa13.innerHTML = textArray33[parseInt(a)];
    //     };
    // };

    

    // let s = sessionStorage.getItem('done');

    for (let i = 0; i < radio.length; i++) {
        radio[i].onchange = function () {
            if (sessionStorage.map == 0) {
                sessionStorage.setItem('done', 0)
            };

            but.style.visibility = "visible";
            but.removeAttribute("disabled", true);

            if (radio1.checked) {
                lab2.classList.add('l1');
                spa2.classList.add('span1');
                spa3.classList.add('span1');
                lab3.classList.add('l1');
                sessionStorage.setItem('check', 1)
            } else if (radio2.checked) {
                spa2.classList.add('span1-1');
                spa22.classList.add('span2');
                lab2.classList.add('l2');
                spa1.classList.add('l3');
                lab1.classList.add('l4');
                lab3.classList.add('l1');
                spa3.classList.add('span1');
                sessionStorage.setItem('check', 2)
            } else if (radio3.checked) {
                spa3.classList.add('span1-1');
                spa33.classList.add('span2');
                lab3.classList.add('l2');
                spa1.classList.add('l3');
                lab1.classList.add('l4');
                lab2.classList.add('l1');
                spa2.classList.add('span1');
                sessionStorage.setItem('check', 3)
            };
            
            if (radio[i].checked) {
                for (let j = 0; j < radio.length; j++) {
                    if (radio[j].checked === false) {
                        radio[j].setAttribute("disabled", true);
                    };
                };
            };
        };
    };

    for (let g = 0; g < label.length; g++) {
        label[g].onclick = function () {
            for (let d = 0; d <label.length; d++) {
                label[d].classList.remove('p');
            };
        };
    };

    but.onclick = function () {
        event.preventDefault();
        sessionStorage.removeItem('check');
        if (radio1.checked) {
            sessionStorage.done++
        };
        
        
        

        

        but.style.visibility = "hidden";
        
        for (let h = 0; h < radio.length; h++) {
            // radio[h].removeAttribute("checked"); 
            // radio[h].removeAttribute("disabled");
            
            radio[h].checked = false;
            radio[h].disabled = false;
            label[h].classList.add('p');

        };

        

        lab1.classList.remove('l4');
        lab2.classList.remove('l1');
        lab2.classList.remove('l2');
        lab3.classList.remove('l1');
        lab3.classList.remove('l2');
        spa1.classList.remove('l3');
        spa2.classList.remove('span1');
        spa2.classList.remove('span1-1');
        spa3.classList.remove('span1');
        spa3.classList.remove('span1-1');
        spa22.classList.remove('span2');
        spa33.classList.remove('span2');

        

        if (sessionStorage.map >= 0 && sessionStorage.map < 7) {
            sessionStorage.map++;
            
        } else if (sessionStorage.map == 7) {
            setTimeout(() => sessionStorage.setItem('map', 0), 0);
            sessionStorage.removeItem('test');
            sessionStorage.removeItem('but');
            // sessionStorage.setItem('done', 0)
            // window.location.href = "/done.html"
            window.location.replace("https://shuvalovandrey.github.io/RU-vs-EN/done.html");
        // } else {
        //     sessionStorage.setItem('map', 0);
        };

        go();

        // let progBar = parseInt(sessionStorage.map) * 61;
        
        // wave.style.left = -150 + progBar + "px"
        // waves.style.left = progBar + "px"
        
        // let Bar = parseInt(sessionStorage.map) * 10;

        let a = sessionStorage.getItem('map');
        h2.innerHTML = textList[parseInt(a)];
        h3.innerHTML = textArray[parseInt(a)];
        spa1.innerHTML = textArray1[parseInt(a)];
        spa11.innerHTML = textArray11[parseInt(a)];
        spa2.innerHTML = textArray2[parseInt(a)];
        spa22.innerHTML = textArray22[parseInt(a)];
        spa3.innerHTML = textArray3[parseInt(a)];
        spa33.innerHTML = textArray33[parseInt(a)];

        // if (sessionStorage.map == 8) {
        //     document.getElementById("goBut").href = "/done.html"
            
        // }

        for (let m = fall.children.length; m >= 0; m--) {
            fall.appendChild(fall.children[Math.random() * m | 0]);
        };

        

        
    };

    




    /*let current = +h2.getAttribute('data-current');
            current++;

            sessionStorage.setItem('map', current)
            
            g = sessionStorage.getItem('map');
            
            console.log(g)

            
            if (current < 8) {
                h2.setAttribute('data-current', current);
                h2.innerHTML = textList[curren];
                h3.innerHTML = textArray[current];
                spa1.innerHTML = textArray1[current];
                spa11.innerHTML = textArray11[current];
                spa2.innerHTML = textArray2[current];
                spa12.innerHTML = textArray22[current];
                spa3.innerHTML = textArray3[current];
                spa13.innerHTML = textArray33[current];
            };

    if (radio[h].checked === true) {
                radio[h].removeAttribute("checked")
            }
    function shuffle(elems) {
        allElems = (function(){
        var ret = [], l = elems.length;
        while (l--) { ret[ret.length] = elems[l]; }
        return ret;
        })();
        let shuffled = (function(){
            var l = allElems.length, ret = [];
            while (l--) {
                let random = Math.floor(Math.random() * allElems.length),
                    randEl = allElems[random].cloneNode(true);
                allElems.splice(random, 1);
                ret[ret.length] = randEl;
            }
            return ret; 
        })(), l = elems.length;
        while (l--) {
            elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
            elems[l].parentNode.removeChild(elems[l]);
        }
    };

    button.addEventListener('click', function() { shuffle( document.querySelectorAll('fieldset > div') ) }, false);

    button.onclick = function () {
        button.style.display = "";
        window.setTimeout(shuffle, 2000);
        for (let h = 0; h < radio.length; h++) {
            if (radio[h].checked === true) {
                radio.removeAttribute("checked", false)
                console.log('srgsrg')
            }
        }
    };




    


    if (radio1.checked) {
            label[1].classList.add('l1')
            s1[1].classList.add('span1')
            s1[2].classList.add('span1')
            label[2].classList.add('l1')
        } else if (radio2.checked) {
            s1[1].classList.add('span1-1')
            s2[1].classList.add('span2')
            label[1].classList.add('l2')
            s1[0].classList.add('l3')
            label[0].classList.add('l4')
            label[2].classList.add('l1')
            s1[2].classList.add('span1')
        } else if (radio3.checked) {
            s1[2].classList.add('span1-1')
            s2[2].classList.add('span2')
            label[2].classList.add('l2')
            s1[0].classList.add('l3')
            label[0].classList.add('l4')
            label[1].classList.add('l1')
            s1[1].classList.add('span1')
        }; 




    let s1mas = Array.prototype.slice.call(s2);

    [s1mas[0], s1mas[2] = s1mas[2], s1mas[0]];
    console.log(s1mas)



    for (let g = 0; g < label.length; g++) {
        label[g].onclick = function () {
            for (let d = 0; d <label.length; d++) {
                label[d].classList.remove('p')
            }
        }
    }
        }



        window.onload = function() {
    if (sessionStorage.map >= '0') {
        sessionStorage.map++
    } else {
        sessionStorage.setItem('map', '0')
    }
    
}
        */
