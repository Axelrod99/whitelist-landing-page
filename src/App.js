import './App.css';
import Header from './component/Header/index';
import newspaper from './assets/images/newspaper.png';
import one from './assets/images/one.png';
import info from './assets/images/info.png';
import two from './assets/images/two.png';
import three from './assets/images/three.png';
import four from './assets/images/four.png';
import line from './assets/icons/line.svg';
import circle from './assets/icons/circle.svg';
import Footer from './component/Header/Footer/index';


function App() {
  return (
    <div>
      <Header/>
      <main className='flex flex-col items-center'>
        <div className='flex  mt-10 w-[80%]'>
          <div className='mt-16'>
            <div className='ml-2'>
              <p className='text-5xl font-bold text-blue-400'>Buy and sell</p>
              <p className='text-5xl font-bold'>Whitelist slots</p>
            </div>
            <div className='text-xl mt-10'>
              <p className='text-slate-500'>Find Whitelist slots on the marketplace, place offers and connect with whitelist owners</p>
            </div>
          </div>
          
          <div className='hidden sm:block'>
            <img className='' src={newspaper}/>
          </div>
        </div>


        <div className='mt-8 mb-6'>
          <p className='font-bold text-2xl flex justify-center mb-6'>Featured Projects</p>

          <div className='grid xl:grid-cols-4 lg:grid-cols-4 gap-5 md:grid-cols-2'>
            <div className='w-44 border-2 h-44 flex flex-col align-middle justify-evenly'>
              <div className='flex justify-around'>
                <img className='flex ml-9' src={one}/>
                <img className='h-7 w-7 -ml-4 mt-3' src={info}/>
              </div>
              <div className='font-bold flex justify-center'>Squiggles</div>
              <a href='#'><div className=' bg-slate-200 rounded flex justify-center h-5 flex-col items-center w-32 ml-6 text-blue-400'>8 Slots Available</div></a>
            </div>

            <div className='w-44 border-2 h-44 flex flex-col align-middle justify-evenly'>
              <div className='flex justify-around'>
                <img className='flex ml-9' src={two}/>
                <img className='h-7 w-7 -ml-4 mt-3' src={info}/>
              </div>
              <div className='font-bold flex justify-center'>Quirkies</div>
              <a href='#'><div className=' bg-slate-200 rounded flex justify-center h-5 flex-col items-center w-32 ml-6 text-blue-400'>8 Slots Available</div></a>
            </div>

            <div className='w-44 border-2 h-44 flex flex-col align-middle justify-evenly'>
              <div className='flex justify-around'>
                <img className='flex ml-9' src={three}/>
                <img className='h-7 w-7 -ml-4 mt-3' src={info}/>
              </div>
              <div className='font-bold flex justify-center'>Beans NFT</div>
              <a href='#'><div className=' bg-slate-200 rounded flex justify-center w-32 ml-6  h-5 flex-col items-center text-blue-400'>8 Slots Available</div></a>
            </div>

            <div className='w-44 border-2 h-44 flex flex-col align-middle justify-evenly'>
              <div className='flex justify-around'>
                <img className='flex ml-9' src={four}/>
                <img className='h-7 w-7 -ml-4 mt-3' src={info}/>
              </div>
              <div className='font-bold flex justify-center'>GMoney</div>
              <a href='#'><div className=' bg-slate-200 rounded flex  h-5 flex-col items-center justify-center w-32 ml-6 text-blue-400'>8 Slots Available</div></a>
            </div>
          </div>

          <div className='mt-10 flex justify-center'>
            <button className='border-2 border-blue-500 rounded-3xl p-2 px-8 text-blue-600 font-bold'>Visit Marketplace</button>
          </div>
        </div>


        <div className='mt-16'>
          <div>
            <p className='flex justify-center font-bold text-2xl mb-12'>List and sell your Whitelists</p>
          </div>
          
          <div className='flex'>
            <div className='-mr-2 lg:-mr-11'>
              <img className='' src={line}/>
              <p className='w-[80%]'>Select Project where you have Whitelist status</p>
            </div>
            <div className='-mr-2'>
              <img className='' src={line}/>
              <p className='w-[80%]'>Connect Discord and wallet</p>
            </div>
            <div className='-mr-1'>
              <img src={line}/>
              <p className='w-[80%] ml-2'>Status Verification</p>
            </div>
            <div>
              <img className='sm:h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' src={circle}/>
              <p className='w-[80%] ml-2'>Pay Listing fee, list, Await Offer</p>
            </div>
          </div>

        </div>
 
      </main>
      <Footer/>
    </div>
  );
}

export default App;


