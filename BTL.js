const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')


adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex" 
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none" 
})
// silder ----------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')

let index = 0

rightbtn.addEventListener ("click",function(){
    li[index].classList.remove("active")
    index = index+1
    if(index>imgNuber.length-1){
        index=0
    }
    li[index].classList.add("active")
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click",function(){
    li[index].classList.remove("active")
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    li[index].classList.add("active")
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
// slider 1 ---------------------------
const imgNuberli = document.querySelectorAll('.slider-content-left-bottom li')
// console.log(imgactive)
imgNuberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")

}
//--------------------slider product-----------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelectorAll('.slider-product-one-content-items')
var li = document.querySelectorAll('.slider-content-left-bottom li')

// console.log(rightbtntwo)
// console.log(leftbtntwo)

rightbtntwo.addEventListener ("click",function(){
    index = index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtntwo.addEventListener ("click",function(){
    index = index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})



var cart = document.querySelector('.fa-cart-shopping')
cart.addEventListener('click',function(){
    window.location = 'giohang1.html'
    
})