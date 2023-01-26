let button = document.getElementById('finish');

button.addEventListener('click', checkTest);

function checkTest()  {
    let reesult = 0;
    
    let a1 = document.getElementById('q1').value;
    if (a1 === '4')  {
        reesult++;
    }
    
    let a2 = document.getElementById('q2').value;
    if (a2 === '6')  {
        reesult++;
    }
    
    let a3 = document.getElementById('q3').value;
    if (a3 === '4')  {
        reesult++;
    }
    
    let a4 = document.getElementById('q4').value;
    if (a4 === '11')  {
        reesult++;
    }
    
    let a5 = document.getElementById('q5').value;
    if (a5 === '36')  {
        reesult++;
    }

    alert('Количество правильных ответов' + reesult);
}