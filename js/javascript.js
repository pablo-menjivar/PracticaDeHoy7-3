//Listener para esperar a que se cargue completamente el DOM
document.addEventListener('DOMContentLoaded', function() {
    //Selecciono todos los elementos de preguntas que contengan la clase 'question'
    const faqQuestions = document.querySelectorAll('.question');
    
    //Agrego evento de clicñ a cada pregunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            //Obtengo la clase padre (question-item)
            const questionItem = this.parentNode;
            
            //Alterno la clase 'active' en el elemento question-item, que contiene cada una de las preguntas
            questionItem.classList.toggle('active');
            
            //Cierro todas las otras preguntas cuando abro una
            const otherItems = document.querySelectorAll('.question-item');
            otherItems.forEach(item => {
                if (item !== questionItem) {
                    item.classList.remove('active');
                }
            });
        });
    });
});