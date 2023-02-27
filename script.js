
// switch case
// percabangan switch/case adalah bentuk lain dari percabangan if/esle/if
// switch(variabel){
//     case "value":
// //code
// break;
// case "value":
//     //code
//     break;
//     default:
//         //code



//contoh
let hadiah=prompt("silahkan pilih hadiah mu dari 1-5!");
let hasilHadiah ="";

switch(hadiah){
    case "1":
        hasilHadiah="ipon max 14";
        break;
        case "2":
            hasilHadiah="asus tuf f15";
            break;
            case "3":
                hasilHadiah="calya";
                break;
                case "4":
                hasilHadiah="zong";
            break;
            case "5":
                hasilHadiah="franchise mixue";
                break;
                default:
                    hasilHadiah="tidak ada"
                    document.write(`<h3>oops! pilihan anda ${hasilHadiah}</h3>`);


}
if(hasilHadiah===""){
    document.write('<p>mohon maaf kamu tidak dapat apapun</p>')

}else{
    document.write(`<h2>selamat kamu mendapatkan ${hasilHadiah}`)
}
