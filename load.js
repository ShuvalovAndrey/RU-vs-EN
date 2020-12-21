function loadname() {
    if (sessionStorage.map >= 1) {
    let a = sessionStorage.getItem('map')
                    h2.innerHTML = textList[parseInt(a)];
                        h3.innerHTML = textArray[parseInt(a)];
                        spa1.innerHTML = textArray1[parseInt(a)];
                        spa11.innerHTML = textArray11[parseInt(a)];
                        spa2.innerHTML = textArray2[parseInt(a)];
                        spa12.innerHTML = textArray22[parseInt(a)];
                        spa3.innerHTML = textArray3[parseInt(a)];
                        spa13.innerHTML = textArray33[parseInt(a)];
}
};