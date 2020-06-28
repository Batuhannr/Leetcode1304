n = prompt("Lütfen Kümenin Kaç Elemanlı Olacağını Giriniz");
ust = 100
alt = -100
Math.rastgele=function(alt, ust){
 
    let sayi=Math.random(); 
    sayi=sayi*(ust-alt);
    sayi=Math.floor(sayi)+alt;
     
    return sayi;

}
var sayilar = new Array();
if (n == 1) {
    sayilar.push(0)
    document.write(sayilar)
}
else if (n == 2) {
    sayilar.push(-1,1)
    document.write(sayilar)
}
else if (n == 3) {
    sayilar.push(-1,0,1)
    document.write(sayilar)
}
/*else if (n == 4) {
    sayilar.push(-2,-1,1,2)
    document.write(sayilar)
}
else if (n == 5) {
    sayilar.push(-2,-1,0,1,2)
    document.write(sayilar)
}
else if (n == 6) {
    sayilar.push(-3,-2,-1,1,2,3)
    document.write(sayilar)
}
else if (n == 7) {
    sayilar.push(-3,-2,-1,0,1,2,3)
    document.write(sayilar)
}
else if (n == 8) {
    sayilar.push(-4,-3,-2,-1,1,2,3,4)
    document.write(sayilar)
}
else if (n == 9) {
    sayilar.push(-4,-3,-2,-1,0,1,2,3,4)
    document.write(sayilar)
}
else if (n == 10) {
    sayilar.push(-5,-4,-3,-2,-1,1,2,3,4,5)
    document.write(sayilar)
}
else if (n == 11) {
    sayilar.push(-5,-4,-3,-2,-1,0,1,2,3,4,5)
    document.write(sayilar)
}
else if (n == 12) {
    sayilar.push(-6,-5,-4,-3,-2,-1,1,2,3,4,5,6)
    document.write(sayilar)
}
else if (n == 4) {
    sayilar.push(-2,-1,1,2)
    document.write(sayilar)
}
else if (n == 4) {
    sayilar.push(-2,-1,1,2)
    document.write(sayilar)
}
else if (n == 4) {
    sayilar.push(-2,-1,1,2)
    document.write(sayilar)
}*/
else if (n == 4){
    g;
    sayi1=Math.random(-100,100)
    sayi2=Math.random(-100,100)
    sayi3=Math.random(-100,100)
    sayi4=Math.random(-100,100)
    if (sayi1+sayi2+sayi3+sayi4 == 0){
        sayilar.push(sayi1,sayi2,sayi3,sayi4)
        document.write(sayilar) 
    }
    else {
        return g;
    }
}