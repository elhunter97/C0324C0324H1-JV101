let month = +prompt("Input month");
let year = +prompt("Input year");
if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month ==12 ){
    alert("Thang "+month+" co 31 ngay");
} else if (month == 4 || month == 6 || month == 9 || month == 11){
    alert("Thang "+month+" co 30 ngay");
} else if (month == 2){
    if(year % 4 == 0 && year % 100 !=0){
        alert("Thang " +month + " "+ year + " co 29 ngay");
    } else if (year % 400 == 0){
        alert("Thang " +month + " "+ year + " co 29 ngay");
    } else {
        alert("Thang " +month + " "+ year + " co 28 ngay");
    }
} else {
    alert("Thang khong hop le");
}
