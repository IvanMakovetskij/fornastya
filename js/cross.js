butt1.onclick = function() {
    var val = document.getElementById('elem1').value;
    if (val.toUpperCase() =='ФІЛЬМИ') {
        document.getElementById('answer1').style.visibility = 'visible'
        document.getElementById('answer1').textContent = 'Правильно'
    } else {
        document.getElementById('answer1').style.visibility = 'visible'
        document.getElementById('answer1').textContent = 'Неправильно'
    }
};
butt2.onclick = function() {
    var val = document.getElementById('elem2').value;
    if (val.toUpperCase() =='ВАНЬОК') {
        document.getElementById('answer2').style.visibility = 'visible'
        document.getElementById('answer2').textContent = 'Правильно'
    } else {
        document.getElementById('answer2').style.visibility = 'visible'
        document.getElementById('answer2').textContent = 'Неправильно'
    }
};
butt3.onclick = function() {
    var val = document.getElementById('elem3').value;
    if (val.toUpperCase() =='УРОКИ') {
        document.getElementById('answer3').style.visibility = 'visible'
        document.getElementById('answer3').textContent = 'Правильно'
    } else {
        document.getElementById('answer3').style.visibility = 'visible'
        document.getElementById('answer3').textContent = 'Неправильно'
    }
};
butt4.onclick = function() {
    var val = document.getElementById('elem4').value;
    if (val.toUpperCase() =='ШКОЛА') {
        document.getElementById('answer4').style.visibility = 'visible'
        document.getElementById('answer4').textContent = 'Правильно'
    } else {
        document.getElementById('answer4').style.visibility = 'visible'
        document.getElementById('answer4').textContent = 'Неправильно'
    }
};
butt5.onclick = function() {
    var val = document.getElementById('elem5').value;
    if (val.toUpperCase() =='АНДРІЙ') {
        document.getElementById('answer5').style.visibility = 'visible'
        document.getElementById('answer5').textContent = 'Правильно'
    } else {
        document.getElementById('answer5').style.visibility = 'visible'
        document.getElementById('answer5').textContent = 'Неправильно'
    }
};
butt6.onclick = function() {
    var val = document.getElementById('elem6').value;
    var elem5 =document.getElementById('elem5').value;
    var elem4 =document.getElementById('elem4').value;
    var elem3 =document.getElementById('elem3').value;
    var elem2 =document.getElementById('elem2').value;
    var elem1 =document.getElementById('elem1').value;
    if (val.toUpperCase() =='КІНО') {
        document.getElementById('answer6').style.visibility = 'visible'
        document.getElementById('answer6').textContent = 'Правильно'
        if (elem5.toUpperCase() =='АНДРІЙ') {
            if (elem4.toUpperCase() =='ШКОЛА') {
                if (elem3.toUpperCase() =='УРОКИ') {
                    if (elem2.toUpperCase() =='ВАНЬОК') {
                        if (elem1.toUpperCase() =='ФІЛЬМИ') {
                            document.getElementById('end').style.visibility = 'visible'
                        } else {
                        }
                    } else {
                    }
                } else {
                }
            } else {
            }
        } else {
        }
    } else {
        document.getElementById('answer6').style.visibility = 'visible'
        document.getElementById('answer6').textContent = 'Неправильно'
    }
};
