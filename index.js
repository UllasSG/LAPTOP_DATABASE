console.log('Hellow world')
const companyBtn=document.getElementById('company-btn')
const cpuBtn=document.getElementById('cpu-btn')
const ramBtn=document.getElementById('ram-btn')
const screenBtn=document.getElementById('screen-btn')
const graphicsBtn=document.getElementById('graphics-btn')
const priceBtn=document.getElementById('price-btn')
const secondRowBtn=document.getElementById("2button-div")
//------------------------------------------------------------------------------------------------------------------------------------
const companyChoice=document.getElementById('company-choice')
const cpuChoice=document.getElementById('cpu-choice')
const ramChoice=document.getElementById('ram-choice')
const screenChoice=document.getElementById('screen-choice')
const graphicsChoice=document.getElementById('graphics-choice')
const priceChoice=document.getElementById('price-choice')
//------------------------------------------------------------------------------------------------------------------------------------
let companyName=' '
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
<button id='thirteenIn'>13.3 in</button>
<button id='fourteenIn'>14 in</button>
<button id='sixteenIn'>15.6 in</button>
<button id='seventeenIn'>17.3 in</button>
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
        companyChoice.innerHTML='HP'
    })
    MSICompany.addEventListener('click',function(){
        companyName='MSI'
        companyChoice.innerHTML='MSI'
    })
    MICompany.addEventListener('click',function(){
        companyName='Mi '
        companyChoice.innerHTML='Mi'
    })
    RazerCompany.addEventListener('click',function(){
        companyName='Razer'
        companyChoice.innerHTML='Razer'
    })
    AppleCompany.addEventListener('click',function(){
        companyName='Apple'
        companyChoice.innerHTML='Apple'
    })
    AcerCompany.addEventListener('click',function(){
        companyName='Acer'
        companyChoice.innerHTML='Acer'
    })
    DellCompany.addEventListener('click',function(){
        companyName='Dell'
        companyChoice.innerHTML='Dell'
    })
    LenovoCompany.addEventListener('click',function(){
        companyName='Lenovo'
        companyChoice.innerHTML='Lenovo'
    })
    LGCompany.addEventListener('click',function(){
        companyName='LG'
        companyChoice.innerHTML='LG'
    })
    ASUSCompany.addEventListener('click',function(){
        companyName='ASUS'
        companyChoice.innerHTML='ASUS'
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
        cpuChoice.innerHTML='Intel i3'
    })
    inteli5.addEventListener('click',function(){
        cpuName='i5'
        cpuChoice.innerHTML='Intel i5'
    })
    inteli7.addEventListener('click',function(){
        cpuName='i7'
        cpuChoice.innerHTML='Intel i7'
    })
    inteli9.addEventListener('click',function(){
        cpuName='i9'
        cpuChoice.innerHTML='Intel i9'
    })
    ryzenR3.addEventListener('click',function(){
        cpuName='R3'
        cpuChoice.innerHTML='Ryzen 3'
    })
    ryzenR5.addEventListener('click',function(){
        cpuName='R5'
        cpuChoice.innerHTML='Ryzen 5'
    })
    ryzenR7.addEventListener('click',function(){
        cpuName='R7'
        cpuChoice.innerHTML='Ryzen 7'
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
        ramChoice.innerHTML='4 GB'
    })
    eightRam.addEventListener('click',function(){
        ramSize=8
        ramChoice.innerHTML='8 GB'
    })
    sixteenRam.addEventListener('click',function(){
        ramSize=16
        ramChoice.innerHTML='16 GB'
    })
    thritytwoRam.addEventListener('click',function(){
        ramSize=32
        ramChoice.innerHTML='32 GB'
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
        screenSize=13.3
        screenChoice.innerHTML="13.3 in"
    })
    fourteenInches.addEventListener('click',function(){
        screenSize=14
        screenChoice.innerHTML="14 in"
    })
    sixteenInches.addEventListener('click',function(){
        screenSize=15.6
        screenChoice.innerHTML="15.6 in"
    })
    seventeenInches.addEventListener('click',function(){
        screenSize=17.3
        screenChoice.innerHTML="17.3 in"
    })
})
//------------------------------------------------------------------------------------------------------------------------------------
graphicsBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=graphicsHtml
    const integratedGraphics=document.getElementById('integrated')
    const dedicatedGraphics=document.getElementById('dedicated')
    integratedGraphics.addEventListener('click',function(){
        graphicsType='i'
        graphicsChoice.innerHTML='Integrated'
    })
    dedicatedGraphics.addEventListener('click',function(){
        graphicsType='d'
        graphicsChoice.innerHTML='Dedicated'
    })

})
//------------------------------------------------------------------------------------------------------------------------------------
priceBtn.addEventListener('click',function(){
    secondRowBtn.innerHTML=priceHtml
    const budgetInput=document.getElementById("priceInput")
    const budgetBtn=document.getElementById("priceBtn")
    budgetBtn.addEventListener('click',function(){
        budget=budgetInput.value
        priceChoice.innerHTML='Rs '+budgetInput.value
    })
})
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------DATABASE------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
let data=[['HP 15 Thin & Light', 'Ryzen 3 3250U', 8, 15.6, 'i .', 35999],
['HP 15 db1069AU', 'Ryzen 3 3200U', 4, 15.6, 'i .', 28990],
['HP 15 Thin & Light', 'Intel Core i5-1135G7', 8, 15.6, 'i .', 53990],
['HP 15 Thin & Light', 'Ryzen 5 3450U', 8, 15.6, 'i .', 40490],
['HP 15s', 'i3-1005G1', 8, 15.0, 'i .', 45490],
['HP 15', 'Intel Core i3-1005G1', 8, 15.6, 'i .', 42300],
['HP 15', 'Intel Core i5', 8, 15.6, 'd .', 58990],
['HP Pavilion Gaming', 'Intel Core i5', 8, 15.6, 'd .', 65990],
['HP 15', 'Intel Core i3', 8, 15.6, 'i .', 47990],
['HP 15s', 'Ryzen 3-3250U', 4, 15.6, 'i .', 32990],
['HP 14', 'Intel Core i3', 8, 14, 'i .', 41990],
['HP 14', ' Intel i3', 8, 14, 'i .', 47692],
['HP 245 G7', 'Ryzen 3-3300U', 4, 14, 'i .', 28390],
['HP Pavilion x360 ', 'Intel Core i5-10210U', 8, 14, 'i .', 60490],
['HP Pavilion x360', 'Intel Core i3-1115G4', 8, 14, 'i .', 51990],
['HP 14s', 'Intel Core i3-1005G1', 4, 14, 'i .', 36984],
['HP 245 G7', 'AMD Ryzen 5-3500U', 4, 14, 'i .', 33990],
['HP 245 G7', 'AMD Ryzen 3-3250U', 4, 14, 'i .', 27063],
['HP OMEN Laptop 15', 'AMD Ryzen 5 4600H', 8, 15.6, 'd .', 89990],
['HP ENVY Laptop - 13', 'Intel Core i5-1035G1', 8, 13.3, 'i .', 79999],
['HP Pavilion x360 Convertible', 'Intel Core i5-1035G1', 8, 14, 'i .', 74999],
['HP Elite Dragonfly', 'Intel Core i7-8565U', 16, 13.3, 'i .', 219453],
['HP ZBook Studio G7', 'Intel Core i7-10850H', 16, 15.6, 'd .', 211999],
['HP ZBook Firefly 14 G7', 'Intel Core i7-10510U', 16, 14, 'd .', 143349],
['HP ENVY Laptop 15', 'Intel Core i7-10750H', 16, 15.6, 'd .', 139999],
['HP ZBook Power G7', 'Intel Core i7-10750H', 16, 15.6, 'd .', 132782],
['HP Spectre x360 Convertible', 'Intel Core i5-1135G7', 8, 13.3, 'i .', 129999],
['HP Omen X 2S', 'Intel Core i9-9880H', 16, 15.6, 'd .', 315000],
['HP Spectre 13', ' Intel Core i7-8500Y', 16, 13.3, 'i .', 216000],
['MSI GF63', 'Intel  i7-10750H', 8, 15.6, 'd .', 92990],
['MSI GP75', 'Intel i7 10875H', 32, 17.3, 'd .', 179990],
['MSI GL65', 'Intel i5-9300H', 8, 15.6, 'd .', 73022],
['MSI GF65', 'Intel Core i5-9300H', 8, 15.6, 'd .', 103990],
['MSI GF63', 'Intel  Core i7', 8, 15.6, 'd .', 72000],
['MSI Modern 15', ' Intel Core i5', 8, 15.6, 'i .', 78990],
['MSI Gaming GF65', 'Intel Core i7-9750H', 8, 15.6, 'd .', 89990],
['MSI GL65 Leopard', 'Intel Core i7-10750H', 16, 15.6, 'd .', 118470],
['MSI Bravo 15', 'Ryzen 7 4800H', 16, 15.6, 'd .', 84990],
['MSI GF75', 'Intel Core i7-10750H', 8, 17.3, 'd .', 99990],
['MSI GE66 Raider', 'Intel i7-10875H', 32, 15.6, 'd .', 269990],
['MSI WF75', 'Intel i7-10750HH', 16, 17.3, 'd .', 214990],
['MSI WS66', 'Intel i7-10875H', 32, 15.6, 'd .', 389990],
['MSI GS66 Stealth', ' Intel i7-10875H', 32, 15.6, 'd .', 256994],
['MSI PRESTIGE', 'Intel Core i7', 16, 15.6, 'd .', 89990],
['MSI PE60 7RD', 'Intel Core i7', 16, 15.6, 'd .', 84999],
['MSI P65 Creator ', 'Intel Core i7', 16, 15.6, 'd .', 215530],
['MSI WS65', 'Intel Core i7', 16, 15.6, 'd .', 302850],
['MSI Modern 14', 'Intel Core i7', 8, 15.6, 'd .', 74990],
['Mi .Notebook 14', 'Intel core i3-10110U', 8, 14, 'i .', 36999],
['Mi .Notebook 14', 'Intel Core i5-10210U', 8, 14, 'i .', 41999],
['Mi .Notebook Horizon Edition 14', 'Intel Core i7-10510U', 8, 14, 'd .', 59999],
['Razer Blade 15', 'Intel Core i7-10750H', 16, 15.6, 'd .', 223999],
['Razer Book 13', 'Intel Core i7-1165G7', 16, 13.4, 'i .', 205499],
['Razer Blade RZ09', 'Intel Core i7', 16, 15.6, 'i .', 190999],
['Razer Stealth Blade', 'Intel Core i7', 16, 15.6, 'i .', 683523],
['Apple Mac Book Air', 'Apple M1', 8, 13.3, 'i .', 92900],
['Apple Mac Book Pro', 'Apple M1', 8, 13.3, 'i .', 122900],
['Apple Mac Book Pro', 'Intel Core i5', 8, 13.3, 'i .', 174900],
['Apple Mac Book Pro', 'Intel Core i7', 16, 15.6, 'd .', 199900],
['Apple Mac Book Pro', 'Intel Core i9', 16, 15.6, 'd .', 239900],
['Acer Aspire 3', 'Intel Core i3-1005G1', 4, 15.6, 'i .', 32904],
['Acer Aspire 3', 'Ryzen 3-3250U', 4, 15.6, 'i .', 29999],
['Acer Extensa 15', ' Intel Core i3-1005G1', 4, 15.6, 'i .', 32590],
['Acer Swift 3', ' Intel Core i5-1035G1', 8, 14, 'i .', 65900],
['Acer Nitro 5', ' Ryzen 5 3550H', 8, 15.6, 'i .', 59990],
['Dell Inspiron 3593', 'Intel i5', 8, 15.6, 'd .', 66000],
['Dell Inspiron 5391', 'Intel i5', 8, 13.3, 'i .', 57990],
['DELL Inspiron 7490', 'Intel Core i5', 8, 14, 'd .', 77985],
['Dell XPS 9310 ', 'Intel Core i5', 8, 14.4, 'i .', 144000],
['Dell Inspiron 7490', 'Intel Core i5', 8, 14, 'i .', 82000],
['DELL Gaming-G3 3579', 'Intel Core i5', 8, 15.6, 'd .', 64000],
['Dell Inspiron 7391', 'Intel Core i5', 8, 15.4, 'd .', 85000],
['DELL Inspiron 5390', 'Intel Core i5', 8, 13, 'i .', 66000],
['Dell Vostro 3400', 'Intel Core i5', 8, 14, 'i .', 50000],
['Dell Inspiron 5408', 'Intel Core i5', 8, 14, 'd .', 62990],
['Dell Vostro 3405', 'Intel Core i5', 8, 14, 'i .', 51990],
['Dell G3 3500 Gaming Laptop', 'Intel Core i5', 8, 15.6, 'd .', 72990],
['Dell Inspiron 5409', 'Intel Core i5', 8, 15.6, 'i .', 64590],
['DELL Inspiron 3593', 'Intel Core i5', 8, 15.6, 'i .', 56990],
['DELL Inspiron 3593', 'Intel Core i5', 8, 15.6, 'd .', 66449],
['DELL Inspiron 3593', 'Intel Core i5', 4, 15.6, 'i .', 54500],
['Dell Vostro 3590', 'Intel Core i5', 8, 15.6, 'd .', 60380],
['Dell Inspiron 5406', 'Intel Core i5', 8, 15.6, 'd .', 76490],
['Dell XPS 7390', 'Intel Core i5', 8, 13.3, 'i .', 106092],
['Dell G3 3500 Gaming', 'Intel Core i7', 8, 15.6, 'i .', 82990],
['Dell Inspiron 5370', 'Intel Core i7', 8, 13.3, 'd .', 60490],
['Dell Alienware m15(R3)', 'Intel Core i7', 16, 15.6, 'd .', 197200],
['Dell XPS 9570', 'Intel Core i7', 16, 15.6, 'd .', 134090],
['Dell Inspiron 5409', 'Intel Core i7', 8, 14, 'd .', 86990],
['Dell XPS 7390', 'Intel Core i7', 8, 13.3, 'i .', 151190],
['Dell Vostro 3491', 'Intel Core i3', 4, 14, 'i .', 41790],
['DELL Inspiron 3493', 'Intel Core i3', 4, 14, 'i .', 33990],
['Dell Vostro 3401', 'Intel Core i3', 4, 14, 'i .', 34990],
['Dell Vostro 3401', 'Intel Core i3', 8, 14, 'i .', 38790],
['Dell Inspiron 15 (3501)', 'Intel Core i3', 8, 15.6, 'i .', 39499],
['Dell Inspiron 3593', 'Intel Core i3', 8, 15.6, 'i .', 40699],
['Dell Inspiron 3593', 'Intel Core i3', 4, 15.6, 'i .', 35990],
['Dell Inspiron 3593', 'Intel Core i3', 8, 15.6, 'i .', 41000],
['Dell Inspiron 3501', 'Intel Core i3', 8, 15.6, 'i .', 40500],
['Dell Vostro 3401', 'Intel Core i3', 8, 14, 'i .', 37590],
['Dell Inspiron 5491', 'Intel Core i3', 4, 14.0, 'i .', 54790],
['Dell Latitude 3400', 'Intel Core i3', 4, 14, 'i .', 34990],
['Dell G Series G7 7588', 'Intel Core i9', 16, 15.6, 'd .', 132990],
['Dell Vostro 3405', 'Ryzen-5', 8, 14, 'd .', 45990],
['Dell Inspiron 3505', 'Ryzen-5', 8, 15, 'i .', 49990],
['Dell Inspiron 3505', 'Ryzen-3', 4, 15, 'i .', 35990],
['Dell Inspiron 3505', 'Ryzen 3', 8, 15.6, 'i .', 38399],
['DELL INSPIRON 3505', 'Ryzen-3', 4, 15, 'd .', 39270],
['DELL INSPIRON 3505', 'Ryzen-3', 4, 15, 'd .', 33738],
['DELL Inspiron 3505', 'Ryzen 7', 8, 15.6, 'd .', 59490],
['Dell G5 5505', 'Ryzen 7', 16, 14, 'i .', 99990],
['Lenovo IdeaPad .Slim 3i', ' Intel Core i3-1005G1 Processor', 4, 15.6, 'i .', 35490],
['Lenovo IdeaPad .Slim 3i-Abyss Blue', ' Intel Core i3-1005G1 Processor ', 4, 14, 'i .', 38990],
['Lenovo IdeaPad .Flex 5i- Graphite Grey', ' Intel Core i5-1135G7 Processor', 8, 14, 'i .', 64990],
['Lenovo IdeaPad .S540 - Mineral Grey', ' Intel Core i5-10210U Processor ', 4, 15.6, 'd .', 63690],
['Lenovo IdeaPad .S340 - Platinum Grey', ' Intel Core i5-1035G1 Processor', 4, 14, 'i .', 51490],
['Lenovo Ideapad .L340 Gaming - Granite Black', ' Intel Core i5-9300HF Processor', 8, 15.6, 'd .', 54990],
['Lenovo IdeaPad .Flex 5i- Graphite Grey ', 'Intel Core i3-1115G4 Processor ', 8, 14, 'i .', 52990],
['Lenovo IdeaPad .Slim 3i .- Platinum Grey ', ' Intel Core i5-1035G1 Processor', 4, 15.6, 'i .', 50990],
['Lenovo IdeaPad .Gaming 3i . - Onyx Black ', ' Intel Core i5-10300H Processor ', 8, 15.6, 'd .', 73990],
['Lenovo IdeaPad .Flex 5i . - Graphite Grey ', ' Intel Core i7-1165G7 Processor ', 16, 14, 'i .', 84990],
['Lenovo IdeaPad .Slim 5i .- Graphite Grey ', ' Intel Core i5-1135G7 Processor ', 8, 15.6, 'd .', 70990],
['Lenovo IdeaPad .Gaming 3 - Onyx Black  ', 'AMD Ryzen 5 4600H Processor', 8, 15.6, 'd .', 67200],
['Lenovo IdeaPad .Flex 5 - Graphite Grey ', 'AMD Ryzen 7 4700U Processor ', 8, 14, 'i .', 67990],
['Lenovo IdeaPad .Gaming 3i . - Onyx Black ', 'AMD Ryzen 5 4600H Processor', 8, 15.6, 'd .', 65490],
['Lenovo IdeaPad .Gaming 3 - Onyx Black', 'AMD Ryzen 7 4800H Processor', 8, 15.6, 'd .', 73490],
['Lenovo IdeaPad .Gaming 3 - Onyx Black ', 'AMD Ryzen 5 4600H Processor ', 8, 15.6, 'd .', 69990],
['Lenovo IdeaPad .IdeaPad .Slim 3i .- Platinum Grey', ' Intel Core i5-10210U Processor', 4, 15.6, 'd .', 51990],
['Lenovo IdeaPad .Slim 5i .- Graphite Grey ', ' Intel Core i5-1135G7 Processor', 8, 15.6, 'i .', 63990],
['Lenovo IdeaPad .S340 - Platinum Grey', ' Intel Core i5-1035G1 Processor', 4, 14, 'i .', 53990],
['Lenovo IdeaPad .S340  - Platinum Grey ', ' Intel Core i5-1035G1 Processor', 4, 14, 'd .', 59990],
['Lenovo IdeaPad .S340 - Platinum Grey ', 'Intel Core i5-1035G1 Processor ', 4, 14, 'i .', 55990],
['Lenovo IdeaPad .Gaming 3i .- Onyx Black ', ' Intel Core i5-10300H Processor ', 8, 15.6, 'd .', 69490],
['Lenovo Legion 5i .- Phantom Black', ' Intel Core i5-10300H Processor', 8, 15.6, 'd .', 73490],
['Lenovo Legion 5i .- Phantom Black', 'AMD Ryzen 7 4800H', 8, 15.6, 'd .', 87490],
['Lenovo Legion 5i .- Phantom Black', ' Intel Core i5-10300H Processor', 8, 15.6, 'd .', 83990],
['Lenovo Legion 5i .- Phantom Black', ' Intel Core i7-10750H Processor', 16, 15.6, 'd .', 102990],
['Lenovo Legion 5i .- Phantom Black', ' Intel Core i7-10750H Processor', 16, 15.6, 'd .', 94990],
['Lenovo Legion 7i .- Slate Grey', ' Intel Core i7-10875H Processor', 16, 15.6, 'd .', 247990],
['Lenovo Legion 7i .- Slate Grey ', ' Intel Core i9-10980HK Processor', 16, 15.6, 'd .', 277990],
['Lenovo Legion Y7000 SE Gaming - Black ', 'Intel Core i7-9750H Processor', 8, 15.6, 'd .', 88990],
['Lenovo Legion 5i .- Phantom Black', ' Intel Core i7-10750H Processor', 8, 17.3, 'd .', 109820],
['Lenovo Legion 7i .- Slate Grey', ' Intel Core i7-10875H Processor', 16, 15.6, 'd .', 197990],
['Lenovo Legion Y530 - Black ', ' Intel Core i5-8300H Processor', 8, 15.6, 'd .', 69990],
['Lenovo Yoga Slim 7i .- Slate Grey ', 'Intel Core i7-1065G7 Processor ', 8, 14, 'd .', 87990],
['Lenovo Yoga Slim 7 - Slate Grey ', 'AMD Ryzen 7 4800U Processor', 8, 14, 'i .', 77990],
['Lenovo Yoga Slim 7i .- Slate Grey ', 'Intel Core i7-1165G7 Processor ', 16, 14, 'i .', 99990],
['Lenovo Yoga C640 - Iron Grey', ' Intel Core i5-10210U Processor', 8, 13.3, 'i .', 79990],
['Lenovo Yoga Slim 7i .- Slate Grey', 'Intel Core i5-1035G1 Processor', 8, 14, 'd .', 76990],
['Lenovo V15 - Iron Grey ', 'AMD  Ryzen 3 3250U Processor', 4, 15.6, 'i .', 32390],
['Lenovo V15 - Iron Grey ', ' Intel Core i3-1005G1 Processor', 4, 15.6, 'i .', 32990],
['Lenovo V15 - Iron Grey ', 'Intel Core i5-1035G1 Processor', 4, 15.6, 'i .', 42990],
['Lenovo ThinkPad .- Black', 'AMD Ryzen 5 4500U Processor', 8, 15.6, 'i .', 64990],
['Lenovo ThinkPad .- Black', 'Intel Core i5-10210U Processor', 8, 14, 'i .', 76990],
['Lenovo ThinkPad .- Black', 'Intel Core i3-10110U Processor ', 4, 14, 'i .', 40990],
['Lenovo ThinkPad .T14 - Black', ' AMD Ryzen 5 PRO 4650U Processor', 8, 14, 'i .', 99690],
['Lenovo ThinkPad .T490s - Black', 'Intel Core i5-8365U Processor', 16, 14, 'i .', 10490],
['Lenovo ThinkPad .X1 Carbon - Black  ', 'Intel Core i7-10510U Processor ', 16, 14, 'i .', 172990],
['Lenovo ThinkPad .X1 - Black  ', ' Intel Core i5-8365U Processor ', 8, 14, 'i .', 149990],
['Lenovo ThinkPad .P53 Mobile Workstation ', ' Intel Core i7-9750H Processor ', 16, 15.6, 'd .', 178990],
['Lenovo ThinkPad .T14 - Black', ' Intel Core i7-10510U Processor ', 8, 14, 'd .', 131990],
['LenovoThinkPad .T14 - Black  ', ' Intel Core i5-10210U Processor', 8, 14, 'i .', 70990],
['Lenovo ThinkBook 14  - Mineral Grey', ' Intel Core i3-1005G1 Processor ', 4, 14, 'i .', 37490],
['Lenovo ThinkBook 14  - Mineral Grey', 'IIntel Core i5-10210U Processor ', 8, 14, 'i .', 64790],
['Lenovo ThinkBook 14  - Mineral Grey', ' Core i5-10210U Processor ', 8, 14, 'i .', 70690],
['LG gram 14', 'Intel Core i5-1035G7', 8, 14, 'i .', 76999],
['LG gram 15', 'Intel Core i5-1035G7', 8, 15.6, 'i .', 81999],
['LG gram 17', 'Intel Core i7-1065G7', 8, 17.3, 'i .', 105999],
['ASUS ZenBook 14 (2020)', 'Intel Core i5-1135G7', 8, 14, 'i .', 75990],
['ASUS ZenBook Duo UX481FL-BM5811T', 'Intel Core i5-1135G7 Processor ', 8, 14, 'd .', 86990],
['ASUS ZenBook 14 ', ' Intel Core i5-8265U Processor ', 8, 14, 'd .', 54990],
['ASUS ZenBook Duo', 'Intel Core i7-10510U ', 16, 14, 'd .', 112990],
['ASUS ZenBook 13 UX331FAL-EG075T', 'Intel Core i5-8265U', 8, 13.3, 'i .', 64990],
['ASUS ZenBook Flip S OLED', ' Intel Evo Core i7-1165G7', 16, 13.3, 'i .', 149490],
['ASUS ZenBook 14 UX433FA-A5821TS', 'Intel Core i5-10210U processor', 8, 14, 'i .', 80990],
['ASUS VivoBook 14 (2020)', 'AMD Ryzen 5 3500U', 8, 14, 'i .', 44990],
['ASUS VivoBook 14 ', 'Intel Core i5-1035G1 ', 8, 14, 'i .', 45866],
['ASUS VivoBook Ultra 15 (2020)', 'Intel Core i5-1135G7', 8, 14, 'i .', 59990],
['ASUS VivoBook Ultra 15 (2020)', 'Intel Core i3-1115G4', 8, 15.6, 'i .', 43990],
['ASUS VivoBook 14 (2020)', 'AMD Ryzen 5 3500U', 8, 14, 'i .', 44990],
['ASUS VivoBook 14 (2020)', 'AMD Ryzen 5 3500U', 8, 14, 'i .', 44990],
['ASUS VivoBook 14 (2020)', 'AMD Ryzen 5 3500U', 8, 14, 'i .', 44990],
['ASUS VivoBook Flip 14  ', 'Intel Core i5-1135G7', 8, 14, 'i .', 67085],
['ASUS Vivobook S14 S432 - Transparent Silver', 'Intel Core i7-8565U', 8, 14, 'i .', 125389],
['ASUS VivoBook Gaming', 'Intel Core i7-10750H', 8, 15.6, 'd .', 72990],
['ASUS VivoBook Gaming', 'Intel Core i7-9750H', 16, 15.6, 'd .', 69990],
['ASUS ROG Zephyrus Duo 15', 'Intel Core i7-10875H', 32, 15.6, 'd .', 269975],
['ASUS ROG Zephyrus Duo 15', 'Intel Core i7-10875H', 32, 15.6, 'd .', 364900],
['ASUS ROG Zephyrus M15', 'Intel Core i7-10875H', 16, 15.6, 'd .', 148499],
['ASUS ROG Zephyrus M15', 'Intel Core i7-10750H', 16, 15.6, 'd .', 131900],
['ASUS ROG Zephyrus S15', 'Intel Core i7-10875H', 32, 15.6, 'd .', 215990],
['ASUS ROG Zephyrus S15', 'Intel Core i7-10875H', 32, 15.6, 'd .', 254990],
['ASUS ROG Zephyrus S17', 'Intel Core i7-10750H', 16, 15.6, 'd .', 174980],
['ASUS ROG Strix G15', 'Intel Core i7-10875H', 16, 15.6, 'd .', 119180],
['ASUS ROG Zephyrus G14', 'Ryzen 7 4800H', 8, 14, 'd .', 115990],
['ASUS ROG G14 GA401IV ', 'Ryzen 7 4800H', 16, 14, 'd .', 148499],
['ASUS ROG Zephyrus M15', 'Intel Core i7-10750H', 16, 14, 'd .', 127900],
['ASUS ROG Zephyrus G14', 'Ryzen 5 4600H', 8, 14, 'd .', 96990],
['ASUS ROG Zephyrus G', 'Ryzen 7 Quad .Core 3750H ', 16, 15.6, 'd .', 84990],
['ASUS ROG Zephyrus G15', 'Ryzen 7 4800H', 16, 15.6, 'd .', 106840],
['ASUS ROG-Strix G ', 'Intel Core i5-9300H', 8, 15.6, 'd .', 70990],
['ASUS ROG Strix Scar III G531GU ', 'Intel Core i7-9750H', 16, 15.6, 'd .', 188990],
['ASUS ROG G703', 'Intel Core i9-9980HK', 32, 17.3, 'd .', 399990],
['ASUS TUF Gaming FX505GT ', 'Intel Core i5-9300H', 8, 15.6, 'd .', 64990],
['ASUS Gaming A15 Laptop', 'Ryzen 5 4600H', 8, 15.6, 'd .', 63199],
['ASUS TUF Gaming F15', 'Intel Core i7-10870H', 8, 15.6, 'd .', 82990],
['ASUS TUF Gaming A15 Laptop', 'Ryzen 7 4800H', 16, 15.6, 'd .', 81799],
['ASUS TUF Gaming A17 ', 'Ryzen 7 4800H', 16, 15.6, 'd .', 91990]]

// for (let i=0,i<data.length, i++){
//     if (data[i][0].indexOf(companyName)>-1){
//         console.log(data[i])
//     }
// }
const showBtn=document.getElementById('btn')
const resultTable=document.getElementById("result-table")
let outputArray=[]
const submitBtn=document.getElementById('submit-btn')
const displayResults=document.getElementById('results')
submitBtn.addEventListener('click',function(){
    showBtn.style.opacity='100%'

    for (let i=0; i<data.length ; i++){
        if (data[i][0].indexOf(companyName)>-1 && data[i][1].indexOf(cpuName)>-1 && data[i][2]>=ramSize  && data[i][3]>=screenSize && data[i][4].indexOf(graphicsType)>-1 && data[i][5]<=budget){
            outputArray.push(data[i])
        }
    }
    companyName=' '
    cpuName=' '
    ramSize=0
    screenSize=0
    graphicsType=' '
    budget=1000000
    
})

showBtn.addEventListener('click',function(){
    const TableEl=document.getElementById('table-el')
    TableEl.innerHTML=`
      <tr>
          <th>Name</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>Screen</th>
          <th>Graphics</th>
          <th>Price</th>
      </tr>
    `
    // const TableEl=document.getElementById('table-el')
    for (let i=0; i<outputArray.length ;i++){
        htmlCode=`
    
        <tr>
        <td>${outputArray[i][0]}</td>
        <td>${outputArray[i][1]}</td>
        <td>${outputArray[i][2]}</td>
        <td>${outputArray[i][3]}</td>
        <td>${outputArray[i][4]}</td>
        <td>${outputArray[i][5]}</td>
        </tr>`
        TableEl.innerHTML+=htmlCode
    
    }
})
// const TableEl=document.getElementById('table-el')
// for (let i=0; i<outputArray.length ;i++){
//     htmlCode=`

//     <tr>
//     <td>${data[i][0]}</td>
//     <td>${data[i][1]}</td>
//     <td>${data[i][2]}</td>
//     <td>${data[i][3]}</td>
//     <td>${data[i][4]}</td>
//     <td>${data[i][5]}</td>
//     </tr>`
//     TableEl.innerHTML+=htmlCode

// }



