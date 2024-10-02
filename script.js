fetch('faq.json')
    .then(response => response.json())
    .then(data => {
      const faqContainer = document.querySelector('container');

      data.forEach(item => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('questions'); 

        const questionH2 = document.createElement('h2');
        questionH2.textContent = item.question;

        const iconDiv = document.createElement('div');
        iconDiv.classList.add('faq-question-icon'); 
        iconDiv.innerHTML = '<ion-icon name="chevron-up-circle"></ion-icon>';

        questionDiv.appendChild(questionH2);
        questionDiv.appendChild(iconDiv);

        const answerP = document.createElement('p');
        answerP.textContent = item.answer;

        faqContainer.appendChild(questionDiv);
        faqContainer.appendChild(answerP);
        faqContainer.appendChild(document.createElement('hr'));
      });
    })
    .catch(error => console.error('Erro ao carregar os dados do FAQ:', error));