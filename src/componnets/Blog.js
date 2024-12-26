import React from 'react';
import { blog } from '../Data';
export default function Blog() {
  return (
    <>
      <section className='blogs' id='blogs'>
        <h1 className="heading">our <span>blogs</span></h1>
        <div className='box-container'>
            {
                blog.map((item,index) => (
                    <div className='box'>
                        <div className='image'>
                            <img src={item.img} alt="blog-img" />
                        </div>
                        <div className='content'>
                            <a href='/' className='title'>{item.title}</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="/" className="btn">read more</a>
                        </div>
                    </div>
                ))
            }
        </div>
      </section>
    </>
  )
}
