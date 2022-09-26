import loadImage from './load-image';

    let addImg = (src) => {
        let imgElement = document.createElement("img");
        imgElement.srs = src;
        document.body.appendChild(imgElement)
    }

    Promise.all([
        loadImage('./cat1.jpg'),
        loadImage('./cat2.jpg'),
        loadImage('./cat3.jpg')
    ]).then((images) => {
        images.forEach(img => addImg(img.src))
})