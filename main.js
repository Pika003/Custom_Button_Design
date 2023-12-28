const ColorName = document.getElementById("color");
const BgColor = document.getElementById("bg-color");
const Radious = document.getElementById("radious");
const TextName = document.getElementById("textname");
const Height = document.getElementById("heightvalue");
const Width = document.getElementById("widthvalue");

const CustomBtn = document.getElementById("custombtn");

const SubmitBtn = document.getElementById("submit");
const inputValue = document.querySelector('inputValue');


SubmitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(ColorName){
        CustomBtn.style.color = ColorName.value;
    }
    if(BgColor){
        CustomBtn.style.backgroundColor = BgColor.value;
    }
    if(Radious){
        CustomBtn.style.borderRadius = Radious.value;
    }
    if(TextName){
        CustomBtn.innerText = TextName.value;
    }
    if(Height){
        CustomBtn.style.height = Height.value;
    }
    if(Width){
        CustomBtn.style.width = Width.value;
    }
    
})
