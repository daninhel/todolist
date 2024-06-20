const local = localStorage.getItem

const addbutton = document.getElementById('btn-input')

addbutton.addEventListener('click', function(){
    let input = document.getElementById("input-text").value;//recebe o valor do input no HTML
    let ul = document.getElementById("to-do-list")
    //Cria novos elementos para adicionar ao HTML
    let newLi = document.createElement("li")
    let newBtn = document.createElement("button")
    //atribui as propriedados dos elementos que serão adicionados
    newBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>/svg>'
    newBtn.className = 'btn-ok'
    newLi.id = 'item'
    newLi.innerText = input
    newLi.appendChild(newBtn)
    ul.appendChild(newLi)
    //limpa o input
    document.getElementById("input-text").value = ''

    let botoes = document.querySelectorAll(".btn-ok")
    //função que remove o botão após tarefa ser concluida
    botoes.forEach( botao => {
        botao.addEventListener('click', function(){
        let li =botao.parentNode
        let ul = li.parentNode
    
        ul.removeChild(li)
        })
    })
})
