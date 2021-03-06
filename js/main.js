/*
 * Vue Slider
 */

const root = new Vue ({
    el: '#root',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        slideActive: 0,
        autoPlayId: 0,
    },
    created: function() {
        this.autoPlay();
    },
    methods: {
        //Next slide
        nextSlide() {
            this.slideActive++;

            if (this.slideActive > this.slides.length -1 ) {
                this.slideActive = 0;
            }
        },
        //Prev slide
        prevSlide() {
            this.slideActive--;

            if (this.slideActive < 0) {
                this.slideActive = this.slides.length - 1;
            }
        },
        //Set slide active whit click into the image
        setSlideActive(slideIndex) {
            this.slideActive = slideIndex;
        },
        //Auto play
        autoPlay() {
            this.autoPlayId = setInterval ( () => {
                this.nextSlide();
            }, 3000);
        },
        //Stop autoplay
        stopAutoPlay(event) {
            clearInterval (this.autoPlayId);

            event.target.focus();
        },
    },
});