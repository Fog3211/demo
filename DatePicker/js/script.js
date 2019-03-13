var month_olypic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //闰年
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_name = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
//获取以上各个部分的id
var holder = document.getElementById("days");
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var month = document.getElementById("date-picker-month");
var year = document.getElementById("date-picker-year");
//获取当天的年月日
var current_date = new Date();
var current_year = current_date.getFullYear();
var current_month = current_date.getMonth();
var current_day = current_date.getDate();

//根据年月获取当月第一天是周几
function dayStart(month, year) {
    return new Date(year, month, 1).getDay();
}

function daysMonth(month, year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return month_olypic[month];
    } else {
        return (month_normal[month]);
    }
}

function refresh() {
    var str = "";
    var totalDay = daysMonth(current_month, current_year);
    var firstDay = dayStart(current_month, current_year);
    //添加每个月的空白部分
    for (var i = 0; i < firstDay; i++) {
        str += "<li></li>";
    }

    for (var i = 1; i <= totalDay; i++) {
        if (current_year == current_date.getFullYear() && current_month == current_date.getMonth() && i == current_day) {
            str += "<li " + "class = 'green greenbox'" + ">" + i + "</li>";
        } else {
            str += "<li>" + i + "</li>";
        }

    }
    holder.innerHTML = str;
    month.innerHTML = month_name[current_month];
    year.innerHTML = current_year;
};

refresh();
// 切换月份
pre.onclick = function (e) {
    e = e || window.event;
    current_month--;
    if (current_month < 0) {
        current_year--;
        current_month = 11;
    }
    refresh();
}

next.onclick = function (e) {
    e = e || window.event;
    current_month++;
    if (current_month > 11) {
        current_month = 0;
        current_year++;
    }
    refresh();
}