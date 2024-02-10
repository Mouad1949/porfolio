

// =========================typing animation ==================
var typed = new Typed(".typing",{
    strings:["full Stack","Front End","Back End"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
// ========================== Aside =================================
const nav =document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            
            removeBackSection();
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
             
            if(window.innerWidth > 1200){
                this.classList.add("active")
                showSection(this)
            }
            else if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
                this.classList.add("active")
                showSection(this)
            }
        })
    }
    function removeBackSection(){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element)
    {
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const traget = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + traget).classList.add("active");
        if(traget === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active")
        }
      
    }
    function updateNav(element)
    {
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const traget = element.getAttribute("href").split("#")[1];
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");

        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        // for(let i=0;i<totalSection;i++){
        //     allSection[i].classList.toggle("open");

        // }
    
        
        
    }
    
// ===================Send Email ==============

function sendEmail(){
    var params = {
        name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_cdxz72o";
    const templateID = "template_jkwltxa";
    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        // console.log(res);
        alert('Your message sent successfully');
    }).catch((err) => console.log(err));
}
