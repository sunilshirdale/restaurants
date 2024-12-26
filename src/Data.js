import productImage1 from './assets/images/product-1.png';
import productImage2 from './assets/images/product-2.png';
import productImage3 from './assets/images/product-3.png';
import menuImage1 from './assets/images/menu-1.png';
import menuImage2 from './assets/images/menu-2.png';
import menuImage3 from './assets/images/menu-3.png';
import menuImage4 from './assets/images/menu-4.png';
import menuImage5 from './assets/images/menu-5.png';
import menuImage6 from './assets/images/menu-6.png';
import reviewImage1 from './assets/images/pic-1.png';
import reviewImage2 from './assets/images/pic-2.png';
import reviewImage3 from './assets/images/pic-3.png';
import starImage from './assets/images/star.png';
import blogImage1 from './assets/images/blog-1.jpeg';
import blogImage2 from './assets/images/blog-2.jpeg';
import blogImage3 from './assets/images/blog-3.jpeg';
const menu = [
    {
        img: menuImage1,
    },
    {
        img: menuImage2,
    },
    {
        img: menuImage3,
    },
    {
        img: menuImage4,
    },
    {
        img: menuImage5,
    },
    {
        img: menuImage6,
    },
];
const product = [
    {
        img: productImage1,
        title:'Product 1',
    },
    {
        img: productImage2,
        title:'Product 2',
    },
    {
        img: productImage3,
        title:'Product 3',
    },
    
];
const review =[
    {
        imgstar: starImage,
        img: reviewImage1,

    },
    {
        imgstar: starImage,
        img: reviewImage2,

    },
    {
        imgstar: starImage,
        img: reviewImage3,
    },
];
const blog = [
    {
        title:'tasty and refreshing spices',
        img: blogImage1,
    },
    {
        title:'tasty and refreshing bread slices',
        img: blogImage2,
    },
    {
        title:'tasty juice and refreshing spices',
        img: blogImage3,
    },
];
export{menu,product,review,blog}