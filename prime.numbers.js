let sayi = Number(prompt('Bir sayi giriniz:'));
let sonuc = true;

for(sayi==0; sayi==1;){
    sonuc=false;
    break;
}
for(sayi==1; sayi==0;){
    sonuc=false;
    break;
}

for(let i=2; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi+' asaldir.');
}else{
    alert(sayi+' asal degildir.');
}