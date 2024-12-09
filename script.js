// const removeBtn = document.querySelectorAll("#btn-remove")
// //função que remove o botão após tarefa ser concluida
// removeBtn.forEach( botao => {
//     botao.addEventListener('click', function(){
//         let li = botao.parentNode
//         let ul = li.parentNode

//         ul.removeChild(li)
//     })
// })

const LocalStorageKey = 'to-do-list' //Setando o local storage

// let valores = JSON.parse(localStorage.getItem(LocalStorageKey))

// localStorage.setItem(LocalStorageKey, JSON.stringify(valores))


const editBtnImg = "./assents/icons/pencil.svg"
const trashBtnImg = "./assents/icons/trash.svg"
const checkBtnImg = "./assents/icons/check.svg"


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
    else{
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


//Guardando o objeto dentro da varivel
const backMode = document.querySelector("#btn-switch-mode")
//adiciona a função de trocar do modo claro para o escuro ou o contrario no botão
backMode.addEventListener('click',function(){
    let body = document.querySelector('body')// seleciona o body
    //verifica se o modo que está
    if(body.style.backgroundColor == "var(--color-black)"){
        whiteMode(body)
    }
    else{
        darkMode(body)
    }
})

function whiteMode(body){
    body.style.backgroundColor = "var(--color-white)"
    body.style.color = "var(--color-black)"

    // let UiBtns = document.querySelector('.btn-ui')
    // UiBtns.backgroundColor = "var(--color-white)"
    // UiBtns.border = "solid 2px"
}

function darkMode(body){
    body.style.backgroundColor = "var(--color-black)"
    body.style.color = "var(--color-white)"
}

function createItem(input){
            //Acessando a lista
            let lista = document.querySelector('#to-do-list')
            //criando elementos parar compor a li
            let li = document.createElement('li')
            let editBtn = document.createElement('button')
            let trashBtn = document.createElement('button')
            let checkBtn = document.createElement('button')
            let imageEdit = document.createElement('img')
            let imageTrash = document.createElement('img')
            let imageCheck = document.createElement('img')
            let DivBtns = document.createElement('div')
            //atribuindo o valor do input como texto na li
            li.textContent = input.value
            //atribuindo caracterristacs do editBtn
            imageEdit.src = editBtnImg
            editBtn.appendChild(imageEdit)
            editBtn.className = 'btn-ok'
            editBtn.id = 'edit-btn'
            //atribuindo caracterristacs do editBtn
            imageTrash.src = trashBtnImg
            trashBtn.appendChild(imageTrash)
            trashBtn.className = 'btn-ok'
            trashBtn.id = 'trash-btn'
            //atribuindo caracterristacs do editBtn
            imageCheck.src = checkBtnImg
            checkBtn.appendChild(imageCheck)
            checkBtn.className = 'btn-ok'
            checkBtn.id = 'check-btn'
    
            DivBtns.className = 'action-buttons'
    
            //Adicionando elementos ao HTML
            DivBtns.appendChild(trashBtn)
            DivBtns.appendChild(editBtn)
            DivBtns.appendChild(checkBtn)
            li.appendChild(DivBtns)
            lista.appendChild(li)
            //Limpa o input de texto
            input.value = ''
}