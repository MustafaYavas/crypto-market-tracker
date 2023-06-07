import { NavLink } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import HomeCard from '../../components/Card/HomeCard';

const Home = () => {
  return (
    <main className="base-container">
      <section className="min-vh-100 d-flex justify-content-center align-items-center gap-5">
        <div>
          <div className="text-center text-md-start">
            <h2 className="text-white fw-bolder fs-1">
              World's simplest crypto tracking system
            </h2>
          </div>
          <div
            className="my-4 mb-5 fs-5"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p>
              Access all
              <span className="d-none d-md-inline"> cryptocurrencies</span>
              <span className="d-inline d-md-none"> cryptos</span> in one place.
            </p>
            <p>
              CryptoX seamlessly shares instant values of more than 500
              cryptocurrencies with users.
            </p>
          </div>

          <NavLink to="/prices" className="fill-btn text-decoration-none">
            Get Started
          </NavLink>
        </div>

        <div className="d-none d-md-flex justify-content-end">
          <img src="/images/hero-img.png" alt="hero" className="home-img" />
        </div>
      </section>

      <section className="min-vh-100 mb-5 mb-md-0">
        <div className="mb-md-4 d-flex flex-column justify-content-center align-items-center">
          <p className="gradient-text fs-5 fw-bolder">ABOUT US</p>
          <h2 className="text-white fs-1 fw-bolder letter-space-lg text-center">
            CryptoX
          </h2>
        </div>
        <div className="d-flex align-items-center mt-5 row">
          <div className="col col-md-6">
            <div
              style={{ color: 'var(--text-secondary)' }}
              className="mb-4 md:mb-0 md:my-7 fs-5 leading-10"
            >
              <p className="mt-1">
                CryptoX is a platform that allows you to follow crypto rates
                moment by moment. It shares the current prices with the user
                using the - Live Coin Watch - API. It also provides users with a
                chart showing the old values of any crypto currency by
                registering. In addition, it also has a converter function
                between cryptocurrencies.
              </p>
            </div>
            <NavLink
              to="/prices"
              className="gradient-text d-flex align-items-center gap-1 fs-4 fw-bold mt-5"
            >
              Go Prices
              <Icon
                name="MdOutlineKeyboardArrowRight"
                size={28}
                color="white"
                className="mt-1"
              />
            </NavLink>
          </div>

          <div className="d-none d-md-flex col col-md-6 justify-content-end">
            <img src="/images/exchange.png" alt="hero" className="home-img" />
          </div>
        </div>
      </section>

      <section style={{ minHeight: '600px', paddingTop: '3rem' }}>
        <div className="mb-md-4 d-flex flex-column justify-content-center align-items-center">
          <p className="gradient-text text-center fs-5 fw-bolder">
            WHY USE THIS PLATFORM?
          </p>
          <h2 className="text-white fs-1 fw-bolder letter-space-lg text-center">
            Why Choose CryptoX?
          </h2>
        </div>
        <div className="items-center row mt-4 g-4">
          <div className="col-12 col-lg-4">
            <HomeCard
              iconName="BiHappyHeartEyes"
              title="Easy To Use"
              text="It's easy to get lost in a place with so many numbers and graphics! 
              But remember, CryptoX is user-friendly and promises ease of use to everyone."
            />
          </div>
          <div className="col-12 col-lg-4">
            <HomeCard
              iconName="MdOutlineUpdate"
              title="Always Up To Date"
              text="Accessing up-to-date market data has never been so simple. 
              CryptoX guarantees to always share the most up-to-date and accurate data with users."
            />
          </div>
          <div className="col-12 col-lg-4">
            <HomeCard
              iconName="MdOutlineSupportAgent"
              title="Quick Support"
              text="Are there things that are bothering you? Rest assured that we can help you with anything. 
              Send us a mail. We will get back to you as soon as possible."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
