//Iniciando chaves do local storage
const LocalStorageKeyToDo = 'to-do-list' 
const LocalStorageKeyFinish = 'finish-list'
const LocalStorageKeyTheme = 'theme' 

//Carrega os dados do LocalStorage no carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    showValues()
    
    if (localStorage.getItem(LocalStorageKeyTheme) === 'dark' || localStorage.getItem(LocalStorageKeyTheme) === 'default') {
        darkMode();
    } else {
        lightMode();
    }
});

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
    else if(validateIfExistsNewTask()){ alert('A tarefa já existe') }
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
            //Armazenando lista para passa-lá como argumento
            let list = document.querySelector('#to-do-list')
            //Acessa os dados o LocalStorage os guardando como JSON em uma variavel
            let values = JSON.parse(localStorage.getItem(LocalStorageKeyToDo) || "[]")
            // Função que compoe a li da tarefa
            taskCompose(list, input.value)
            //Adiciona o item criado no final da lista
            values.push({name: input.value})
            //Passa a nova 'lista' para o LocalStorage
            localStorage.setItem(LocalStorageKeyToDo,JSON.stringify(values))
            //Limpa o input de texto
            input.value = ''
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
            // Remove do LocalStorage

            let values = JSON.parse(localStorage.getItem(LocalStorageKeyToDo) || "[]")
            let index = values.findIndex(x => x.name == data)
            values.splice(index,1)
            localStorage.setItem(LocalStorageKeyToDo,JSON.stringify(values))
            showValues()
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

function taskCompose(list,taskContent){
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
            li.textContent = taskContent
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
            list.appendChild(li)
            //Chama função que atribui os funcionamento dos botões
            removeItem()
            editItem()
            checkItem()
}

function showValues(){
    //Acessa os dados o LocalStorage os guardando como JSON em uma variavel
    let values = JSON.parse(localStorage.getItem(LocalStorageKeyToDo) || "[]")
    //Armazenando lista para passa-lá como argumento
    let list = document.querySelector('#to-do-list')
    let finishList = document.querySelector('#finish-listt')
    list.innerHTML = ''
    
    for(let i = 0; i < values.length; i++){
        taskCompose(list, values[i]['name'])
    }

    // for(let i = 0; i < values.length; i++){
    //     finishTaskCompose(finishList, values[i]['name'])
    // }
}

function validateIfExistsNewTask(){
    let values = JSON.parse(localStorage.getItem(LocalStorageKeyToDo) || "[]")
    let input = document.querySelector('#input-text').value
    let exists = values.find(x => x.name == input)
    return !exists ? false : true
}

//Alteração de tema

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
    localStorage.setItem(LocalStorageKeyTheme, 'light')
    document.querySelector('body').className = 'light-mode'
    document.querySelectorAll('svg').forEach(img => {
        img.className = 'light-mode'
    })
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