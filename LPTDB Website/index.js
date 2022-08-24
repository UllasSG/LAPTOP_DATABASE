
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
    const inteli3=document.getElementById("i3")
    const inteli5=document.getElementById("i5")
    const inteli7=document.getElementById("i7")
    const inteli9=document.getElementById("i9")
    const ryzenR3=document.getElementById("R3")
    const ryzenR5=document.getElementById("R5")
    const ryzenR7=document.getElementById("R7")
    inteli3.addEventListener('click',function(){
        cpuName='i3'
    })
    inteli5.addEventListener('click',function(){
        cpuName='i5'
    })
    inteli7.addEventListener('click',function(){
        cpuName='i7'
    })
    inteli9.addEventListener('click',function(){
        cpuName='i9'
    })
    ryzenR3.addEventListener('click',function(){
        cpuName='R3'
    })
    ryzenR5.addEventListener('click',function(){
        cpuName='R5'
    })
    ryzenR7.addEventListener('click',function(){
        cpuName='R7'
    })
})
//------------------------------------------------------------------------------------------------------------------------------------
ramBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=ramHtml
    const fourRam=document.getElementById('fourGB')
    const eightRam=document.getElementById('eightGB')
    const sixteenRam=document.getElementById('sixteenGB')
    const thritytwoRam=document.getElementById('thirtytwoGB')
    fourRam.addEventListener('click',function(){
        ramSize=4
    })
    eightRam.addEventListener('click',function(){
        ramSize=8
    })
    sixteenRam.addEventListener('click',function(){
        ramSize=16
    })
    thritytwoRam.addEventListener('click',function(){
        ramSize=32
    })
})

//------------------------------------------------------------------------------------------------------------------------------------
screenBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=screenHtml
    const thirteenInches=document.getElementById("thirteenIn")
    const fourteenInches=document.getElementById("fourteenIn")
    const sixteenInches=document.getElementById("sixteenIn")
    const seventeenInches=document.getElementById("seventeenIn")
    thirteenInches.addEventListener('click',function(){
        screenSize=13
    })
    fourteenInches.addEventListener('click',function(){
        screenSize=14
    })
    sixteenInches.addEventListener('click',function(){
        screenSize=16
    })
    seventeenInches.addEventListener('click',function(){
        screenSize=17
    })
})
//------------------------------------------------------------------------------------------------------------------------------------
graphicsBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=graphicsHtml
    const integratedGraphics=document.getElementById('integrated')
    const dedicatedGraphics=document.getElementById('dedicated')
    integratedGraphics.addEventListener('click',function(){
        graphicsType='i'
    })
    dedicatedGraphics.addEventListener('click',function(){
        graphicsType='d'
    })

})
//------------------------------------------------------------------------------------------------------------------------------------
priceBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=priceHtml
    const budgetInput=document.getElementById("priceInput")
    const budgetBtn=document.getElementById("priceBtn")
    budgetBtn.addEventListener('click',function(){
        budget=budgetInput.value
    })
})
