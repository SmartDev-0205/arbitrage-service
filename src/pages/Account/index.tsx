import React, { useState } from 'react';
import Layout from '../../components/Layout';
import IconMenu from '../../components/Icons';
import { THTypeInterface, TStyleInterface } from '../../type';
import Table from '../../components/Table';

const transactionHistory = [
  { asset: 'USDC', type: 'USDC', date: '12 Dec 23', amount: '$120.00', state: 'Pending' },
  { asset: 'USDC', type: 'USDC', date: '12 Dec 23', amount: '$120.00', state: 'Reject' },
  { asset: 'USDC', type: 'USDC', date: '12 Dec 23', amount: '$120.00', state: 'Cancel' },
  { asset: 'USDC', type: 'USDC', date: '12 Dec 23', amount: '$120.00', state: 'Finished' },
  { asset: 'USDC', type: 'USDC', date: '12 Dec 23', amount: '$120.00', state: 'Approve' }
];

const lauchSteps = [
  {
    date: '11 December.2023',
    description: 'USDC token launched arbitrage plus for stacking'
  },
  {
    date: '11 December.2023',
    description: 'USDC token launched arbitrage plus for stacking'
  },
  {
    date: '11 December.2023',
    description: 'USDC token launched arbitrage plus for stacking'
  }
];

const heading: THTypeInterface[] = [
  {
    key: 'asset',
    value: 'Asset',
    type: 'text',
    minWidth: '100px',
    width: '15%',
    align: 'start'
  },
  {
    key: 'type',
    value: 'Type',
    type: 'text',
    minWidth: '100px',
    width: '15%',
    align: 'start'
  },
  {
    key: 'date',
    value: 'Date',
    type: 'text',
    minWidth: '240px',
    width: '30%',
    align: 'start'
  },
  {
    key: 'amount',
    value: 'Amount',
    type: 'text',
    minWidth: '100px',
    width: '20%',
    align: 'start'
  },
  {
    key: 'state',
    value: 'State',
    type: 'button',
    minWidth: '100px',
    width: '20%',
    align: 'center'
  }
];

const tableStyle: TStyleInterface = {
  tableMaxHeight: 'max-h-[600px]'
};

const Account = () => {
  const [tokenIcons, setTokenIcons] = useState('USDT');
  const [totalSelection, setTotalSelection] = useState('USDT');
  const [readyStarted1, setReadyStarted1] = useState(false);
  const [readyStarted2, setReadyStarted2] = useState(false);

  /* variable that staff data table pagination */
  const [totalCount, setTotalCount] = useState(transactionHistory.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(10);
  setTimeout(() => {
    setTokenIcons(tokenIcons === 'USDT' ? 'USDC' : 'USDT');
  }, 1000);

  return (
    <Layout>
      <div className="account-header">
        <div>
          <div className="balance">
            <h2>Hello, Bhargav</h2>
            <div>
              <h2>$100000000</h2>
              <span></span>
              <p>Total Balance</p>
            </div>
          </div>
          <div className="description">
            <div>
              <IconMenu icon={tokenIcons} size={44} />
            </div>
            <div>
              <h3>Earn 0.5% Inrerest Daily</h3>
              <p>With Several Token</p>
            </div>
          </div>
        </div>
      </div>
      <div className="account-staking">
        <div>
          <div className="crypto-type-item">
            <div className="type-item-left">
              <div className="crypto-amount">
                <div>
                  <IconMenu icon="USDT" size={44} />
                </div>
                <div>
                  <h3>USDT</h3>
                  <p>$ 1000</p>
                </div>
              </div>
              <div className="crypto-selection">
                <div className="flex justify-between xl:hidden balance">
                  <div>
                    <h3>Daily Rewards: </h3>
                    <p>$ 1000</p>
                  </div>
                  <div>
                    <h3>Total Rewards: </h3>
                    <p>$ 1000</p>
                  </div>
                  <div>
                    <h3>USDT balance: </h3>
                    <p>$ 1000</p>
                  </div>
                </div>
                <div>
                  <p>Start Earning 0.5% intrestet on your USDT daily</p>
                  <p>One time stacking period of 10 days</p>
                </div>
                {readyStarted1 ? (
                  <div className="amount-control">
                    <input type="number" className="w-full" />
                    <div className="">
                      <div className="w-full md:h-[46px]">
                        <button className="btn-outline text-[14px]">WITHDRAWAL</button>
                      </div>
                      <div className="w-full md:h-[46px]">
                        <button className="btn-primary text-[14px]">DEPOSIT</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="amount-control-ready">
                    <div className="amount-ready">Did’t started yet??</div>
                    <div className="w-full xl:w-[160px] md:h-[46px]">
                      <button className="btn-primary text-[14px]" onClick={() => setReadyStarted1(true)}>
                        GET STARTED
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="type-item-right">
              <div className="hidden xl:flex balance">
                <div>
                  <h3>Daily Rewards: </h3>
                  <p>$ 1000</p>
                </div>
                <div>
                  <h3>Total Rewards: </h3>
                  <p>$ 1000</p>
                </div>
                <div>
                  <h3>USDT balance: </h3>
                  <p>$ 1000</p>
                </div>
              </div>
              <div className="balance-actions">
                <div className="w-full md:h-[46px]">
                  <button className="btn-outline text-[14px]">WITHDRAWAL</button>
                </div>
                <div className="w-full md:h-[46px]">
                  <button className="btn-outline text-[14px]">TRANSFER</button>
                </div>
              </div>
            </div>
          </div>
          <div className="crypto-type-item">
            <div className="type-item-left">
              <div className="crypto-amount">
                <div>
                  <IconMenu icon="USDC" size={44} />
                </div>
                <div>
                  <h3>USDC</h3>
                  <p>$ 1000</p>
                </div>
              </div>
              <div className="crypto-selection">
                <div className="flex justify-between xl:hidden balance">
                  <div>
                    <h3>Daily Rewards: </h3>
                    <p>$ 1000</p>
                  </div>
                  <div>
                    <h3>Total Rewards: </h3>
                    <p>$ 1000</p>
                  </div>
                  <div>
                    <h3>USDC balance: </h3>
                    <p>$ 1000</p>
                  </div>
                </div>
                <div>
                  <p>Start Earning 0.5% intrestet on your USDC daily</p>
                  <p>One time stacking period of 10 days</p>
                </div>
                {readyStarted2 ? (
                  <div className="amount-control">
                    <input type="number" className="w-full" />
                    <div className="">
                      <div className="w-full md:h-[46px]">
                        <button className="btn-outline text-[14px]">WITHDRAWAL</button>
                      </div>
                      <div className="w-full md:h-[46px]">
                        <button className="btn-primary text-[14px]">DEPOSIT</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="amount-control-ready">
                    <div className="amount-ready">Did’t started yet??</div>
                    <div className="w-full xl:w-[160px] md:h-[46px]">
                      <button className="btn-primary text-[14px]" onClick={() => setReadyStarted2(true)}>
                        GET STARTED
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="type-item-right">
              <div className="hidden xl:flex balance">
                <div>
                  <h3>Daily Rewards: </h3>
                  <p>$ 1000</p>
                </div>
                <div>
                  <h3>Total Rewards: </h3>
                  <p>$ 1000</p>
                </div>
                <div>
                  <h3>USDC balance: </h3>
                  <p>$ 1000</p>
                </div>
              </div>
              <div className="balance-actions">
                <div className="w-full md:h-[46px]">
                  <button className="btn-outline text-[14px]">WITHDRAWAL</button>
                </div>
                <div className="w-full md:h-[46px]">
                  <button className="btn-outline text-[14px]">TRANSFER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-totally">
        <div>
          <div className="totally-selection">
            <div className="crypto-selection-tab">
              <button
                onClick={() => setTotalSelection('USDT')}
                className={totalSelection === 'USDT' ? 'active-token' : ''}
              >
                USDT
              </button>
              <button
                onClick={() => setTotalSelection('USDC')}
                className={totalSelection === 'USDC' ? 'active-token' : ''}
              >
                USDC
              </button>
            </div>
            <h2 className="crypto-total-amount">$0 Total TVL</h2>
          </div>
          <div className="totally-description">
            <div className="crypto-type-title">
              <div>
                <IconMenu icon={totalSelection} size={44} />
              </div>
              <p>STACKING INFO</p>
            </div>
            <div className="crypto-type-info">
              <div className="crypto-info-item">
                <div>
                  <div>
                    <IconMenu icon="Investment" size={26} className="" />
                  </div>
                  <p>Total Investment</p>
                </div>
                <p>1015 {totalSelection}</p>
              </div>
              <div className="crypto-info-item">
                <div>
                  <div>
                    <IconMenu icon="Investor" size={26} className="" />
                  </div>
                  <p>Total Investors</p>
                </div>
                <p>6</p>
              </div>
              <div className="crypto-info-item">
                <div>
                  <div>
                    <IconMenu icon="Reward" size={20} className="" />
                  </div>
                  <p>Total Rewards</p>
                </div>
                <p>10.35 {totalSelection}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-transaction-history">
        <h4>Transaction History</h4>
        <div>
          <div className="history">
            <Table
              data={{
                thead: heading,
                tbody: transactionHistory,
                style: tableStyle
              }}
              totalCount={totalCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              displayCount={displayCount}
              setDisplayCount={setDisplayCount}
            />
          </div>
          <div className="launch-date">
            {lauchSteps.map((item: any, ind: number) => {
              return (
                <div key={ind} className="launch-step-item">
                  <div className="circle-item" />
                  <div className="launch-description">
                    <h4>{item.date}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
