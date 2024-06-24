// using 'innerHTML'
//https://stackoverflow.com/questions/30148661/innerhtml-to-execute-multiple-lines

document.getElementById("sidebar").innerHTML =  "<button class=\"dropdown-btn\">index<i class=\"fa fa-caret-down\"></i></button>" +
                                                "    <div class=\"dropdown-container\">" +
                                                "        <a href=\"./page03.html\">article1</a>" +
                                                "        <a href=\"./page04.html\">article2</a>" +
                                                "    </div>" +

                                                "<a href=\"./index.html#article1\">index</a>" +

                                                "<button class=\"dropdown-btn\">portfolio<i class=\"fa fa-caret-down\"></i></button>" +
                                                "    <div class=\"dropdown-container\">" +
                                                "        <button class=\"dropdown-btn\">educational game<i class=\"fa fa-caret-down\"></i></button>" +
                                                "            <div class=\"dropdown-container\">" +
                                                "                <button class=\"dropdown-btn\">vocabulary<i class=\"fa fa-caret-down\"></i></button>" +
                                                "                    <div class=\"dropdown-container\">" +
                                                "                    </div>" +
                                                "            </div>" +
                                                "    </div>" +

                                                "    <button onclick=\"document.location='default.asp'\">test1</button>" +
                                                "    <button onclick=\"document.location.href='www.google.com'\">test2</button>" +
                                                "    <a onclick=\"document.location.href='www.google.com'\">test3</a>" +
                                                "    <a class=\"dropdown-btn\" href=\"./page08.html#article4\">test4</a>" +
                                                "    <div class=\"dropdown-btn\" > <a href=\"./page08.html#article4\">test4</a></div>" +
                                                "<a href=\"#top\">top page</a>";
                                                





//   DROPDOWNS
//       loop through all dropdown buttons to toggle between hiding
//       nad showing its dropdown content. this allows the user to
//       have multiple dropdowns withut any conflict
   

var dropdown = document.getElementsByClassName("dropdown-btn");

var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click",
        function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
            } else {
              dropdownContent.style.display = "block";
            }
        }
    );
}
