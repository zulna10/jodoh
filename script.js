const kamu = document.querySelector('#kamu')
const pasangan = document.querySelector('#pasangan')
const hasil = document.querySelector('.hasil')
const cek = document.querySelector('.cek')
const ulang = document.querySelector('.ulang')
const input = document.getElementsByTagName('input')

// function hasilRandom(){
//     const random = Math.floor(Math.random()*100)
//     console.log(random) 
    
// }
cek.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*100)
    function maka(){
        if(random < 33){
            return 'CARI PASANGAN LAIN SEKARANG!!'
        }if(random >= 33 && random < 66){
            return 'PUTUSKAN DIA!!'
        }else{
            return 'BERTAHAN DENGAN DIA!!'
    }}
    const hasilKamu = kamu.value
    const hasilPasangan = pasangan.value

    hasil.innerHTML = `Kecocokan ${hasilKamu} dengan ${hasilPasangan} adalah ${random} %,<br><br>
    kamu harus ${maka()}`
    
    // console.log(random)
    // console.log(maka())

    // console.log(kamu.value)
    // console.log(pasangan.value)

})

// kamu.addEventListener('keyup',()=>{
//     console.dir(kamu.value)
// })
ulang.addEventListener('click',function(){
    kamu.value=''
    pasangan.value =''
    hasil.innerHTML =''  
    // console.log(hasil) 
})


