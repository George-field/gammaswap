import React, { useState } from 'react';
import './App.css';
import ModalBody from './Modal/ModalBody';
import { AvatarStack, ModalLink, Stat } from './UI';

import USDCIcon from './images/usdc.svg';
import ETHIcon from './images/eth.png';
import ReserveStats from './ReserveStats/ReserveStats';
import Modal from './Modal/Modal';
import ModelHeader from './Modal/ModalHeader';

/**
 * There are a ton of improvments that I would make if I had time:
 * 
 * 1) Modify the tailwind config file with the custom fonts and colors so that they are 
 * defined in one place. If I did this I would no longer need to use the style attribute everywhere
 * 
 * 2) Modal below is not strucutred correctly, so I would fix that.
 * 
 * 3) Mobile view
 * 
 * 4) Added nice animations into the dropdown, makes for a better user experience. Also add some hover
 * colors to the buttons in the modal header.
 * 
 */


function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mt-24">
        Demo Modal
      </h1>

      <button onClick={() => setOpen(!open)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Open
      </button>

      {open && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/*
          Background backdrop, show/hide based on modal state.
      
          Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
          Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
        */}
          <div className="fixed inset-0 bg-opacity-75 transition-opacity"  
            style={{
              backgroundColor: '#EBEBEB'
            }}
          />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/*
        Modal panel, show/hide based on modal state.
      
        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      */}
              <Modal
                header={
                  <ModelHeader />
                }
              >
                <ModalBody>
                  <>
                    <div>
                      <div
                        className='flex items-center mb-5'
                      >
                        <AvatarStack
                          images={[
                            ETHIcon,
                            USDCIcon
                          ]}
                        />

                        <input className='favourite ml-auto' type='checkbox' />
                      </div>
                      <div>
                        <h1
                          className='font-bold text-lg'
                          style={{
                            color: 'rgb(28, 28, 28)'
                          }}
                        >
                          ETH / USDC
                        </h1>
                        <div
                          className='flex items-center'
                        >
                          <ModalLink
                            url=''
                            label='Uniswap v2'
                          />
                          <svg viewBox="0 0 2 2" color='#E8E8E8' className="h-1 w-1 fill-current mx-1.5">
                            <circle cx="1" cy="1" r="1"></circle>
                          </svg>
                          <ModalLink
                            url=''
                            label='View on Etherscan'
                          />
                        </div>
                      </div>

                      <div
                        className='mt-10 flex align-center'
                      >
                        <Stat
                          label={'Liquidity'}
                          value={'$23.00M'}
                          secondaryLabel={'24h Change'}
                          secondaryValue='+2.38%'
                        />
                        <span
                          style={{
                            marginLeft: 72
                          }}
                        >
                          <Stat
                            label={'APR'}
                            value={'2.43%'}
                            secondaryLabel={'24h Performance'}
                          />
                        </span>
                      </div>

                      <div
                        className='mt-10'
                      >
                        <ReserveStats />
                      </div>

                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        style={{
                          backgroundColor: '#F7F7F7',
                          color: '#1C1C1C'
                        }}
                        onClick={() => setOpen(!open)}
                        className="inline-flex hover:bg-gray-100 w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Go back to dashboard
                      </button>
                    </div>
                  </>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
