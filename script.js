// const addbutton = document.getElementById('btn-input')

// addbutton.addEventListener('click', function(){
//     let input = document.getElementById("input-text"); //recebe o valor do campo de texto no HTML
//     if (!input.value){
//         alert('Está vazio, prencha para adicionar a lista')
//     }
//     // else if()
//     else{
//         let ul = document.getElementById("to-do-list")
//         //Cria novos elementos para adicionar ao HTML
//         let divBtn = document.createElement("div")
//         let newLi = document.createElement("li")
//         let checkBtn = document.createElement("button")
//         let removeBtn = document.createElement("button")
//         let editBtn = document.createElement("button")
//         //atribui as propriedados dos elementos que serão adicionados
//         checkBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKtJREFUSEvtlNENgCAMRI9NdBOdTJ1EN3EVR9FLIGmA0KLyR3/UEN9Lr1WHxuUa89EFasI9ohDRAGACcMSZ/RER4bsXbI9glZKvAgm/AIx/dqDCKXvbgQmuCZglh8bWZZnhJQHhi4fPQlIFLwkIOp8OeGUHlLDCtmQHmvusSzOIJYRy181wbQY8lxI+V8EtAinhfbLn2t/OuqZhFhovObcKqsHhhS5Qo2se0Q2p5R4Zjo+H2gAAAABJRU5ErkJggg=="/>'
//         checkBtn.className = 'btn-ok'
//         checkBtn.id = 'btn-check'
        
//         removeBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvFleENgkAMhR+bsIqb6CTgJLoJbqKbgE2OpMIrtPYI94+EfF/v9REaHHyag/nICq4A2u+QvTVoRiDwRwHfLUlG8C7Tz8NTSUYg0QxK8gRwW0YVFUgsHYALgE+Bi+TF4CKLCHTmAtcSeabHK9DwGaQlZts9AgYXIM08uoMUfG8HafiWoArcElSDW4KRVMK1UFYl1qKl4G+45wYp+F6LqvwqPB9aSnSKgLUocoufoT0tisBXez0loujEm+9P+14kGZlsXfAAAAAASUVORK5CYII="/>'
//         removeBtn.className = 'btn-ok'
//         removeBtn.id = 'btn-remove'

//         editBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIJJREFUSEtjZKAxYKSx+QzEWODAwMCwH4dDGoHiDfgcScgCfIaDzH3AwMCQyMDAcACXJegW/KdSkMHNpbsFVPIAwhhccUBuUGGYN2oBepyNBhHBVDwaRKNBhAgBmpdFoBoMVNmQAkCVjiPBrA1VADK8ngRLcNZshKpMUnyAVS3NLQAA6kwZGR1E8YsAAAAASUVORK5CYII="/>'
//         editBtn.className = 'btn-ok'
//         editBtn.id = 'btn-edit'

//         divBtn.id = "divBtn"


//         newLi.id = 'item'
//         newLi.innerText = input
//         divBtn.appendChild(removeBtn)
//         divBtn.appendChild(editBtn)
//         divBtn.appendChild(checkBtn)
//         newLi.appendChild(divBtn)
        
//         console.log(newLi)
//         ul.appendChild(newLi)
//         //limpa o input
//         document.getElementById("input-text").value = ''

//         const remove = document.querySelectorAll("#btn-remove")
//         //função que remove o botão após tarefa ser concluida
//         remove.forEach( botao => {
//             botao.addEventListener('click', function(){
//             let li = botao.parentNode
//             let ul = li.parentNode

//             ul.removeChild(li)
//             })
//         })

//         // const edit = document.querySelectorAll("#btn-edit")

//         // edit.forEach(botao => {
//         //     botao.addEventListener('click',function(){
//         //         let li = botao.parentNode
//         //         let ul = li.parentNode

//         //         ul.removeChild(li)

//         //         let input = createElement('input')
//         //     })
//         // })
//     }
// })

const LocalStorageKey = 'to-do-list' //Setando o local storage

let valores = JSON.parse(localStorage.getItem(LocalStorageKey))

valores.push({
    name : input.value
})

localStorage.setItem(LocalStorageKey, JSON.stringify(valores))

const showBtn = document.querySelector("#btn-finish")

showBtn.addEventListener('click', function(){
    let finishedList = document.querySelector("#finish-list") //Seleciona a lista que contem os concluidos

    //Faz a verificação da propriedade "display" do elemento HTML, para decidir se deve ou não exibi-lo
    if (getComputedStyle(finishedList).display == "none"){
        finishedList.style.display = "block" //Exibe o conteudo
    }else{
        finishedList.style.display = "none" //Oculta o conteudo
    }
})