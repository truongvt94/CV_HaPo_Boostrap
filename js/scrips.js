let j = 9;
let height = ["200px","400px","200px","200px","200px","400px","200px","200px","200px","200px"];
let heightmoblie = ["109px","218px","109px","109px","109px","218px","109px","109px","109px","109px"];
let bg = ["#FD7038","#EECD10","#2F2FA1","#F64C71","#333333","#EF5B5B","#F9BC2D","#F64C71","#333333","#FD7038"];
for (i = 0; i < j; i++) {
let div_img = "<div style='height:"+height[i]+"; background-color:"+bg+"' class=\"cv-center project-ni\"><img src=\"images/project.jpg\"></div>";
let div_img_black = "<div style='height:"+height[a]+";background-color:"+bg[a]+"' class=\"cv-center\"><img src=\"images/project-black.jpg\" style='width: 220px;'></div>";
        /*<div class="cv-center project-img-for project-san">
        <img src="images/project-black.jpg" style="width: 220px;">
        </div>
        <div class="cv-center project-ni project-img-five">
        <img src="images/project.jpg">
        </div>*/
    if(i%10 == 0){
        $(".project-one").append(div_img);
    }
    if(i%10 == 1){
        $(".project-two").append(div_img_black);
    }
    if(i%10 == 2){
        $(".project-three").append(div_img);
    }
    if(i%10 == 3){
        $(".project-for").append(div_img);
    }
    if(i%10 == 4){
        $(".project-one").append(div_img);
    }
    if(i%10 == 5){
        $(".project-two").append(div_img_black);
    }
    if(i%10 == 6){
        $(".project-three").append(div_img);
    }
    if(i%10 == 7){
        $(".project-for").append(div_img);
    }
    if(i%10 == 8){
        $(".project-one").append(div_img);
    }
    if(i%10 == 9){
        $(".project-one").append(div_img);
    }
}

var skpc = ["80%","65%","50%"];
    var skn = ["TEAMWORK","ENGLISH","JAPANESE"];
    for(a = 0;a < skpc.length ;a++) {
        let skilladd = '<div class="team-chart mx-1 mr-md-4 ml-md-4 row">'+skn[a]+'<br><div class="col-md-12 team-chart-div mt-4"><div class="col-md-12 p-0 d-flex justify-content-end team-chart-one style="width:'+skpc[a]+'"><span class="team-chart-span mt-3 ">'+skpc[a]+'</span></div> </div> </div><br>';
        $(".btn-edit-sumary").parents('.team-chart').before(skilladd);
    }

    $(".btn-edit-sumary").click(function() {
        skpc.push("65%");
        skn.push("PERSONAL SKILL NAME");
        var skilladd = '<div class="team-chart mx-1 mr-md-4 ml-md-4 row">'+skn[a]+'<br><div class="col-md-12 team-chart-div mt-4"><div class="col-md-12 p-0 d-flex justify-content-end team-chart-one style="width:'+skpc[a]+'"><span class="team-chart-span mt-3 ">'+skpc[a]+'</span></div> </div> </div> <br>';
        $(".btn-edit-sumary").parents('.team-chart').before(skilladd);
    });

    <div contenteditable="true" class="item-one p-2 border mb-4 border-white mr-0 mr-md-3 mr-lg-3">
    <h4>(2010 - 2019) ABC COMPANY</h4>
    <p class="p-0 m-1">Developer</p>
    <p class="p-0 m-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
    </div>

    let title = ["(2010 - 2020)", "(2010 - 2020)", "(2010 - 2020)"];
    let developer = ["Developer", "Developer", "Developer"];
    let loren = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy"];

    for(a = 0; a < title.length; a++){
        let experince = '<div contenteditable="true" class="item-one p-2 border mb-4 border-white mr-0 mr-md-3 mr-lg-3"><h4>'+title[a]+' ABC COMPANY</h4><p class="p-0 m-1">'+developer[a]+'</p><p class="p-0 m-1">'+loren[a]+'</p></div>';
        $(".btn-add-experince").parents('.box').before(experince);
    }
    $(".btn-add-experince").click(function() {
        title.push("(2010 - 2020) ACEDAMY");
        developer.push("Developer");
        loren.push("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy");
        $(".btn-experince").empty();
        for(a = 0; a < title.length; a++){
            let experince = '<div contenteditable="true" class="item-one p-2 border mb-4 border-white mr-0 mr-md-3 mr-lg-3"><h4>'+title[a]+' ABC COMPANY</h4><p class="p-0 m-1">'+developer[a]+'</p><p class="p-0 m-1">'+loren[a]+'</p></div>';
            $(".btn-add-experince").parents('.box').before(experince);
        }
    });

    <div class="col-6 col-sm-4 col-md-6 col-lg-4 position-relative" style="" data-percentage="50">
    <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862">
    <circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle>
    <circle class="circle-chart__circle success-stroke" stroke-dasharray="75,100" cx="16.9" cy="16.9" r="15.9">
    </circle>
    <g class="circle-chart__info">
    <text class="circle-chart__percent" x="17.9" y="15.5"></text>
    </g>
    <span class="span-white-per-number" contenteditable="true">75%</span>
    </svg>
    <span class="span-white-per-text p-0 m-0" contenteditable="true">HTML/CSS</span>
    </div>

    <div id="truong" class="owl-carousel owl-theme">
    <div class="slide item row">
    <div class="slide-img col-md-3 d-flex justify-content-center">
    <img class="" src="images/avatar-ref.jpg" alt="">
    </div>
    <div class="slide-text col-md-9 position-relative ">
    <p contenteditable="true"><span class="slide-sapn slide-sapn-one position-absolute">“</span>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span class="slide-sapn slide-sapn-two position-absolute">”</span>
    </p>
    </div>
    </div>