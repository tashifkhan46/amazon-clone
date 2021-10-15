import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home--container">
             <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

             <div className="home--row">
                 <Product 
                      id="01"
                      title="See U in by Ali Karim Sayed (Author)"
                      price={4450}
                      image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                      />
                 <Product 
                     id="02"
                     title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
                     price={2799}
                     image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                     />
                 <Product 
                      id="03"
                      title="Apple iPhone 13 Mini (256GB) - Midnight"
                      price={79900}
                      image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
                      />
                
             </div>
             <div className="home--row">
             <Product 
                  id="04"
                  title="2020 Apple MacBook Pro"
                  price={109990}
                  image="https://m.media-amazon.com/images/I/71YRSVXhgQL._SL1500_.jpg"
                  />
             <Product 
                   id="05"
                   title="realme Buds Q2 Active Noise Cancellation (ANC)"
                   price={1999}
                   image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg"
                  />
             </div>
             <div className="home--row">
             <Product 
                  id="06"
                  title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV"
                  price={36990}
                  image="https://m.media-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg"
                  />
             </div>

            </div>
        </div>
    )
}

export default Home
