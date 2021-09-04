var models=[
    {name: 'Bmw 418d',
    image: './img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'},
    {name: 'Mazda CX-3',
    image: './img/bugatti.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'},
    {name: 'Volvo S60',
    image: './img/lambo.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'},
    {name: 'Skoda Superb',
    image: './img/lamboyello(1).jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'},
    {name: 'Honda Civic',
    image: './img/merc.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'}
];

var index =0;

var slaytCount=models.length;
showSlide(index);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function() {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function() {
    index++;
    showSlide(index);
    console.log(index);
});

function showSlide(i) {

    index = i;
    if (i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
    document.querySelector(".card-title").textContent =models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    
}

