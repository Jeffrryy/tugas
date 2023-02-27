let nilai=prompt("masukin nilai", 0);
let hasil="";

switch(true){
    
    case  nilai >=90 && nilai <= 100:
        hasil="A"
        break;
        case  nilai >=80 && nilai <= 90:
            hasil="B"
            break;
            case  nilai >=70 && nilai <= 80:
        hasil="C"
        break;
        case  nilai >=60 && nilai <= 70:
        hasil="D"
        
        break;
        case nilai >= 0 && nilai <=60:
            hasil="F"
            break;
        default:
            hasil = "TIDAK ADA"; 
            document.write(`<h3> mohon maaf pilihan anda ${hasil}</h3>`)
}

if(hasil===""){
    document.write('<p>mohon maaf kamu tidak dapat apapun</p>')

}else{
    document.write(`<h2>nilai kamu ${hasil}`)
}