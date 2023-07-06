import React from 'react';
import Layout from '../../components/Layout';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// @ts-ignore
import Flip from 'react-reveal/Flip';
import DeskTopImg from '../../assets/images/desktop.png';
import ChartImg from '../../assets/images/chart.png';
import ServiceImg1 from '../../assets/images/service1.svg';
import ServiceImg2 from '../../assets/images/service2.svg';
import ServiceImg3 from '../../assets/images/service3.svg';
import StepImg1 from '../../assets/images/step1.svg';
import StepImg2 from '../../assets/images/step2.svg';
import StepImg3 from '../../assets/images/step3.svg';
import IconMenu from '../../components/Icons';

const description = [
  'Crypto arbitrage bot trading generates profits for investors',
  'Daily income paid directly to your wallet via USDC or USDT on the Polygon chain',
  'Zero fees, no lockup, withdraw anytime'
];

const options = [
  { icon: 'Exchange', title: 'Exchange', description: 'Arbitrage differences', bgColor: 'bg-black/[0.9]' },
  { icon: 'Market', title: 'Market', description: 'Arbitrage', bgColor: 'bg-thick-purple/[0.9]' },
  { icon: 'Profit', title: 'Profit', description: 'From price', bgColor: 'bg-black/[0.9]' }
];

const services = [
  {
    img: ServiceImg1,
    title: 'Arbitrage Trading Bot',
    description:
      'Arbitrage Plus is a proprietary trading bot that will generate profits for investors via risk-free exchange & triangular arbitrage. Arbitrage Plus earns about 2-3% daily, and we distribute 1% daily returns to our investors.'
  },
  {
    img: ServiceImg2,
    title: 'Daily Income',
    description:
      'Arbitrage Plus automatically pays out 1% daily returns, including the weekends, as our bots are running 24/7. You have the option to manually transfer your profits to your stake to compound your returns.'
  },
  {
    img: ServiceImg3,
    title: 'Zero Fees',
    description:
      "We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Arbitrage Plus is 100% free to use. You're welcome!"
  }
];

const steps = [
  {
    img: StepImg1,
    title: 'Exchange Arbitrage',
    description:
      'Exchange arbitrage involves trading virtual currencies across two different exchange platforms. Exchange arbitrage is a straightforward way of conducting crypto arbitrage. This is the basic form of arbitrage trading, where a trader tries to generate profit by buying crypto on one exchange and selling it on another exchange at a higher price.',
    direction: true
  },
  {
    img: StepImg2,
    title: 'Triangular Arbitrage',
    description:
      'Triangular arbitrage takes advantage of pricing inefficiencies among different pairs of cryptocurrencies on the same exchange. With this strategy, an investor starts with one cryptocurrency and then trades it for another cryptocurrency on that same exchange — one which is undervalued relative to the first crypto. The investor would then trade that second cryptocurrency for a third cryptocurrency which is relatively overvalued when compared with the first. Finally, the investor would trade that third cryptocurrency for the first crypto, completing the circuit potentially a little richer.',
    direction: false
  },
  {
    img: StepImg3,
    title: 'Exchange Arbitrage',
    description:
      'Generate profit from small price fluctuations as the market moves sideways. Most markets are moving sideways most of the time, while strong price moves are usually short-lived. GRID trading allows making a continuous profit when other strategies fail to make any profit at all! This, combined with our arbitrage bots, allows us to generate profits continuously regardless of what the markets are doing.',
    direction: true
  }
];

const HomePage = () => {
  return (
    <Layout>
      <div className="jumbotron">
        <div className="title-container">
          <Fade top>
            <h1>
              <span className="text-thin-blue">Earn 0.5%</span> daily passive income
            </h1>
            <div className="detail-description">
              {description.map((item: string, ind: number) => {
                return (
                  <div key={ind} className="description-item">
                    <IconMenu icon="Check" size={20} height={8} className="text-thin-blue" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[160px] h-[46px]">
              <button className="btn-primary !p-[8px]">
                <span className="pt-[4px]">CONNECT</span>
                <IconMenu icon="Arrow" />
              </button>
            </div>
          </Fade>
        </div>
        <Zoom>
          <div className="desktop-container">
            <img src={DeskTopImg} alt="desktop" />
          </div>
        </Zoom>
      </div>
      <div className="options">
        {options.map((item: any, ind: number) => {
          return (
            <div key={ind} className={'option-item ' + item.bgColor}>
              <Zoom center cascade collapse>
                <IconMenu icon={item.icon} size={62} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Zoom>
            </div>
          );
        })}
      </div>
      <div className="arbitrage-exchange">
        <Zoom>
          <h1>
            Exchange Arbitrage<span className="text-blue">, without withdrawls</span>
          </h1>
        </Zoom>
        <Flip top>
          <div className="chart-container">
            <img src={ChartImg} alt="chart" />
          </div>
        </Flip>
      </div>
      <div className="service">
        <p>
          Our crypto bots execute profitable arbitrage trades between exchanges without sending funds from one exchange
          to another. This allows our proprietary bots to buy and sell cryptocurrencies simultaneously and profit from
          the price difference instantly. We remove the risk entirely from arbitrage trading.
        </p>
        <div className="service-group">
          {services.map((item: any, ind: number) => {
            return (
              <div key={ind} className="service-item">
                <Zoom center>
                  <img src={item.img} alt="service" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Zoom>
              </div>
            );
          })}
        </div>
      </div>
      <div className="how-to-work">
        <Zoom top collapse>
          <h1>
            How it <span className="text-blue">Works</span>
          </h1>
        </Zoom>
        <div className="work-group">
          {steps.map((item: any, ind: number) => {
            return (
              <div key={ind} className="step-item">
                {item.direction ? (
                  <>
                    <div>
                      <Fade top>
                        <img src={item.img} alt="step" />
                      </Fade>
                    </div>
                    <div className="description">
                      <Fade right>
                        <h2>{item.title}</h2>
                        <div className="borderline"></div>
                        <p>{item.description}</p>
                      </Fade>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="description">
                      <Fade left>
                        <h2>{item.title}</h2>
                        <div className="borderline"></div>
                        <p>{item.description}</p>
                      </Fade>
                    </div>
                    <div>
                      <Fade top>
                        <img src={item.img} alt="step" />
                      </Fade>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
