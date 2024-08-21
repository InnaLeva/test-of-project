
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.footer-form');
    const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.footer-close-button');
  
  // Відстеження події на відправлення форми
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Перешкоджаємо стандартному відправленню форми
      
       // Перевірка валідності форми
      if (form.checkValidity()) {
        // Якщо форма валідна, відображаємо модальне вікно
        modal.classList.add('is-open');
          
        const STORAGE_KEY = "feedback-form-state";

        let formData = {
          email: "",
          comments: ""
        };
        // Відстеження подій на формі
        form.addEventListener("submit", handleFormSubmit);
        form.addEventListener("input", handleFormInput);

        // Функція для обробки введення даних у форму
        function handleFormInput(event) {
          const value = event.target.value.trim();
          const key = event.target.name.trim();

          formData[key] = value;
    
          localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
          console.log(key, value);
        }

        function populateForm() {
          let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
          if (!savedFeedbackData) {
            return;
          }

          for (const key in savedFeedbackData) {
            form.elements[key].value = savedFeedbackData[key];
            formData[key] = savedFeedbackData[key];
          }
        }
        populateForm();

        function handleFormSubmit(event) {
          event.preventDefault();

          if (!formData.email || !formData.comments) {
      
            alert('Fill please all fields');
            return;
          }
          localStorage.removeItem(STORAGE_KEY)

      
          form.reset();
        }
      }

        // Можна відобразити повідомлення про помилку, якщо потрібно
        form.classList.add('was-validated');
    });

    // Закриття модального вікна
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('is-open');
    });

    // Додатково закриваємо модальне вікно при кліку на фон
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-open');
        }
    });
  
     //закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modal.classList.remove('is-open');
      
    }
})
});




/*Опис коду:
1. **Затримка DOMContentLoaded**: Код події з робочими прикладами виконується після того, як DOM повністю завантажиться.
2. **Подія відправлення форми**: Встановлено обробник для події `submit` на формі, який спочатку запобігає стандартний процес відправки.
3. **Валідність форми**: Якщо форма валідна (усі обов'язкові поля заповнені, а поле email відповідає шаблону), модальне вікно відкривається.
4. **Закриття модального вікна**: Відстежуються події кліка на кнопку закриття та фон модального вікна, щоб закрити його.
5. **Скидання полів форми**: Після успішної відправки форма скидається.

### Додайте CSS
Для покращення відповідей про валідність ви можете використовувати класи для стилізації ваших полів.

Не забудьте вставити цей скрипт у розділ `<body>` вашого HTML-коду, перед закриваючим тегом `</body>`.*/








/*import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const openModalBtn = document.querySelector('.footer-form-button');
const closeModalBtn = document.querySelector('.footer-close-button');
const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');
const commentsInput = document.querySelector('.form-comments');


emailInput.addEventListener('blur', validateEmail);


commentsInput.addEventListener('input', () => {
  const currentLength = commentsInput.value.length;

  commentsInput.textContent = `${currentLength}`;

  validateEmail();
});




form.addEventListener('submit', (event) => {
  event.preventDefault();
  commentsInput.style.display = 'none';

  modalContent.classList.remove('is-open');
  footerModal.classList.remove('is-open');
})

const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    comments: ""
};

// Відстеження подій на формі
form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

// Функція для обробки введення даних у форму
export function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();

    formData[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    console.log(key, value);
}

export function populateForm() {
  let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
      form.elements[key].value = savedFeedbackData[key];
      formData[key] = savedFeedbackData[key];
  }
}
populateForm();

export function handleFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.comments) {
      
        alert('Fill please all fields');
      return;
    }
    localStorage.removeItem(STORAGE_KEY)

  form.reset();
}*/
/*відкрити модальне вікно*/
/*openModalBtn.addEventListener("click", function () {
  footerModal.classList.add("is-open");
  modalContent.classList.add("is-open");
})
//закрити модільне вікно
closeModalBtn.addEventListener('click', function () {
  footerModal.classList.remove('is-open');
  modalContent.classList.remove("is-open");
})
//закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      footerModal.classList.remove('is-open');
      modalContent.classList.remove("is-open");
    }
})
//закрити модальне вікно при натисканні поза ним
document.querySelector('.footer-backdrop .footer-modal').addEventListener('click', event => {
    event._isClickWithInModal = true;
});*/













/*footerModal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('is-open');
});

import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.form-comments');
const message = document.getElementById('emailSuccessMessage');

const openModalBtn = document.querySelector('.footer-form-button');
const charCount = document.getElementById('charCount');


const closeModalBtn = document.querySelector('.footer-close-button');
const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');
const modalTitle = document.querySelector('.footer-backdrop-title');
const modalText = document.querySelector('.footer-backdrop-text');


emailInput.addEventListener('blur', validateEmail);

commentsInput.addEventListener('input', () => {
  const currentLength = commentsInput.value.length;

  if (window.matchMedia('(min-width: 768px)').matches) {
    charCount.style.display = 'block';
  }

  charCount.textContent = `${currentLength}`;

  validateEmail();
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  charCount.style.display = 'none';

  modalContent.classList.remove('is-open');
  footerModal.classList.remove('is-open');

  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

  axios.post('/requests', {
    email: emailInput.value.trim(),
    comment: commentsInput.value.trim()
  })
    .then(response => {
      modalTitle.textContent = response.data.title;
      modalText.textContent = response.data.message;
    })
    .catch((error) => {
      iziToast.show({
          message: error.response?.data?.message || error.message || 'An error occurred',
          backgroundColor: "#ef4040",
          position: "topRight",
          messageSize: 16,
          messageColor: '#fff',
          messageLineHeight: "150%",

          timeout: 4000
        });
    })
    .finally(() => {
      form.reset();
      charCount.textContent = '0';
      emailInput.classList.remove('error');
      emailInput.classList.remove('success');
      message.textContent = '';
      openModalBtn.disabled = true;
    })

})



function validateEmail() {
  if (emailInput.checkValidity() && emailInput.value.trim() !== "") {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    message.textContent = 'Success!';
    message.style.color = '#3cbc81';

    }  else  {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    message.textContent = 'Invalid email, try again';
    message.style.color = '#e74a3b';
  }

    const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== "";
    const isCommentFilled = commentsInput.value.trim() !== "";
    openModalBtn.disabled = !(isEmailValid && isCommentFilled);
}

openModalBtn.addEventListener('click', () => {
  modalContent.classList.remove('.is-open')
})

const closeModal = () => {
  modalContent.classList.add("is-open");
  footerModal.classList.add("is-open");
};

closeModalBtn.addEventListener('click', closeModal);

footerModal.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
});*/




