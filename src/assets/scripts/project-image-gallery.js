const btnBrightness = document.querySelector("#btn-brightness");
const featuredImg = document.querySelector("#featured-img");
const listImg = document.querySelector("#list-img");
const numbOfImages = 6;
const baseImg = {
    width: "1920",
    height: "1080",
    src() {
        return `https://picsum.photos/${this.width}/${this.height}?random=`
    },
    alt: "Random image"
};

featuredImg.width = baseImg.width;
featuredImg.height = baseImg.height;

for (let i = 1; i <= numbOfImages; i++) {
    const img = createRandomImg(baseImg, i);
    addImgToList(img, listImg);
    if (i === 1) {
        img.classList.add("img-gallery--active");
        featuredImg.src = img.src;
    }
}

listImg.addEventListener("click", function(e) {
    if (e.target.nodeName === "IMG") {
        const imgSelected = e.target;
        featuredImg.src = imgSelected.src;
        const prevActiveImg = document.querySelector(".img-gallery--active");
        prevActiveImg.classList.remove("img-gallery--active");
        imgSelected.classList.add("img-gallery--active");
    }
});

btnBrightness.addEventListener("click", function(e) {
    if (featuredImg.style.filter === "") {
        featuredImg.style.filter = "brightness(50%)";
        this.textContent = "Aclarar";
    } else {
        featuredImg.style.filter = "";
        this.textContent = "Oscurecer";
    }
});

function createRandomImg(baseImg, numOfImg) {
    const img = document.createElement("img");
    img.src = baseImg.src() + numOfImg;
    img.alt = baseImg.alt;
    img.width = baseImg.width;
    img.height = baseImg.height;
    img.tabIndex = "0";
    img.classList.add("img-gallery");

    return img;
}

function addImgToList(image, list) {
    const li = document.createElement("li");
    li.append(image);
    list.append(li);
}