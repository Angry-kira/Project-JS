function btnfun() {
    const menu = document.getElementById('bob');
    menu.classList.toggle('show');
}

// 1.
document.getElementById('finalForm').addEventListener('submit', function () {


    let name = document.querySelectorAll('input[type="text"]')[0].value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;


    localStorage.setItem('my_name', name);
    localStorage.setItem('my_email', email);
    localStorage.setItem('my_message', message);


    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));


    document.cookie = "user_data=" + name + "; " + expires + "; path=/";

    alert('Данные сохранены!');
});


window.onload = function () {
    let savedName = localStorage.getItem('my_name');
    let savedEmail = localStorage.getItem('my_email');

    if (savedName) {
        document.querySelectorAll('input[type="text"]')[0].value = savedName;
    }
    if (savedEmail) {
        document.querySelector('input[type="email"]').value = savedEmail;
    }
};


// 

function done() {

    const section = document.querySelector('.final-section');
    section.style.background = "#d4edda";


    const btn = document.querySelector('.final-submit-btn');
    btn.innerHTML = "Готово!";


    btn.style.background = "#28a745";
}
// 


window.onscroll = function() {
    const btn = document.getElementById("toTop");
    
   
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function goUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

// 
const Artur = document.getElementById('cursor-blur');


document.addEventListener('mousemove', function(X) {
    Artur.style.display = 'block';
    
    
    let x = X.clientX;
    let y = X.clientY;

   
    Artur.style.left = x + 'px';
    Artur.style.top = y + 'px';
});