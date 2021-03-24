const clearID = () => {
    let imgs = document.querySelectorAll(".imgs");
    imgs.forEach((e) => {
        e.removeAttribute("id");
    })
    assignImgs();
}

//replaces the child of each parent div with the previous parent divs child
const movePrev = () => {
    let children = document.querySelector(".img-div").children;
    let count = children.length;
    let sec = count - (count - 2);
    const firstCln = document.getElementById("slide1").cloneNode(true);
    for (let i = count; i > 0; i--) {
        let j = i + 1;
        let nextParent = document.getElementById(i);
        let nextChild = nextParent.children[0];
        let cln = nextChild.cloneNode(true); 
        if (j != sec) { 
            if(j > count) {
                j = 1;
            }
            let thisParent = document.getElementById(j);
            let thisChild = thisParent.children[0];
            let aParent = thisChild.parentNode;
            aParent.replaceChild(cln, thisChild);
        } else { 
            let thisParent = document.getElementById(j);
            let thisChild = thisParent.children[0];
            let aParent = thisChild.parentNode;
            aParent.replaceChild(firstCln, thisChild);
        }
        //resets ID names after loop has complete
        if (i === 1) {
            clearID();
        }
    }
}

//replaces the child of each parent div with the following parent divs child
const moveNext = () => {
    let children = document.querySelector(".img-div").children;
    let count = children.length;
    const firstCln = document.getElementById("slide1").cloneNode(true);
    for (let i = 1; i <= count; i++) {
        let j = i + 1;
        let thisParent = document.getElementById(i);
        let thisChild = thisParent.children[0];
        let aParent = thisChild.parentNode;
        if (j <= count) {
            nextParent = document.getElementById(j);
            let nextChild = nextParent.children[0];
            let cln = nextChild.cloneNode(true);
            aParent.replaceChild(cln, thisChild);
        } else if (j > count) {
            aParent.replaceChild(firstCln, thisChild);
            //resets ID names
            clearID();
        }
    }
}

const nextBtn = () => {
    const next = document.getElementById("next-btn");
    next.addEventListener("click", function() {
        //animateNext(); add this feature later
        moveNext();
    })
}

const prevBtn = () => {
    const prev = document.getElementById("prev-btn");
    prev.addEventListener("click", function() {
        movePrev();
    })
}

const assignImgs = () => {
    //assigns numbered id's to each image's parent div
    let children = document.querySelector(".img-div").children;
    for (let i = 0; i < children.length; i++) {
        let testChild = children[i];
        testChild.id = i + 1;
    }
    //assigns numbered id's to each image
    let count = document.querySelector(".img-div").children.length;
    for (let i = 1; i <= count; i++) {
        let parent = document.getElementById(i);
        let child = parent.children;
        let childImg = child[0];
        childImg.id = "slide" + i;
    }
}

(function () {
    assignImgs();
    prevBtn();
    nextBtn();
})();

