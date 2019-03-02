 let imgArr = document.getElementsByTagName("img");
 let mask = document.getElementsByClassName("mask")[0];
 for (let i = 0; i < imgArr.length; i++) {
     imgArr[i].addEventListener("mousemove", function () {
         var div = document.createElement("div");
         div.innerHTML =
             `
                <div class="show-box">
            <img src="${imgArr[i].src}" class="show-img">
        </div>
                `;
         flag = i;
         document.getElementsByTagName("body")[0].appendChild(div);
         mask.style.display = "block";
     });
 }
 mask.onclick = function () {
     mask.style.display = "none";
     document.getElementsByClassName("show-box")[0].remove();
 }