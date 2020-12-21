let h1 = document.querySelector('h1');

let btn = document.querySelector('.btn-1');

h1.innerHTML = sessionStorage.getItem('done');

btn.onclick = function () {
    window.location.replace("/pop.html");
    sessionStorage.clear();
    
};



// if (location.assign) {
//     sessionStorage.setItem('done', 0);
// }

// window.addEventListener("beforeunload",function(e){
//     sessionStorage.setItem('done', 0);
// },false);

    // window.onpopstate = function(event) {
    //     sessionStorage.setItem('done', 0)
    // };

    // document.addEventListener("popstate",function(e){
    //     console.log('yeees!');
    // },true);

    // window.onhashchange = function() {
    //     sessionStorage.setItem('done', 0);
    //    };