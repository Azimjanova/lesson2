

// ТЕМА : DOM 

// const btn = document.querySelector('button')
// const link = document.querySelector('link')

// let isDark = false 

// btn.addEventListener('click', () => {
//     isDark = !isDark
//     link.href = isDark ? './dark.css':'./light.css'
//     btn.innerText = isDark ? 'light theme' : 'dark theme'
// })

// TEST APP (Project)

const questions = [
    {
        quizText: 'JS те канча типы данных бар?',
        imgUrl: 'https://www.bcd.com.kg/img_pdd/none.jpg',
        correctOption: '8',
        options: ['6', '8', '7', '5']
    },
    {
        quizText: 'Ответ задачи?',
        imgUrl: 'https://pbs.twimg.com/media/EUXzAv1UwAQrKGA.jpg',
        correctOption: '11',
        options: ['11', '2', 'NaN']
    },
    {
        quizText: 'Канча функция бар?',
        imgUrl: 'https://www.bcd.com.kg/img_pdd/none.jpg',
        correctOption: '3',
        options: ['4', '3', '2', '5']
    },
    {
        quizText: 'Массивдин аягына элемент кошуу үчүн кайсы ыкма колдонулат?',
        imgUrl: 'https://www.bcd.com.kg/img_pdd/none.jpg',
        correctOption: 'push()',
        options: ['push()', 'pop()', 'shift()', 'unshift()']
    }, 
    {
        quizText: 'JavaScript те typeof null эмнени кайтарат?',
        imgUrl: 'https://www.bcd.com.kg/img_pdd/none.jpg',
        correctOption: 'объект',
        options: ['нөл', 'аныкталбаган', 'объект', 'функция']
    },
    {
        quizText: 'Кайрадан let колдонуп өзгөрмө жарыяласаңыз эмне болот?',
        imgUrl: 'https://www.bcd.com.kg/img_pdd/none.jpg',
        correctOption: 'ката',
        options: ['ката', 'Өзгөрмө кайра аныкталат', 'Программа аяктайт', 'Эч нерсе']
    }
]

// 0 1
let quizIndex = 0
let button = 0
// DOM
const quiz_img = document.getElementById('quiz-img')
const quiz_text = document.getElementById('quiz-text')
const ul = document.getElementById('options')
const quiz_number = document.getElementById('quiz-number')
const pbilet_nomer = document.getElementById('biletNomer')

let buttons;
let allLi;

function showQuiz() {
    quiz_img.src = questions[quizIndex].imgUrl
    quiz_text.innerText = questions[quizIndex].quizText
    ul.innerHTML = questions[quizIndex].options.map(opt => {
        return `<li class="list-group-item"> ${opt} </li>`
    }).join('');

    setAllLi()

    renderButton()
}

function setAllLi() {
    allLi = ul.querySelectorAll('li')
    allLi.forEach((li, index) => {
        li.addEventListener('click', () => {
            if(li.innerText === questions[quizIndex].correctOption){
            li.classList.add('bg-success')
        }else {
            li.classList.add('bg-danger')
        }
            alert(li.innerText)
        })
    })
}


function renderButton() {
    quiz_number.innerHTML = ''; // Очищаем div перед добавлением кнопок
    for (let i = 0; i < questions.length; i++) {
        quiz_number.innerHTML += `
        <button class="btn btn-outline-primary rounded-circle px-3">
        ${i + 1}
        </button>`;
    }


    
    // После отрисовки кнопок
    buttons = quiz_number.querySelectorAll('button');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            quizIndex = index;
            showQuiz(); // Показать выбранный вопрос
        });
    });
}

showQuiz()



