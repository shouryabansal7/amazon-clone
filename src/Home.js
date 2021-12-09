import { Menu } from "@mui/icons-material";
import React from "react";
import ImageCarousel from "./ImageCarousel";

import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_options">
          <div className="home_menu">
            <Menu className="home_menuIcon" />
            <span className="home_menuIconLabel">All</span>
          </div>
          <ul>
            <li>Fresh</li>
            <li>Gift Card</li>
            <li>Amazon Pay</li>
            <li>Gift Ideas</li>
            <li>Kindle Ebooks</li>
          </ul>
        </div>
        <ImageCarousel />
        <div className="home_row">
          <Product
            title="And Then There Were None: The World’s Favourite Agatha Christie Book: The World’s Favourite Agatha Christie Book"
            price={999}
            id="109091"
            image="https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg"
            rating={4}
          />
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            id="127898"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            title="The Fault in our Stars Paperback – 3 January 2013"
            id="982381"
            price={4.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Bajaj DX-7 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating Technology, White"
            id="106457"
            price={9.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71wPdBiqSLL._SL1500_.jpg"
          />
          <Product
            title="CENTRINO CASUAL SHOES MATERIAL: SYNTHETIC MATERIAL"
            price={9.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71fj3YjhqoL._UL1500_.jpg"
            id="123456"
          />
          <Product
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey"
            price={999}
            id="109098"
            image="https://m.media-amazon.com/images/I/51FWf+esWHL._AC_SS450_.jpg"
            rating={4}
          />
          <Product
            title="Jabra Elite 75t True Wireless Active Noise Cancelling (ANC) Bluetooth Earbuds, Long Battery Life for Calls & Music, Voice Assistant Enabled, Titanium Black"
            id="982388"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51TvZn3Kn3S._SL1244_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
            price={799.99}
            id="876598"
            image="https://images.samsung.com/is/image/samsung/latin-en-c49j89-lc49j890dklxzp-frontblack-305230207?$720_576_PNG$"
            rating={4}
          />
          <Product
            title="Samsung 55 Smart 4K Crystal HDR UHD TV TU7000 Series (Titan Gray)"
            price={799.99}
            image="https://media.cnn.com/api/v1/images/stellar/prod/181118210658-1500-2-uhd-1097.jpg?q=w_1600,h_900,x_0,y_0,c_fill"
            id="100229"
            rating={5}
          />
          <Product
            title="LG 139.7 cm (55 inches) 4K Ultra HD Smart LED TV 55UP7500PTZ (Rocky Black) (2021 Model)"
            image="https://www.lg.com/in/images/tvs/md06118277/gallery/01-1100x730-V5_v.jpg"
            rating={3}
            price={1049.99}
            id="565656"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
