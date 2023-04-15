
//1. 모든 서브 숨기기
//2. gnb 자식 li에 마우스 올리면 자식  sub 보이기 (Node 관계처리)
//3. gnb  자식 li에서 나가면 자식 sub 숨기기
const menu = document.querySelectorAll('nav .gnb > li')
const sub = document.querySelectorAll('li .sub')
const bg = document.querySelector('.bg')
console.log(menu, sub)
const mm = document.querySelector('.mm')
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.5s'
    
    
}
mm.style.display = 'none'
bg.style.height = '0'
bg.style.transition = 'all 0.5s'
    
for(let i of menu){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.height='300px'
        }
        bg.style.height = '300px'
        mm.style.display = 'block'
        
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){j.style.height='0'}
        bg.style.height = '0'
        mm.style.display = 'none'
    })
}



