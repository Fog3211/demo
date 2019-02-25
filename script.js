var container = document.getElementById("container");

var count = 10;

window.onload = printInit();

function printInit() {
    var first, box;
    while (count--) {
        if (!first) {
            /*  利用对象的引用,相当于
                 box = document.createElement("div");
                 first=box; 
             */
            first = box = document.createElement("div");
        }
        var inner_box = document.createElement("div");
        box.appendChild(inner_box);
        box = inner_box;
    }
    // 类似尾插法链表
    container.appendChild(first);
}