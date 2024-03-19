
window.addEventListener('DOMContentLoaded', function () {

	// слайдер с отзыывами

	if (document.querySelector('.reviews__slider')) {
		const forSwiper = new Swiper('.reviews__slider', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			// Скорость
			speed: 500,
			//centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Navigation arrows
			// navigation: {
			// 	nextEl: '.partners__button-next',
			// 	prevEl: '.partners__button-prev',
			// },
			// Управление колесом мыши
			//mousewheel: {
				// Чувствительность колеса мыши
				//sensitivity: 2,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			//},

			clikable: true,
			//setWrapperSize: true,
			// autoHeight: true,
			// Default parameters
			// slidesPerView: 5,
			// spaceBetween: 10,
			// Responsive breakpoints
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
				autoplay: {
				delay: 4000,
				//отключение автоплей при управлении пользователем: disableOnInteraction: true,
				disableOnInteraction: false,
			},
			// effect: 'flip',
		});
	}

// слайдер с врачами:

if (document.querySelector('.doctors__slider')) {
	const forSwiper = new Swiper('.doctors__slider', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		// Скорость
		speed: 500,
		//centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.doctors__button-next',
			prevEl: '.doctors__button-prev',
		},
		// Управление колесом мыши
	//	mousewheel: {
			// Чувствительность колеса мыши
			//sensitivity: 2,
			// Класс объекта на котором
			// будет срабатывать прокрутка мышью.
			//eventsTarget: ".image-slider"
	//	},

		clikable: true,
		//setWrapperSize: true,
		// autoHeight: true,
		// Default parameters
		// slidesPerView: 5,
		// spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
		},
			autoplay: {
			delay: 4000,
			//отключение автоплей при управлении пользователем: disableOnInteraction: true,
			disableOnInteraction: false,
		},
		// effect: 'flip',
	});
}


})







