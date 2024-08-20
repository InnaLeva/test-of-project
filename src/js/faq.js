import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import svgrootBasis from '../img/icons.svg' 

export {questions, ulElement, createFAQMarkup, styleElement};

new Accordion('.faq-container', {
  duration: 400, 
  ariaEnabled: true,
  showMultiple: false, 
  collapse: true 
});

const questions = [
    {
  svgroot:
   '#icon-Icon-bottom' ,
  topic:
  'What programming languages ​​are most often used in your project?',
  text:
  'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
    {
  svgroot:
   '#icon-Icon-bottom' ,
  topic:
  'What are the deadlines for the project?',
  text:
  'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },

  {
    svgroot:
     '#icon-Icon-bottom' ,
    topic:
    'What payment methods do you accept?',
    text:
    'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
    },

    {svgroot:
     '#icon-Icon-bottom' ,
    topic:
    'How can I contact you?',
    text:
    'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
    },

    {svgroot:
        '#icon-Icon-bottom' ,
       topic:
       'Do you provide advice or support?',
       text:
       'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
       },

       {svgroot:
        '#icon-Icon-bottom' ,
       topic:
       'What does the process of developing a software product look like from idea to implementation?',
       text:
       'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
       },
   

  ];
  const ulElement = document.querySelector('.faq-container');

  function createFAQMarkup(questions) {
    return questions
      .map(
        ({ svgroot, topic, text }, index) => `
          <li class="faq ${index !== questions.length - 1 ? '' : ''}">
            <div class="faq-list-up">
               <h3 class="question">${topic}</h3>
                 <svg class="faq-icon">
                   <use href="${svgrootBasis}${svgroot}"></use>
                </svg>
           </div>
          <p class="faq-text">${text}</p>
          </li>`
          
      )
      .join('');
  }
  ulElement.insertAdjacentHTML('beforeend', createFAQMarkup(questions));

  function handleCardClick(event) {
    if (event.target.closest('.faq-icon')) { 
      const faqItem = event.target.closest('.faq');
      const faqText = faqItem.querySelector('.faq-text');
  
      faqItem.classList.toggle('active');
  
      if (faqItem.classList.contains('active')) {
        faqText.style.maxHeight = faqText.scrollHeight + 'px'; 
      } else {
        faqText.style.maxHeight = 0; 
      }
    }
  }
  
  ulElement.addEventListener('click', handleCardClick);

const styleElement = document.createElement('style');
document.head.appendChild(styleElement);
import 'accordion-js/dist/accordion.min.css';
