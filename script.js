let weightinput=document.getElementById("weight");
let heightinput=document.getElementById("height");
let calbutton=document.getElementById("cal-button");
let output=document.getElementById("output")
let img=document.getElementById("img")
let bmiresult=0
let result=""
let bmi=0
let warpper=document.querySelector(".Warpper")
var id=[]
let color
let tbody=document.querySelectorAll("tr")
let hightlight

calbutton.addEventListener('click',()=>{
    try{
    hightlight=document.getElementById(String(id[0]))
    hightlight.style.backgroundColor=""
    id.pop()
    }
    catch{
        //pass
    }
    
    let weight=Number(weightinput.value);
    let height=Number(heightinput.value);
    height=height/100

    if(height ===0 || weight===0){
        output.style.color="red"
        output.innerHTML="กรุณาป้อนข้อมูลให้ครบ"
        return 
    }
    else if(isNaN(height) || isNaN(weight)){
        output.style.color="red"
        output.innerHTML="กรุณาป้อนข้อมูลเป็นตัวเลขเท่านั้น"
        return 
    }
    bmi=weight/(height*height);

    if(bmi>30){
        result="โรคอ้วนอันตราย"
        img.src="veryfat.png"
        id.push(5)
        color="#a62941"
        
        
    }
    else if(bmi>25){
        result="โรคอ้วน"
        img.src="veryfat2.png"
        id.push(4)
        color="#f89f51"
    }
    else if(bmi>23){
        result="น้ำหนักเกิน"
        img.src="fat.png"
        id.push(3)
        color="#fdd10b"
    }
    else if(bmi>18.5){
        result="สมส่วน"
        img.src="ok.png"
        id.push(2)
        color="#73c7a2"
    }
    else{
        result="น้ำหนักต่ำกว่าเกณฑ์"
        img.src="skinny.png"
        id.push(1)
        color="#88b7d8"
    }
    
    
    hightlight=document.getElementById(String(id[0]))
    output.style.color=color
    hightlight.style.backgroundColor=color
    output.innerHTML=String(bmi.toFixed(2))+"<br>"+result}
)

