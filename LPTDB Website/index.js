
const companyBtn=document.getElementById('company-btn')
const cpuBtn=document.getElementById('cpu-btn')
const ramBtn=document.getElementById('ram-btn')
const screenBtn=document.getElementById('screen-btn')
const graphicsBtn=document.getElementById('graphics-btn')
const priceBtn=document.getElementById('price-btn')
const secondRowBtn=document.getElementById("2button-div")
//------------------------------------------------------------------------------------------------------------------------------------
let companyName=' fds'
let cpuName=' '
let ramSize=0
let screenSize=0
let graphicsType=' '
let budget=1000000
//------------------------------------------------------------------------------------------------------------------------------------
const companyHtml=`
<button id='HP'>HP</button>
<button id='MSI'>MSI</button>
<button id='MI'>MI</button>
<button id='Razer'>Razer</button>
<button id='Apple'>Apple</button>
<button id='Acer'>Acer</button>
<button id='Dell'>Dell</button>
<button id='Lenovo'>Lenovo</button>
<button id='LG'>LG</button>
<button  id='ASUS'>ASUS</button>`
//------------------------------------------------------------------------------------------------------------------------------------
const cpuHtml=`
<button id='i3'>Intel i3</button>
<button id='i5'>Intel i5</button>
<button id='i7'>Intel i7</button>
<button id='i9'>Intel i9</button>
<button id='R3'>Ryzen 3</button>
<button id='R5'>Ryzen 5</button>
<button id='R7'>Ryzen 7</button>
`
//------------------------------------------------------------------------------------------------------------------------------------
const ramHtml=`
<button id='fourGB'>4 GB</button>
<button id='eightGB'>8 GB</button>
<button id='sixteenGB'>16 GB</button>
<button id='thirtytwoGB'>32 GB</button>
`
//------------------------------------------------------------------------------------------------------------------------------------
const screenHtml=`
<button id='thirteenIn'>13 in</button>
<button id='fourteenIn'>14 in</button>
<button id='sixteenIn'>16 in</button>
<button id='seventeenIn'>17 in</button>
`
//------------------------------------------------------------------------------------------------------------------------------------\
const graphicsHtml=`
<button id='integrated'>Integrated</button>
<button id='dedicated'>Dedicated</button>
`
//------------------------------------------------------------------------------------------------------------------------------------
const priceHtml=`
<input type='text' id='priceInput'>
<button id='priceBtn'>SUBMIT</button>
`
//------------------------------------------------------------------------------------------------------------------------------------
companyBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=companyHtml
    const HPCompany=document.getElementById('HP')
    const MSICompany=document.getElementById('MSI')
    const MICompany=document.getElementById('MI')
    const RazerCompany=document.getElementById('Razer')
    const AppleCompany=document.getElementById('Apple')
    const AcerCompany=document.getElementById('Acer')
    const DellCompany=document.getElementById('Dell')
    const LenovoCompany=document.getElementById('Lenovo')
    const LGCompany=document.getElementById('LG')
    const ASUSCompany=document.getElementById('ASUS')
    HPCompany.addEventListener('click',function(){
        companyName='HP'
    })
    MSICompany.addEventListener('click',function(){
        companyName='MSI'
    })
    MICompany.addEventListener('click',function(){
        companyName='MI'
    })
    RazerCompany.addEventListener('click',function(){
        companyName='Razer'
    })
    AppleCompany.addEventListener('click',function(){
        companyName='Apple'
    })
    AcerCompany.addEventListener('click',function(){
        companyName='Acer'
    })
    DellCompany.addEventListener('click',function(){
        companyName='Dell'
    })
    LenovoCompany.addEventListener('click',function(){
        companyName='Lenovo'
    })
    LGCompany.addEventListener('click',function(){
        companyName='LG'
    })
    ASUSCompany.addEventListener('click',function(){
        companyName='ASUS'
    })

})
//------------------------------------------------------------------------------------------------------------------------------------
cpuBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=cpuHtml
})
//------------------------------------------------------------------------------------------------------------------------------------
ramBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=ramHtml
})
//------------------------------------------------------------------------------------------------------------------------------------
screenBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=screenHtml
})
//------------------------------------------------------------------------------------------------------------------------------------
graphicsBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=graphicsHtml
})
//------------------------------------------------------------------------------------------------------------------------------------
priceBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=priceHtml
})
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------DISPLAY CHOICES-------------------------------------------------------------


const displayDiv=document.getElementById("display-div")
const displayBtn=document.getElementById("display-btn")
displayBtn.addEventListener('click',function(){
    displayDiv.innerHTML+=`<p>${companyName}</p>`
})