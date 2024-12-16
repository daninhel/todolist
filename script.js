//Iniciando chaves do local storage
const LocalStorageKeyToDo = 'to-do-list' 
const LocalStorageKeyFinish = 'finish-list'
const LocalStorageKeyTheme = 'theme' 
//Tema padrão
localStorage.setItem(LocalStorageKeyTheme, 'default')

// let valores = JSON.parse(localStorage.getItem(LocalStorageKey))
// localStorage.setItem(LocalStorageKey, JSON.stringify(valores))

//Funções dos botões

//Guardando o objeto btn-input dentro da constante
const addBtn = document.querySelector('#btn-input')
//Adicionando a função ao btn-input
addBtn.addEventListener('click', function(){
    let input = document.querySelector('#input-text') //Acessa a lista
    //Verifica se o campo de texto não está vazio
    if(!input.value.trim()){
        alert('Digite o nome da tarefa para poder adicionar') //feedback para o usuário
    }
    //Verificar se o conteudo do input já está na lista
    // else if{ valores.push({ name : input.value }) }
    //Cria o elemento
    else{
        // Tarefas += { nomeTarefa: input.value }
        // console.log(valores)
        createItem(input)
    }
})

//Guardando o objeto btn-finish dentro da constante
const showBtn = document.querySelector('#btn-finish')
//Adicionando a função ao btn-finish
showBtn.addEventListener('click', function(){
    let finishedList = document.querySelector('#finish-list') //Seleciona a lista que contem os concluidos

    //Faz a verificação da propriedade "display" do elemento HTML, para decidir se deve ou não exibi-lo
    if (getComputedStyle(finishedList).display == 'none'){
        finishedList.style.display = 'block' //Exibe o conteudo
    }
    else{
        finishedList.style.display = 'none' //Oculta o conteudo
    }
})

//Atribuindo icones á variaveis para usar mais tarde dentro do createItem
const editBtnImg = "./assents/icons/pencil.svg"
const RemoveBtnImg = "./assents/icons/trash.svg"
const checkBtnImg = "./assents/icons/check.svg"

function createItem(input){
            //Acessando a lista
            let lista = document.querySelector('#to-do-list')
            //criando elementos parar compor a li
            let li = document.createElement('li')
            let editBtn = document.createElement('button')
            let removeBtn = document.createElement('button')
            let checkBtn = document.createElement('button')
            let imageEdit = document.createElement('img')
            let imageRemove = document.createElement('img')
            let imageCheck = document.createElement('img')
            let DivBtns = document.createElement('div')
            //atribuindo o valor do input como texto na li
            li.textContent = input.value
            //atribuindo caracterristacs do editBtn
            imageEdit.src = editBtnImg
            editBtn.appendChild(imageEdit)
            editBtn.id = 'btn-edit'
            editBtn.className = 'action-btn'
            //atribuindo caracterristacs do editBtn
            imageRemove.src = RemoveBtnImg
            removeBtn.appendChild(imageRemove)
            removeBtn.id = 'btn-remove'
            removeBtn.className = 'action-btn'
            //atribuindo caracterristacs do editBtn
            imageCheck.src = checkBtnImg
            checkBtn.appendChild(imageCheck)
            checkBtn.id = 'btn-check'
            checkBtn.className = 'action-btn'
    
            DivBtns.className = 'action-buttons'
            //Adicionando elementos ao HTML
            DivBtns.appendChild(removeBtn)
            DivBtns.appendChild(editBtn)
            DivBtns.appendChild(checkBtn)
            li.appendChild(DivBtns)
            lista.appendChild(li)
            //Limpa o input de texto
            input.value = ''
            //Chama função que atribui os funcionamento dos botões
            removeItem()
            editItem()
            checkItem()
}

function removeItem(){
    //Guardando a lista de objetos btn-remove dentro da constante
    const removeBtnn = document.querySelectorAll("#btn-remove")
    //Pecorre a lista de objetos atribuindo a função a acada objeto
    removeBtnn.forEach( botao => {
        //Função que remove a tarefa após ser concluida
        botao.addEventListener('click', function(){
            //Acesso aos elementos pai
            let div = botao.parentNode
            let li = div.parentNode
            let ul = li.parentNode
            // Remove o item
            ul.removeChild(li)
        })
    })
}

function editItem(){
    //Guardando a lista de objetos btn-edit dentro da constante
    const editBtn = document.querySelectorAll("#btn-edit")
    //Pecorre a lista de objetos atribuindo a função a acada objeto
    editBtn.forEach( botao => {
        //Função que edita a tarefa
        botao.addEventListener('click', function(){
            let div = botao.parentNode
            let li = div.parentNode

            li.textContent = ''
        })
    })
}

function checkItem(){
    //Guardando a lista de objetos btn-edit dentro da constante
    const checkBtn = document.querySelectorAll('#btn-check')
    //Pecorre a lista de objetos atribuindo a função a acada objeto
    checkBtn.forEach( botao => {
        //Função que edita o botão após tarefa ser concluida
        botao.addEventListener('click', function(){
            let div = botao.parentNode
            let li = div.parentNode

            let lista = document.querySelector('#to-do-list')
            let concluidos = document.querySelector('#finish-list')

            concluidos.appendChild(li)
            lista.removeChild(li)
        })
    })
}

//Alteração de tema

//Carrega o tema do LocalStorage no carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem(LocalStorageKeyTheme) === 'dark' || localStorage.getItem(LocalStorageKeyTheme) === 'default') {
        darkMode();
    } else {
        whiteMode();
    }
});

//Guardando o objeto dentro da varivel
const switchMode = document.querySelector("#btn-switch-mode")
//adiciona a função de trocar do modo claro para o escuro ou o contrario no botão
switchMode.addEventListener('click',function(){
    if(localStorage.getItem(LocalStorageKeyTheme) === "dark"){
        lightMode()//Função que muda o CSS para o modo claro

    }
    else{
        darkMode()//Função que muda o CSS para o modo escuro
    }
})

function lightMode(){
    localStorage.setItem(LocalStorageKeyTheme, 'white')
    document.querySelector('body').className = 'light-mode'
    document.querySelector('svg').className = 'light-mode'
    document.querySelectorAll('.btn-ui').forEach(botao => {
        botao.className = 'btn-ui light-mode'
    })
}

function darkMode(){
    localStorage.setItem(LocalStorageKeyTheme, 'dark')
    document.querySelector('body').className = 'dark-mode'

    document.querySelectorAll('.btn-ui').forEach(botao => {
        botao.className = 'btn-ui dark-mode'
    })
}