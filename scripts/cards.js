const gallery = $('.gallery');

// VARIABLES
const slideDownDuration = 2000;
const slideUpDuration = 1500;
const people = [];
const colorsCard = ["flaticon-symbol-of-spades", "flaticon-heart", "flaticon-diamond", "flaticon-clover-ace"];

people[0] = new People("XXXXX", "https://picsum.photos/id/1/220/300", ["https://picsum.photos/id/8/220/300", "https://picsum.photos/id/15/220/300"], "J", colorsCard[0], "25", "JAKIŚ OPIS DLA XXXXX", "");
people[1] = new People("ZZZZZ", "https://picsum.photos/id/2/220/300", ["https://picsum.photos/id/5/220/300", "https://picsum.photos/id/17/220/300", "https://picsum.photos/id/144/220/300"], "K", colorsCard[2], "68", "JAKIŚ OPIS DLA zzzzz", "");
people[2] = new People("YYYYY", "https://picsum.photos/id/3/220/300", ["https://picsum.photos/id/98/220/300","https://picsum.photos/id/12/220/300","https://picsum.photos/id/121/220/300","https://picsum.photos/id/100/220/300"], "J", colorsCard[0], "25", "JAKIŚ OPIS DLA YYYYY", "");


// FUNCTIONS
function People(name, image, extraImages, figure, color, age, description, moreInfo) {
    this.name = name;
    this.image = image;
    this.extraImages = extraImages;
    this.figure = figure; // J, Q, K, A
    this.color = color; // karo, pik, trefl, kier
    this.age = age;
    this.description = description;
    this.buttonText = "więcej";
    this.moreInfo = moreInfo;
}
function addCards() {
    for(let i=0; i<people.length; i++) {
        const card = $("<div>").addClass('card');
        const front = $("<div>").addClass('card__front');
        const image = $("<div>").addClass('card__image').css({backgroundImage: `url(${people[i].image})`});
        const more = $("<div>").addClass('card__more flaticon-link');
        const topIndication = $("<div>").addClass('card__top-indication');
        const bottomIndication = $("<div>").addClass('card__bottom-indication');
        const letterUp = $("<h2>").addClass('card__letter').text(people[i].figure);
        const letterDown = $("<h2>").addClass('card__letter').text(people[i].figure);
        const signUp = $("<div>").addClass('card__sign').addClass(people[i].color);
        const signDown = $("<div>").addClass('card__sign').addClass(people[i].color);
        
        const back = $("<div>").addClass('card__back');
        const go_back = $("<div>").addClass('card__go-back flaticon-link');
        const nick = $("<h2>").addClass('card__nick').text(people[i].name);
        const levelBox = $("<h3>").addClass('card__level-box').text(`Level: ${people[i].age}`);
        const description = $("<p>").addClass('card__description').text(people[i].description);
        const button = $("<a>").addClass('card__button button').text(people[i].buttonText);
        


        /////////////////////////////////////////////////////////////////   PROBLEM GDZIEŚ TUTAJ ////////////////////////////////////////
        const extraCard = $("<div>").addClass('card__extra');
        const cross = $("<div>").addClass('card__cross flaticon-delete');
        const swiperContainer = $("<div>").addClass('swiper-container');
        const swiperWrapper = $("<div>").addClass('swiper-wrapper');
        const swiperSlide = [];
        for(let j=0; j<people[i].extraImages.length; j++) {
             swiperSlide[j] = $("<div>").addClass('swiper-slide').css({backgroundImage: `url(${people[i].extraImages[j]})`});
        }
       /////////////////////////////////////////////////////////////////   PROBLEM GDZIEŚ TUTAJ ////////////////////////////////////////
       
       
        $(gallery).append(card);
        
        $(card).append(front);
        $(card).append(back);
        $(card).append(extraCard);
       
        $(front).append(more);
        $(front).append(image);
        $(front).append(topIndication);
        $(front).append(bottomIndication);
        $(topIndication).append(letterUp);
        $(topIndication).append(signUp);
        $(bottomIndication).append(letterDown);
        $(bottomIndication).append(signDown);

        $(back).append(go_back);
        $(back).append(nick);
        $(back).append(levelBox);
        $(back).append(description);
        $(back).append(button);
        
        $(extraCard).append(cross);
        $(extraCard).append(swiperContainer);
        $(swiperContainer).append(swiperWrapper);

        for(let j=0; j<people[i].extraImages.length; j++) {
           $(swiperWrapper).append($("<div>").addClass('swiper-slide').css({backgroundImage: `url(${people[i].extraImages[j]})`}));
            console.log(swiperSlide);
        }
        
    }
}
function swiper() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 10,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
      console.log("działam");
}
function cardsEvents() {

    // PĘTELKA PO KARTACH
    $('.card').each((index, element) => { 

        // EVENT NA PRAWY GÓRNY PRZYCISK Z FRONTU KARTY
        $(element).find('.card__more').on('click', () => {
            $(element).find('.card__back').addClass('active')
            $(element).find('.card__front').addClass('active2')
        })

        // EVENT NA LEWY GÓRNY PRZYCISK Z TYŁU KARTY
        $(element).find('.card__go-back').on('click', () => {
            $(element).find('.card__back').removeClass('active')
            $(element).find('.card__front').removeClass('active2')
        })

        // EVENT NA BUTTON
        $(element).find('.card__button').on('click', function(){
            $('.card__extra').slideDown(slideDownDuration, 'easeOutBounce');  
            $('.card__extra').css({display: 'flex'})
            $('.menu').css({display: 'none'});
            swiper(); 
        })

        // EVENT NA KRZYŻYK
        $(element).find('.card__cross').on('click', function() {
            $('.card__extra').slideUp(slideUpDuration, 'easeInOutBack'); 
            $('.menu').css({display: 'flex'});
        })
        
    })
}

addCards();
cardsEvents();

  
