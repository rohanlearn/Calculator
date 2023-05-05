
const btns = document.getElementById("btns")
const inptBox= document.getElementById("input-box")
const eql = document.getElementById("btn-eq")

eql.addEventListener("click",finalsum)

btns.addEventListener("click",sensekey)
document.addEventListener("keydown",sensephysicalkey );
function sensephysicalkey(e){
    e.preventDefault()
    switch (e.code){
        case "Numpad1":
            inptBox.value+="1"
            break
        case "Numpad2":
            inptBox.value+="2"
            break
        case "Numpad3":
            inptBox.value+="3"
            break
        case "Numpad4":
            inptBox.value+="4"
            break
        case "Numpad5":
            inptBox.value+="5"
            break
        case "Numpad6":
            inptBox.value+="6"
            break
        case "Numpad7":
            inptBox.value+="7"
            break
        case "Numpad8":
            inptBox.value+="8"
            break
        case "Numpad9":
            inptBox.value+="9"
            break

        case "Numpad0":
            inptBox.value+="0"
            break
        case "NumpadAdd":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="+"
            }
           
            break 
        case "NumpadSubtract":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="-"
            }
            break   
        case "NumpadMultiply":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="*"
            }
            break   
        case "Backspace":
            if(inptBox.value!=""&&inptBox.value!="0"){
                 inptBox.value=inptBox.value.slice(0,inptBox.value.length-1)
            }else{
                inptBox.value=""
            }
            break 
         
        case "Enter":
            
        finalsum(e)
        
        break 
        }
}



function sensekey(e){
    e.preventDefault()
    
    switch (e.target.id){
        case "btn-1":
            inptBox.value+="1"
            break
        case "btn-2":
            inptBox.value+="2"
            break
        case "btn-3":
            inptBox.value+="3"
            break
        case "btn-4":
            inptBox.value+="4"
            break
        case "btn-5":
            inptBox.value+="5"
            break
        case "btn-6":
            inptBox.value+="6"
            break
        case "btn-7":
            inptBox.value+="7"
            break
        case "btn-8":
            inptBox.value+="8"
            break
        case "btn-9":
            inptBox.value+="9"
            break

        case "btn-0":
            inptBox.value+="0"
            break
        case "btn-pls":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="+"
            }
           
            break 
        case "btn-mns":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="-"
            }
            break   
        case "btn-*":
            if((inptBox.value!="") && (inptBox.value[inptBox.value.length-1]!="+"
            &&inptBox.value[inptBox.value.length-1]!="-"
            &&inptBox.value[inptBox.value.length-1]!="*")){
                inptBox.value+="*"
            }
            break   
        case "btn-bck":
            if(inptBox.value!=""&&inptBox.value!="0"){
                 inptBox.value=inptBox.value.slice(0,inptBox.value.length-1)
            }else{
                inptBox.value=""
            }
            break 
        
        case "btn-clr":
            
                inptBox.value=""
            
            break 
        }
}

function finalsum(e){
    e.preventDefault()
    a = eval(inptBox.value)

    if(a!=undefined){
        inptBox.value=eval(inptBox.value)

    }else{
        alert("please type valid expressions")
    }
    
}