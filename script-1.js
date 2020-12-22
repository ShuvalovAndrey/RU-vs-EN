    let click1 = document.querySelectorAll('.click-1');

    let click2 = document.querySelectorAll('.click-2');

    let butdiv = document.querySelector('.button-up');

    let but1 = document.querySelector('.btn-2');

    let but2 = document.querySelector('.btn-3');

    let but3 = document.querySelector('.btn-4');

    let arr1 = document.querySelector('.arrow-1');

    let arr2 = document.querySelector('.arrow-2');

    let pag = document.querySelectorAll('pag');

    let h2 = document.getElementById("h2");

    let h3 = document.getElementById("h3");

    let dt1 = document.getElementById("dt-1");

    let dd1 = document.getElementById("dd-1");

    let dt2 = document.getElementById("dt-2"); 

    let dd2 = document.getElementById("dd-2");

    let pagi = document.querySelectorAll('.pag');

    let pop = document.querySelectorAll('.popup');

    let textList = ['1', '2', '3', '4', '5'];

    let textArray = [
        'Запятая в сложносочинённых предложениях',
        'Запятая и обстоятельство',
        'Прямая речь',
        'Кавычки и знаки препинания',
        'Вопросительный знак'
    ];

    let textArray1 = [
        'Простые предложения в составе сложного не отделяются запятой.',
        'Обстоятельство в начале предложения выделяется запятой.',
        'В прямой речи вместо русского двоеточия используется запятая.',
        '“,” и “.” ставятся внутри кавычек, остальные знаки препинания вне.',
        '“?” не используется в предложениях с формой просьбы.'
    ];

    let textArray11 = [
        'I write and he reads.',
        'Slowly, he started to walk away.',
        'She said, "I love you."',
        'James said, "I have already done it."',
        'Would you please call my brother and ask him to catch the laptop for me.'
    ]; 

    let textArray2 = [
        '“,” ставится вне зависимости от длины предложения.',
        'Обстоятельство не выделяется, и можно свободно менять порядок слов.',
        'Прямая речь отделяется двоеточием.',
        'Знаки препинания, не относящиеся к прямой речи, ставятся вне кавычек.',
        '“?” используется в предложениях с вопросительной интонацией.'
    ];

    let textArray22 = [
        'Я пишу, а он читает.',
        'Медленно он начал уходить.',
        'Она сказала: «я люблю тебя».',
        'Джеймс сказал: «Я уже сделал это».',
        'Не мог бы ты позвонить моему брату, и попросить его взять ноутбук?'
    ];
    
    but3.style.visibility = sessionStorage.getItem('but');

    for (let i = 0; i < click2.length; i++) {
        click2[i].onclick = function () {
            let  k = sessionStorage.getItem('test');
            let current = +h2.getAttribute('data-current');
                current++;

            if (current > 0) {
                but1.classList.add("but1");
                arr1.style.visibility = "visible";
                
            };

            if (current === 4) {
                document.getElementById("btn").innerHTML = "К ТЕСТУ";
                but2.classList.add("but2");
                document.getElementById("btn").classList.add("no-pseudo");
            };

            if (current === 4 && sessionStorage.getItem('test') != null) {
                document.getElementById("btn").innerHTML = k;
                but2.classList.add("but2");
            };

            if (current <= 4) {
                h2.setAttribute('data-current', current);
                h2.innerHTML = textList[current];
                h3.innerHTML = textArray[current];
                dt1.innerHTML = textArray1[current];
                dt2.innerHTML = textArray2[current];
                dd1.innerHTML = textArray11[current];
                dd2.innerHTML = textArray22[current];
            };
            
            for (let j = 0; j < pagi.length; j++) {
                if (pagi[j] === pagi[current]) {
                    pagi[current].style.background = "#FFFFFF";
                } else if (pagi[j] != pagi[current] && current <= 4) {
                    pagi[j].style.background = "";
                };
            };

            for (let k = 0; k <= 4; k++) {
                if (current === 1) {
                    pop[2].style.opacity = "0.5";
                    pop[0].style.opacity = "1";
                } else if (current === 2) {
                    pop[1].style.opacity = "1";
                    pop[0].style.opacity = "0.5";
                    pop[2].style.opacity = "0.3";
                } else if (current === 3) {
                    pop[2].style.opacity = "0.5";
                    pop[0].style.opacity = "1";
                    pop[1].style.opacity = "0.3";
                } else if (current === 4) {
                    pop[2].style.opacity = "1";
                    pop[0].style.opacity = "0.5";
                    pop[1].style.opacity = "0.3";
                };
            };

            if (current === 5) {
                if (sessionStorage.test == null) {
                    sessionStorage.removeItem('done');
                }
                // document.location.href = "http://127.0.0.1:5500/pop.html";
                // sessionStorage.setItem('pop', 'http://127.0.0.1:5500/pop.html');
                
                sessionStorage.setItem('test', 'ОБРАТНО К ТЕСТУ');
                sessionStorage.setItem('but', 'visible');
                // click2[i].href = "/test.html"
                // setTimeout(() => window.location.href = "/pop.html", 0);
                
                // window.location.href = "/test.html";
                // but2.href = "/test.html";
                window.location.href = "https://shuvalovandrey.github.io/RU-vs-EN/test.html";
                
            };
        };
    };

    for (let i = 0; i < click1.length; i++) {
        click1[i].onclick = function () {
            let current = +h2.getAttribute('data-current');
                current--;

            if (current < 4 && click2[1].href === "javascript:void(0);") {
                document.getElementById("btn").innerHTML = "ДАЛЬШЕ";
                but2.classList.remove("but2");
                document.getElementById("btn").classList.remove("no-pseudo");
            };

            if (current === 0) {
                but1.classList.remove("but1");
                arr1.style.visibility = "";
            };

            if (current < 0) {
                current = textList.length - 1;
                current = textArray.length - 1;            
                current = textArray1.length - 1;
                current = textArray2.length - 1;
                current = textArray11.length - 1;
                current = textArray22.length - 1;
            };

            h2.setAttribute('data-current', current);
            h2.innerHTML = textList[current];
            h3.innerHTML = textArray[current];
            dt1.innerHTML = textArray1[current];
            dt2.innerHTML = textArray2[current];
            dd1.innerHTML = textArray11[current];
            dd2.innerHTML = textArray22[current];

            for (let j = 0; j < pagi.length; j++) {
                if (pagi[j] === pagi[current]) {
                    pagi[current].style.background = "#FFFFFF";
                } else if (pagi[j] != pagi[current]) {
                    pagi[j].style.background = "";
                };
            };

            for (let k = 0; k <= 4; k++) {
                if (current < 1) {
                    pop[2].style.opacity = "1";
                    pop[0].style.opacity = "0";
                    pop[1].style.opacity = "0";
                } else if (current === 1) {
                    pop[2].style.opacity = "0.5";
                    pop[0].style.opacity = "1";
                    pop[1].style.opacity = "0";
                } else if (current === 2) {
                    pop[1].style.opacity = "1";
                    pop[0].style.opacity = "0.5";
                    pop[2].style.opacity = "0.3";
                } else if (current === 3) {
                    pop[2].style.opacity = "0.5";
                    pop[0].style.opacity = "1";
                    pop[1].style.opacity = "0.3";
                } else if (current === 4) {
                    pop[2].style.opacity = "1";
                    pop[0].style.opacity = "0.5";
                    pop[1].style.opacity = "0.3";
                };
            };
        };
    };


    const mediaQuery = window.matchMedia('(max-width: 599px), (max-device-width: 599px) and (max-device-height: 1024px), (max-device-height: 599px) and (max-device-width: 1024px)');
    
    function handleMobileChange(e) {

        if (e.matches) {
            butdiv.style.display = "none";
            but2.style.padding = "15px 0px";
            but2.style.borderRadius = "24px";
            but1.style.visibility = "hidden";
        } else {
            butdiv.style.display = "";
            but2.style.padding = "";
            but2.style.borderRadius = "";
            but1.style.visibility = "";
            click2[1].setAttribute('href', "javascript:void(0);")
        };
    };

    mediaQuery.addListener(handleMobileChange)

    handleMobileChange(mediaQuery)

    
