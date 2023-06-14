import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/landing.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect } from 'react'

export default function Landing() {
  useEffect(()=>{
    // section scroll animation class update
    const allSection = document.querySelectorAll('.section');
      // console.log(allSection);
      const getSection = function(entries, observer){
        const [entry] = entries;
        // console.log(entry);
        if(!entry.isIntersecting) return;
        entry.target.classList.add(`show`);
      }
      const sectionObserver = new IntersectionObserver(
        getSection, {
          root : null,
          threshold: 0.15,
        }
      )
      allSection.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.remove(`show`);
    });

    // thumbnail slider
    const thumbnailSlider = () => {
      const slides = document.querySelectorAll('.slider > figure');
      const btnLeft = document.querySelector('.btn__left');
      const btnRight = document.querySelector('.btn__right');

      let currentSlide = 0;
      const maxSlide = slides.length;

      const goToSlide = (slide) => {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${170 * (i - slide)}px)`)
        );
      }
      goToSlide(0);

      //Next Slide
      const nextSlide = () => {
        if(currentSlide === maxSlide - 1){
          currentSlide = 0;
        }else{
          currentSlide++;
        }
        goToSlide(currentSlide);
      }

      //Prev Slide
      const prevSlide = () => {
        if(currentSlide === 0){
          currentSlide = maxSlide - 1;
        }else{
          currentSlide--;
        }
        goToSlide(currentSlide);
      }

      btnLeft.addEventListener('click', prevSlide);
      btnRight.addEventListener('click', nextSlide);
    };
    thumbnailSlider();
  },[]);
  return (
    <div className={`container`}>
      <Head>
        <title>HCCB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={`main`}>
        <section id={`section__1`} className={`section`}>
          <Header />
          <div className={`${styles.hero}`}>
            <div className={`${styles.hero__inner}`}>
              <ul>
                <li>Home</li>
                <li>Sustainability</li>
              </ul>
              <h4 className={`fw300 colorfff mt-4 mb-2`}>Lorem ipsum dolor sit amet</h4>
              <h1 className={`colorfff`}>Earth a better place than we inherited</h1>
            </div>
          </div>
        </section>
        <section id={`section__2`} className={`section`}>
          <span className={`${styles.bg} ${styles.bg__1}`} />
          <span className={`${styles.bg} ${styles.bg__2}`} />
            <h2 className={`color000 fw300 fadeup`}>Highlights of Key Initiatives</h2>
            <p className={`color000 fadeup`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ex a ante egestas congue. Sed sagittis elit et sapien semper pulvinar vel eget magna.</p>
            <div className={`${styles.highlight} fadeup`}>
              <figure>
                <Image src="/images/highlights-of-key-initiatives.png" width={100} height={100} alt="highlight" />
                <figcaption className={`color000 fw500`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/highlights-of-key-initiatives.png" width={100} height={100} alt="highlight" />
                <figcaption className={`color000 fw500`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/highlights-of-key-initiatives.png" width={100} height={100} alt="highlight" />
                <figcaption className={`color000 fw500`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/highlights-of-key-initiatives.png" width={100} height={100} alt="highlight" />
                <figcaption className={`color000 fw500`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/highlights-of-key-initiatives.png" width={100} height={100} alt="highlight" />
                <figcaption className={`color000 fw500`}>Lorem Ipsum</figcaption>
              </figure>
            </div>
        </section>
        {/* <section id={`section__3`} className={`section`}></section>*/}
        <section id={`section__4`} className={`section`}>
          <div className={`fadeup ${styles.stories__content}`}>
            <h2 className={`color000 fw300`}>HCCB Sustainability Stories</h2>
            <p className={`color777`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lectus vitae elementum mattis. Duis quis imperdiet sem, et placerat ligula. Duis suscipit est sit amet pharetra consectetur.</p>
          </div>
          <div className={`${styles.thumbnailwrap}`}>
            <div className={`${styles.thumbnailwrap__top}`}>
              <div className={`${styles.thumbnailwrap__content}`}>
                <div className={`${styles.employee}`}>
                  <strong>EMPLOYEE STORIES</strong>
                  <div>
                    <p>Our CSR work in Tamil Nadu develops 2 Model Villages</p>
                    <a className={`colorfff`} href="#">Read More</a>
                  </div>
                </div>
                <Image src="/images/04.jpg" width={100} height={100} alt="thumbnail" />
              </div>
              <div className={`${styles.thumbnailwrap__content}`}>
                <div className={`${styles.employee}`}>
                  <strong>EMPLOYEE STORIES</strong>
                  <div>
                    <p>Our CSR work in Tamil Nadu develops 2 Model Villages</p>
                    <a className={`colorfff`} href="#">Read More</a>
                  </div>
                </div>
                <Image src="/images/05.jpg" width={100} height={100} alt="thumbnail" />
              </div>
            </div>
            <div className={`${styles.thumbnailwrap__bottom}`}>
              <div className={`${styles.thumbnailwrap__content}`}>
                <div className={`${styles.employee}`}>
                  <strong>EMPLOYEE STORIES</strong>
                  <div>
                    <p>Our CSR work in Tamil Nadu develops 2 Model Villages</p>
                    <a className={`colorfff`} href="#">Read More</a>
                  </div>
                </div>
                <Image src="/images/06.png" width={100} height={100} alt="thumbnail" />
              </div>
              <div className={`${styles.thumbnailwrap__content}`}>
                <div className={`${styles.employee}`}>
                  <strong>EMPLOYEE STORIES</strong>
                  <div>
                    <p>Our CSR work in Tamil Nadu develops 2 Model Villages</p>
                    <a className={`colorfff`} href="#">Read More</a>
                  </div>
                </div>
                <Image src="/images/08.png" width={100} height={100} alt="thumbnail" />
              </div>
              <div className={`${styles.thumbnailwrap__content}`}>
                <div className={`${styles.employee}`}>
                  <strong>EMPLOYEE STORIES</strong>
                  <div>
                    <p>Our CSR work in Tamil Nadu develops 2 Model Villages</p>
                    <a className={`colorfff`} href="#">Read More</a>
                  </div>
                </div>
                <Image src="/images/04.jpg" width={100} height={100} alt="thumbnail" />
              </div>
            </div>
          </div>
        </section>
        <section id={`section__5`} className={`section`}>
          <span className={`${styles.bg} ${styles.bg__1}`} />
          <span className={`${styles.bg} ${styles.bg__2}`} />
          <h2 className={`fw300 color000 fadeup`}>HCCB in the Community</h2>
          <div className={`${styles.community} fadeup`}>
            <div className={`${styles.community__box}`}>
              <div className={`color000 ${styles.community__title}`}>Programs</div>
              <div className={`color777 ${styles.community__content}`}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <a className={`colore61 fw500`} href="#">View More</a>
              </div>
              <span className={`${styles.community__content__left}`} />
            </div>
            <div className={`${styles.community__box}`}>
              <div className={`color000 ${styles.community__title}`}>Events</div>
              <div className={`color777 ${styles.community__content}`}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...</p>
                <a className={`colore61 fw500`} href="#">View More</a>
              </div>
              <span className={`${styles.community__content__right}`} />
            </div>
          </div>
        </section> 
        <section id={`section__6`} className={`section`}>
          <div className={`${styles.csr} fadeup`}>
            <h2 className={`colorfff`}>Our Four Prolonged CSR Legislative</h2>
            <p className={`colorfff`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ex a ante egestas congue. Sed sagittis elit et sapien semper pulvinar vel eget magna.</p>
          </div>
          <div className={`colorfff fadeup ${styles.csr__title}`}>CSR Policies</div>
          <div className={`fadeup ${styles.csr__slider}`}>
            <div className={`${styles.slides} slider`}>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
              <figure>
                <Image src="/images/csr-policies.png" width={100} height={100} alt="csr-policies" />
                <figcaption className={`color000 fw500 mt-2`}>Lorem Ipsum</figcaption>
              </figure>
            </div>
          </div>
          <div className={`${styles.button__wrap} mt-4`}>
              <button className={`btn__left ${styles.button__left}`} />
              <button className={`btn__right ${styles.button__right}`} />
          </div>
        </section>
        <section id={`section__7`} className={`section`}>
          <div className={`${styles.sayhello}`}>
            <div className={`fadeup ${styles.sayhello__left}`}>
              <h2 className={`color000 fw300`}>Say Hello</h2>
              <address className={`${styles.address}`}>
                <div className={`fw500 ${styles.address__title}`}>Headquarters</div>
                <div className={`${styles.address__subtitle}`}>HIndustan Coca-Cola Beverages Private Limited</div>
                <div className={`${styles.address__content}`}>
                  Brigade Magnum, Tower A, 9th Floor,
                  Amruthahalli, Kodigehalli Post,
                  Bangalore - 560092</div>
              </address>
              <address className={`${styles.address}`}>
                <div className={`fw500 ${styles.address__title}`}>Registered Office</div>
                <div className={`${styles.address__subtitle}`}>HIndustan Coca-Cola Beverages Private Limited</div>
                <div className={`${styles.address__content}`}>
                  B-91, Mayapuri Industrial Area Phase - I, New Delhi - 110064</div>
              </address>
            </div>
            <div className={`${styles.sayhello__right}`}></div>
          </div>
          <div className={`fadein ${styles.form}`}>
            <div className={`colorfff ${styles.form__query}`}>Type of Query</div>
            <form className={`${styles.form__wrap}`}>
              <div className={`${styles.form__input}`}>
                <input className={`colorfff ${styles.form__inputtext}`} type="text" required />
                <label className={`colorfff ${styles.form__label}`}>Name</label>
              </div>
              <div className={`${styles.form__input}`}>
                <input className={`colorfff ${styles.form__inputtext}`} type="text" required />
                <label className={`colorfff ${styles.form__label}`}>Number</label>
              </div>
              <div className={`${styles.form__input}`}>
                <textarea rows="1" className={`colorfff ${styles.form__inputtext}`} required></textarea>
                <label className={`colorfff ${styles.form__label}`}>Message</label>
              </div>
              <button className={`button colorfff ${styles.button__submit}`}>Submit</button>
            </form>
          </div>
        </section>
        <section id={`section__8`} className={`section`}>
          <Footer />
        </section>
      </main>
      <div className={`${styles.section__right}`}>
        <ul>
          <li><span className={`imgwrap ${styles.searchicon}`} /></li>
          <li>GET IN TOUCH</li>
          <li>VISIT FACTORY</li>
        </ul>
      </div>
    </div>
  )
}
