window.onload= function(){
ispisMeni();
ispisFuter();
 var video=document.querySelector("video").volume=0.175;
}
// J-QUERY
$(document).ready(function(){
    $(".form").focus(function(){
      $(this).css("border-bottom-color", "var(--hBoja)");
    });
    $(".form").blur(function(){
      $(this).css("border-bottom-color", "var(--Black)");
    });

     $("#btnSubmit").click(provera);

     $("#program ul li").click(function(){
         $(this).next().slideToggle("slow");
     })
     $(".description").click(function(){
        window.location = "program.html";
     })
     $(".description").hover(function(){
        $(this).css("cursor","pointer");
        $(this).css({"background":"linear-gradient(45deg, rgba(252, 107, 41,0.8),rgba(253, 241, 65,0.8))","transition":"0.7s"});
     },function(){
        $(this).css({"background":"rgba(0,0,0, 0.6)","transition":"1s"});
     })
     $('.slickCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
  });

var url=window.location.href;
        // Kreiranje menija
        var link=["Home", "About Us","Membership","Program","Contact","Author"];
        var putanja=["index.html", "index.html#about","index.html#membership","program.html","contact.html","author.html"];
function ispisMeni(){
        var nav=document.getElementsByTagName("nav")[0];
        var ul=document.createElement("ul");
        var li="";
        for(let i=0; i<link.length;i++){
            
            li+=`<li><a class="navLink" href=${putanja[i]}>${link[i]}</a></li>`;
        }
        ul.innerHTML+=li;
        nav.appendChild(ul);
        function ActiveLink(){
            var navLink= document.getElementsByClassName("navLink");
            for(let i=0; i<navLink.length;i++){
                if(url.search(navLink[i].getAttribute("href"))!=-1){
                    navLink[i].classList.add("active");
                }
            }
        }
        ActiveLink();
}
        //Kreiranje footer-a
function ispisFuter(){
    var futer = document.getElementsByTagName("footer")[0];
    futer.classList.add("d-flex-sp-ar")
    var futerLogo = document.createElement("div");
    futerLogo.classList.add("okvir");
    var futerIcon = document.createElement("div");
    futerIcon.setAttribute("id","futerIcon");
    futerIcon.classList.add("okvir");
    var futerLink = document.createElement("div");
    futerLink.classList.add("okvir");
    var copyright= document.createElement("div");
    copyright.setAttribute("id","futerCopy");
    //LINKOVI ISPIS
    var ul= document.createElement("ul");
    var li="";
    for (let i=0; i<link.length; i++){
        li+= `<li><a href="${putanja[i]}">${link[i]}</a></li>`;
    }
    ul.innerHTML=li;
    futerLink.appendChild(ul);
    futer.appendChild(futerLink);
    // LOGO ISPIS
    var logo= `<a class="logo" href="index.html"><span><i class="left-bar"></i>Spartans<i class="right-bar"></i></span></a>`;
    futerLogo.innerHTML=logo;
    futer.appendChild(futerLogo);
    //IKONICE ISPIS
    var ikoniceNiz= 
    [
        ["fa fa-facebook-square","https://www.facebook.com/"],
        ["fa fa-instagram","https://www.instagram.com/?hl=sr"],
        ["fa fa-sitemap","sitemap.xml"],
        ["fa fa-archive","dokumentacija.pdf"]
    ];
    var ul1=document.createElement("ul");
    li="";
    for(let i=0; i<ikoniceNiz.length;i++){
        li+=`<li> <a class="ikonica" href="${ikoniceNiz[i][1]}" target="_blank"><i class="${ikoniceNiz[i][0]}" aria-hidden="true"></i></a></li>`
    }
    ul1.innerHTML=li;
    futerIcon.appendChild(ul1);
    futer.appendChild(futerIcon);
    var datum= new Date();
    copyright.innerHTML=`<p>COPYRIGHT &copy${datum.getFullYear()} Created by Jovana Lazarevic</p>`
    futer.appendChild(copyright);
}

// INDEX
if (url.indexOf("index.html")!=-1){
    // Headline
    var naslovi=[
        ["Crossfit is for","Everyone"],
        ["Crossfit","Gym"]
    ];
    var naslovnaSlika=["slike/pozadina_1.jpg","slike/pozadina_2.jpg"];
    var headline= document.getElementById("headline");
    for(let i=0; i<naslovi.length; i++){
        headline.innerHTML+= `
            <div class="headline-content slide">
                <h1>${naslovi[i][0]}<span>${naslovi[i][1]}</span></h1>
            </div>
        `
    }
    var slideIndex=0;
    SlideShow();    
    function SlideShow(){
        var headlineContent= document.getElementsByClassName("headline-content");
        for(let i=0; i<headlineContent.length; i++){
            headlineContent[i].style.display="none";
        }
        slideIndex++;
        if(slideIndex>headlineContent.length){
            slideIndex=1;
        }
        headlineContent[slideIndex-1].style.display="block";
        setTimeout(SlideShow, 4000);
        }

    
    var aboutSlike=[["slike/img_5.jpg","pilates"],
                   ["slike/img_6.jpg","weight lifting"],
                   ["slike/img_3.jpg","gym equipment"]
    ];
    var aboutLeft= document.getElementById("about-left");
    var sadrzajAbout="";
    for(let i=0; i<aboutSlike.length; i++){
        sadrzajAbout += `<img src="${aboutSlike[i][0]}" alt="${aboutSlike[i][1]}"/>`;
    }
    aboutLeft.innerHTML+=sadrzajAbout;
    
    // VIDEO
document.getElementById('control').addEventListener('click',function(){
    document.querySelector('.sakrijVideo').classList.add('neSakrijVideo');
    setTimeout(function(){
        document.getElementById('video').play();
    },1000)
})
document.getElementById('zatvoriVideo').addEventListener('click',function(){
    document.querySelector('.sakrijVideo').classList.remove('neSakrijVideo');
    document.getElementById('video').pause();
})

var slider= document.querySelector("#slider");
var membershipContent = [
    ["Boxing","Learn to fight like a true spartan"],
    ["Cardio","Run, jump, attack your goal"],
    ["Muscle sculpt","Build up your armour"],
    ["Fitness","Get in shape, stay in shape"],
    ["Yoga","Relax your spartan mind"],
    ["Fat burn","Melt down the weight"]
];

for(let i=0; i<membershipContent.length;i++){
    let div=document.createElement("div");
    div.setAttribute("id",`sliderDiv${i}`);
    div.classList.add("slider");
    let desc= document.createElement("div")
    desc.classList.add("description","center")
    desc.innerHTML=`<h4>${membershipContent[i][0]}</h4><br/><p>${membershipContent[i][1]}</p>`;
    div.appendChild(desc);
    slider.appendChild(div);
}

    var pricingDiv = document.getElementById("pricing");
    var pricingContent= [["Basic","21","1 month","12 terms per month","one daily access"],
    ["Classic","25","1 month","16 terms per month","one daily access"],
    ["Premium","32","1 month","28 terms per month","one daily access"],
    ["Classic S","55","3 months","18 terms per month","one daily access"],
    ["Classic M","100","6 months","18 terms per month","two daily accesses"],
    ["Classic L","180","12 months","20 terms per month","two daily access"]
];
    for(let i=0; i<pricingContent.length; i++){
        let pDiv= document.createElement("div");
        console.log(pDiv);
        pDiv.classList.add("pricingBox","m-top-btm");
        pDiv.innerHTML= `
            <h3><mark>${pricingContent[i][0]}</mark></h3>
            <span><sup>$</sup>${pricingContent[i][1]}<span>
            <hr/>
            <p>${pricingContent[i][2]}</p>
            <p>${pricingContent[i][3]}</p>
            <p>${pricingContent[i][4]}</p>
        `;
        pricingDiv.appendChild(pDiv);
    }
}
// PROGRAM PAGE
if(url.indexOf("program.html")!=-1){
    var programNameSingle= ["Cardio training","Boxing","Guided training","Guided functional training","Personal training"];
    var photosSingle=["slike/img_10.jpg","slike/img_7.jpg","slike/img_13.jpg","slike/img_14.jpg","slike/img_15.jpg"]; 
    var programNameGroup=["Full Body Workout","Mix Aerobic","Core Workout","Cardio Box","Yoga","Zumba"];
    var photosGroup=["slike/img_14.jpg","slike/img_16.jpg","slike/img_17.jpg","slike/img_1.jpg","slike/img_2.jfif","slike/img_12.jfif"];
    var programLeft= document.getElementById("program-left");
    var programRight= document.getElementById("program-right");
    ul="<ul>";
    for(let i=0; i<programNameSingle.length;i++){
        ul+=`<li><a><i class="fa fa-plus-circle"></i>${programNameSingle[i]}</a></li>
                <div class="hiddenContent invisible">
                <img src="${photosSingle[i]}" alt="${programNameSingle[i]}"/>
                <p>Zumba is a fitness program that combines Latin and international music with dance moves.
                 Zumba routines incorporate interval training — alternating fast and slow rhythms
                  — to help improve cardiovascular fitness.</p>
                <a href="#!"> Learn more</a>
                </div>
        `;
    }
    ul+="</ul>";
    programLeft.innerHTML+=ul;
    ul="<ul>";
    for(let i=0; i<programNameGroup.length;i++){
        ul+=`<li><a><i class="fa fa-plus-circle"></i>${programNameGroup[i]}</a></li>
        <div class="hiddenContent invisible">
        <img src="${photosGroup[i]}" alt="${programNameGroup[i]}"/>
        <p>Zumba is a fitness program that combines Latin and international music with dance moves.
         Zumba routines incorporate interval training — alternating fast and slow rhythms —
          to help improve cardiovascular fitness.</p>
        <a href="#!"> Learn more</a>
        </div>
        `;
    }
    ul+="</ul>";
    programRight.innerHTML+=ul;
 
 var counterArray=[["250","Happy Customers","customers"],["0","Perfect Bodies","body"],
    ["650","Working Hours","workHours"],["0","Succes Stories","story"]];
    var counterDiv=document.getElementById("counter-overlayer");
    for(let i=0; i<counterArray.length;i++){
        var counterBox = document.createElement("div");
        counterBox.innerHTML=`<strong class="number">${counterArray[i][0]}</strong><span>${counterArray[i][1]}</span>`;
        counterDiv.appendChild(counterBox);
        counterBox.firstChild.setAttribute("id",`${counterArray[i][2]}`);  
    }
    function counter(){
        var customers= $("#customers").text();
        var body=$("#body").text();
        var hours=$("#workHours").text();
        var story= $("#story").text();
        if(customers<800){
            $("#customers").text(++customers);
        }
        if(body<359){
            $("#body").text(++body);
        }
        if(hours<1060){
            $("#workHours").text(++hours);
        }
        if(story<580){
            $("#story").text(++story);
        }
        setTimeout(counter, 10);
    }
    counter();
}

// CONTACT PAGE
if(url.indexOf("contact.html")!=-1){
    var testimonialDiv= document.getElementById("testimonials");
    var drzac= document.createElement("div");
    drzac.setAttribute("id","story-holder");
    drzac.classList.add("d-flex-sp-ar","slickCarousel");
    drzac.classList.add("tDiv");
    var sadrzaj=[
        ["slike/utisak_1.jfif","Zoe Kravitz","Economist","Great experience, great working atmosphere and admirable coaches"],
        ["slike/utisak_2.jfif","Michael Douglas","Photographer","Seriously, the best gym in town, i advise evryone to join!"],
        ["slike/utisak_3.jfif","Kate Winslet","Student","Group classes are great, join the Zumba course, you'll have fun and get in good shape"],
        ["slike/utisak_4.jpg","Kevin Costner","Lawyer","The equipment is top-notch, very good exercise programs and awesome crew"],
        ["slike/utisak_5.jfif","Christian Bale","Athlete","Break your limits in the best place in town!"]
    ];
    for(let i=0; i<sadrzaj.length;i++){
        var drzacContent = document.createElement("div");
        drzacContent.classList.add("story-content","center");
        drzacContent.innerHTML=`
            <div id="clientPic${i}"class="clientPic"><img src="${sadrzaj[i][0]}" alt="female"/></div>
            <h4>${sadrzaj[i][1]}</h4>
            <span><mark>${sadrzaj[i][2]}</mark></span>
            <p>${sadrzaj[i][3]}</p>
        `;
        drzac.appendChild(drzacContent);
    }
    testimonialDiv.appendChild(drzac);
    
}
  // PROVERA FORME

function provera(e){
    e.preventDefault();

    var email, ime, subject, message, reEmail, reIme, reSub, reMess;
    var errors= [];
    var provera=true;

    email = document.getElementById("tbEmail");
    ime = document.getElementById("tbName");
    subject = document.getElementById("tbSubject");
    message = document.getElementById("taMessage");
    reIme= /^[A-Z][a-z]{2,12}(\s[A-z][a-z]{2,12})+$/;
    reEmail= /^([a-z]{3,}\d{0,}\@((gmail|yahoo)\.com)|ict\.edu\.rs)|([a-z]{3,}\d{0,}\.[a-z]{3,}\d{0,}\@((gmail|yahoo)\.com)|ict\.edu\.rs)$/;
    reSub= /^([A-z][a-z]{0,}\d{0,})|([A-z][a-z]{0,}\d{0,}(\s([A-Z]{0,}|[a-z]{0,}){0,}\d{0,}))+$/;
    reMess= /^([A-z\d\.])+/;

    //PROVERA IME

    if(!reIme.test(ime.value)){
        $("#tbName").css("border-bottom-color","#ee0f0f").attr("placeholder","eg. Rafael Nadal");
        errors.push("Name: Rafael Nadal");
        provera=false;
    }
    else{
        $("#tbName").css("border-bottom-color","#08b108")
    }

//PROVERA EMAIL

    if(!reEmail.test(email.value)){
        $("#tbEmail").css("border-bottom-color","#ee0f0f").attr("placeholder","eg. rafael@gmail.com");
        errors.push("Email: rafael.nadal@gmail.com");
        provera=false;
    }
    else{
        $("#tbEmail").css("border-bottom-color","#08b108")

    }
    //PROVERA SUBJECT

    if(!reSub.test(subject.value)){
        $("#tbSubject").css("border-bottom-color","#ee0f0f").attr("placeholder","eg. Your question");
        provera=false;
        errors.push("Subject: Text");
    }
    else{
        $("#tbSubject").css("border-bottom-color","#08b108");
    }
    //PROVERA MESSAGE

    if(!reMess.test(message.value)){
        $("#taMessage").css("border-bottom-color","#ee0f0f").attr("placeholder","eg. Hello there, type your message!");
        provera=false;
        errors.push("Message: message text");
    }
    else{
        $("#taMessage").css("border-bottom-color","#08b108")
       
    }
console.log(errors);
    if(!provera){
        $("#submitMessage").html(`Please fill out the form correctly!!`);
        $("#submitMessage").removeClass("Success").addClass("Error");
        if(errors.length>0){
            for(let i=0; i<errors.length; i++){
                document.getElementById("submitMessage").innerHTML+=`<span>${errors[i]}</span>`;
            }
        }
    }
    else{
        $("#submitMessage").html("Message was sent succesfully");
        $("#submitMessage").removeClass("Error").addClass("Success");
    }
}
