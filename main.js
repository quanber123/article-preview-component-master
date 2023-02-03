const share = document.querySelector("#share-ic");
const shareLinks = document.querySelector(".share-links")
share.addEventListener('click', function(){
    if(shareLinks.classList.contains("share-links")){
        shareLinks.classList.remove("share-links");
        shareLinks.style.display ="none";
    }else{
        shareLinks.classList.add("share-links");
        shareLinks.style.display = "flex";
    }
})