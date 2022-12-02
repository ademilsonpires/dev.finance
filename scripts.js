const Modal = {
    open(){
        //abrir Modal
        //Adicionar a class active ao modal para abrir
        document.querySelector('.modal-overlay')
            .classList.add('active');


    },
    close(){
        //fechar o modal
        //remover a classe active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active');



    }

}

