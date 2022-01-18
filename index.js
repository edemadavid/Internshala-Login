


document.querySelector(".page1").addEventListener("click", function() {
    
    document.querySelector("#page1").style.display = "none"
    document.querySelector("#page2").style.display = "block";
})

document.querySelector(".page2").addEventListener("click", function() {
    
    
    document.querySelector("#page2").style.display = "none"
    document.querySelector("#page3").style.display = "block";
    // console.log("checking")
})


document.querySelector(".page3").addEventListener("click", function() {
    
    
    document.querySelector("#page3").style.display = "none"
    document.querySelector("#page4").style.display = "block";
    // console.log("checking")
})