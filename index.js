function bai1() {
    let f = 20.5;
    let b = true;
    let s = 'Hà Nội';

    document.write('<br/>');
    document.write('f = ' + f);
    document.write('<br/>');
    document.write('b = ' + b);
    document.write('<br/>');
    document.write('s = ' + s);
    document.write('<br/>');

}
function bai2() {
    let width = 20;
    let height = 10;
    let area = width * height;
    document.write('Area = ' + area);
}
function bai3() {
    let a = prompt("Nhap so a : ");
    let b = prompt("Nhap so b : ");
    if(a%b==0){
        alert(a + "la boi cua b" + b);
    }

}

bai1();
bai2();
bai3();