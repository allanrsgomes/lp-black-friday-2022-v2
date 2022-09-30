const cuponsSlider = new Splide('#cuponsSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 5,
	perMove: 1,
	breakpoints: {
        500: {
            perPage: 1,
        },
		800: {
            perPage: 2,
        },
        1000: {
            perPage: 3,
        },
        1200: {
            perPage: 4,
        }
        
	},
}).mount()

const destraveSlider = new Splide('#destraveSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 5,
	perMove: 1,
	breakpoints: {
		500: {
            perPage: 1,
            gap: 0,
        },
        800: {
            perPage: 2,
        },
        1000: {
            perPage: 3,
        },
        1200: {
            perPage: 4,
        },
        
	},
}).mount()

const loversSlider = new Splide('#loversSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 5,
	perMove: 1,
	breakpoints: {
		500: {
            perPage: 1,
            gap: 0,
        },
        800: {
            perPage: 2,
        },
        1000: {
            perPage: 3,
        },
        1200: {
            perPage: 4,
        },
        
	},
}).mount()

/*
const categoriaSlider = new Splide('#categoriaSlider', {
	type: 'loop',
    arrows: true,
    pagination: false,
	perPage: 7,
	perMove: 1,
	breakpoints: {
		500: {
            perPage: 1,
        },
        600: {
            perPage: 3,
        },
        700: {
            perPage: 3,
        },
        900: {
            perPage: 4,
        },
        1000: {
            perPage: 5,
        },
        1200: {
            perPage: 6,
        },
        
	},
}).mount()
*/

const comprarSlider = new Splide('#comprarSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 4,
	perMove: 1,
	breakpoints: {
		700: {
            perPage: 1,
        },
        1000: {
            perPage: 2,
        },
        1300: {
            perPage: 3,
        }
        
	},
}).mount()

const queridinhosSlider = new Splide('#queridinhosSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 5,
	perMove: 1,
	breakpoints: {
        500: {
            perPage: 1,
        },
		800: {
            perPage: 2,
        },
        1000: {
            perPage: 3,
        },
        1200: {
            perPage: 4,
        }
        
	},
}).mount()


const blogSlider = new Splide('#blogSlider', {
	type: 'loop',
	arrows: true,
	autoplay: false,
    pagination: false,
    gap: 20,
	perPage: 6,
    perMove: 1,
	breakpoints: {
        400: {
            perPage: 1,
        },
        600: {
            perPage: 2,
        },
        800: {
            perPage: 3,
        },
        1000: {
            perPage: 4,
        },
        1200: {
            perPage: 5,
        },
        
	},
}).mount()