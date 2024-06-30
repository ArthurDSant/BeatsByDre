import { RiFunctionLine } from "react-icons/ri"; 
import { RiCloseLine } from "react-icons/ri"; 
import { RiSendPlaneLine } from "react-icons/ri"; 
import { RiFacebookFill } from "react-icons/ri"; 
import { RiInstagramLine } from "react-icons/ri"; 
import { RiTwitterLine } from "react-icons/ri"; 
import { RiArrowUpSLine } from "react-icons/ri"; 
import { RiBluetoothLine } from "react-icons/ri"; 
import { RiBatteryChargeLine } from "react-icons/ri"; 
import { RiPlugLine } from "react-icons/ri"; 
import { RiMicLine } from "react-icons/ri"; 
import { RiInformationLine } from "react-icons/ri"; 
import { RiShoppingBagLine } from "react-icons/ri"; 
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './css/index.css';
import './scss/index.scss';
import './scss/base/index.scss';
import './scss/config/index.scss';
import './scss/layout/index.scss';

import './scss/components/_buttons.scss';
import './scss/components/_case.scss';
import './scss/components/_discount.scss';
import './scss/components/_footer.scss';
import './scss/components/_header.scss';
import './scss/components/_home.scss';
import './scss/components/_mediaqueries.scss';
import './scss/components/_products.scss';
import './scss/components/_scroll.scss';
import './scss/components/_specs.scss';
import './scss/components/_sponsor.scss';

const App = () => {

  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');
    const scrollUpButton = document.getElementById('scroll-up');
    const sections = document.querySelectorAll('section[id]');

    /* MENU SHOW */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    /* MENU HIDDEN */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    /* REMOVE MENU MOBILE */
    const linkAction = () => {
      navMenu.classList.remove('show-menu');
    };

    navLinks.forEach(n => n.addEventListener('click', linkAction));

    /* CHANGE BACKGROUND HEADER */
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };
    window.addEventListener('scroll', scrollHeader);

    /* SHOW SCROLL UP */
    const scrollUp = () => {
      if (window.scrollY >= 200) {
        scrollUpButton.classList.add('show-scroll');
      } else {
        scrollUpButton.classList.remove('show-scroll');
      }
    };
    window.addEventListener('scroll', scrollUp);

    /* SCROLL SECTIONS ACTIVE LINK */
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink.classList.add('active-link');
        } else {
          sectionLink.classList.remove('active-link');
        }
      });
    };
    window.addEventListener('scroll', scrollActive);

    /* SCROLL REVEAL ANIMATION */
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true
    });

    sr.reveal(`.home__header, .section__title`, { delay: 600 });
    sr.reveal(`.home__footer`, { delay: 700 });

    sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 });
    sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 });
    sr.reveal(`.specs__img, .discount__img`, { origin: 'right' });
    sr.reveal(`.case__img`, { origin: 'top' });
    sr.reveal(`.case__data`);

    return () => {
      if (navToggle) navToggle.removeEventListener('click', () => {});
      if (navClose) navClose.removeEventListener('click', () => {});
      navLinks.forEach(n => n.removeEventListener('click', linkAction));
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', scrollUp);
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="/assets/logo.png" alt="" />
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#specs" className="nav__link">Specs</a>
              </li>
              <li className="nav__item">
                <a href="#case" className="nav__link">Case</a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">Products</a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"><RiCloseLine /></i>
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-function-line"><RiFunctionLine /></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div>
              <img src="/assets/Home.png" alt="" className="home__img" />
            </div>

            <div className="home__data">
              <div className="home__header">
                <h1 className="home__title">On ear</h1>
                <h2 className="home__subtitle">Beats 3</h2>
              </div>

              <div className="home__footer">
                <h3 className="home__title-description">Overview</h3>
                <p className="home__description">
                  Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.
                </p>
                <a href="#" className="button button--flex">
                  <span className="button--flex">
                    <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i> Add to Bag
                  </span>
                  <span className="home__price">$299</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sponsor section">
          <div className="sponsor__container container grid">
            <img src="/assets/sponsor1.png" alt="" className="sponsor__img" />
            <img src="/assets/sponsor2.png" alt="" className="sponsor__img" />
            <img src="/assets/sponsor3.png" alt="" className="sponsor__img" />
            <img src="/assets/sponsor4.png" alt="" className="sponsor__img" />
          </div>
        </section>

        <section className="specs section grid" id="specs">
          <h2 className="section__title section__title-gradient">Specs</h2>

          <div className="specs__container container grid">
            <div className="specs__content grid">
              <div className="specs__data">
                <i className="ri-bluetooth-line specs__icon"><RiBluetoothLine /></i>
                <h3 className="specs__title">Connection</h3>
                <span className="specs__subtitle">Bluetooth v5.2</span>
              </div>

              <div className="specs__data">
                <i className="ri-battery-charge-line specs__icon"><RiBatteryChargeLine /></i>
                <h3 className="specs__title">Battery</h3>
                <span className="specs__subtitle">Duration 40h</span>
              </div>

              <div className="specs__data">
                <i className="ri-plug-line specs__icon"><RiPlugLine /></i>
                <h3 className="specs__title">Load</h3>
                <span className="specs__subtitle">Fast charge 4.2-AAC</span>
              </div>

              <div className="specs__data">
                <i className="ri-mic-line specs__icon"><RiMicLine /></i>
                <h3 className="specs__title">Microphone</h3>
                <span className="specs__subtitle">Supports Apple Siri <br /> and Google</span>
              </div>
            </div>

            <div>
              <img src="/assets/specs.png" alt="" className="specs__img" />
            </div>
          </div>
        </section>

        <section className="case section grid" id="case">
          <h2 className="section__title section__title-gradient">Case</h2>

          <div className="case__container container grid">
            <div>
              <img src="/assets/case.png" alt="" className="case__img" />
            </div>

            <div className="case__data">
              <p className="case__description">
                With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.
              </p>
              <a href="#" className="button button--flex">
                <i className="ri-information-line button__icon"><RiInformationLine /></i> More info
              </a>
            </div>
          </div>
        </section>

        <section className="discount section">
          <div className="discount__container container grid">
            <div className="discount__animate">
              <h2 className="discount__title">Immerse yourself in <br /> your music</h2>
              <p className="discount__description">Get it now, up to 50% off.</p>
              <a href="#" className="button button--flex">
                <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i> Shop Now
              </a>
            </div>

            <img src="/assets/discount.png" alt="" className="discount__img" />
          </div>
        </section>


        <section className="products section" id="products">
          <h2 className="section__title section__title-gradient products__line">
            Choose <br /> Your Style
          </h2>

          <div className="products__container container grid">
            <article className="products__card">
              <div className="products__content">
                <img src="/assets/product1.png" alt="" className="products__img" />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$239</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img src="/assets/product2.png" alt="" className="products__img" />

                <h3 className="products__title">Red Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img src="/assets/product3.png" alt="" className="products__img" />

                <h3 className="products__title">Night Black</h3>
                <span className="products__price">$259</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img src="/assets/product4.png" alt="" className="products__img" />

                <h3 className="products__title">Blue</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i>
                </button>
              </div>
            </article>

            <article className="products__card">
              <div className="products__content">
                <img src="/assets/product5.png" alt="" className="products__img" />

                <h3 className="products__title">Twilight gray</h3>
                <span className="products__price">$279</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"><RiShoppingBagLine /></i>
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container container grid">
          <a href="#" className="footer__logo">
            <img src="/assets/logo.png" alt="" />
          </a>

          <div className="footer__content">
            <h3 className="footer__title">Products</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">Headphones</a>
              </li>
              <li>
                <a href="#" className="footer__link">Earphones</a>
              </li>
              <li>
                <a href="#" className="footer__link">Earbuds</a>
              </li>
              <li>
                <a href="#" className="footer__link">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Support</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">Product help</a>
              </li>
              <li>
                <a href="#" className="footer__link">Register</a>
              </li>
              <li>
                <a href="#" className="footer__link">Updates</a>
              </li>
              <li>
                <a href="#" className="footer__link">Provides</a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <form action="" className="footer__form">
              <input type="email" placeholder="Email" className="footer__input" />
              <button className="button button--flex">
                <i className="ri-send-plane-line button__icon"><RiSendPlaneLine /></i> Subscribe
              </button>
            </form>

            <div className="footer__social">
              <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                <i className="ri-facebook-fill"><RiFacebookFill /></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                <i className="ri-instagram-line"><RiInstagramLine /></i>
              </a>
              <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                <i className="ri-twitter-line"><RiTwitterLine /></i>
              </a>
            </div>
          </div>
        </div>

        <p className="footer__copy">
          <a href="https://github.com/ArthurSantDev" target="_blank" className="footer__copy-link">&#169; Arthur Sant. All rights reserved</a>
        </p>
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <RiArrowUpSLine />
      </a>
    </>
  );
}

export default App;