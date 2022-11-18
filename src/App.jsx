import { useState } from 'react'
import {
  RiMenuLine,
  RiUser3Line,
  RiAddLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiDeleteBin6Line
} from 'react-icons/ri'
import {IoCloudSharp,  IoAppsOutline} from 'react-icons/io5'
import Sidebar from "./components/shared/Sidebar"
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

  }


  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />

      {/* menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl py-2 text-gray-400 p-4 flex items-center justify-around rounded-tl-xl rounded-tr-xl">
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button className='p-2'>
          <IoCloudSharp />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiMenuLine /> : <IoAppsOutline />}
        </button>
      </nav>

      <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
        <div className="lg:col-span-6 md:p-8">
          <header>
            {/* title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

              <div className="">

                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>1 de noviembre 2022</p>

              </div>

              <form action="">

                <div className="w-full relative">
                  <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
                  <input
                    type="text"
                    className='w-full py-2 pl-10 pr-4 bg-[#1f1d2b] rounded-lg text-gray-300 outline-none'
                    placeholder='Search'/>
                </div>

              </form>
            </div>

            {/* tabs navs */}
            <nav className='mx-3 text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
              <a href="#" className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'>Hot dishes</a>
              <a href="#" className='py-2 pr-4'>Col dishes</a>
              <a href="#" className='py-2 pr-4'>Soup</a>
              <a href="#" className='py-2'>Grill</a>
            </nav>

          </header>

            {/* title content food-menu */}
            <div className="flex items-center justify-between mb-20">

                <h2 className='text-xl text-gray-300'>Choose Dishes</h2>

                <button className='flex items-center justify-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 rounded-lg w-40'>
                  <RiArrowDownSLine /> Dine in
                </button>
            </div>

            {/* content menu */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato1.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato2.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato3.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato4.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato5.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato6.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato7.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato8.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>

              {/* card */}
              <div className="bg-[#1f1d2b] py-8 rounded-xl flex flex-col items-center justify-between text-gray-300 text-center gap-1">

                <img 
                  src="./src/img/platos/plato9.png" 
                  className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full my-50' 
                  alt="" 
                />
                <p className='text-xl'>Spacy seassoned seafood nodles</p>
                <span className='text-gray-400'>$ 2.29</span>
                <p className='text-gray-600'>20 Bowls available</p>
              </div>            

            </div>

        </div>

        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full">

          {/* orders */}
          <div className="relative pt-16 text-gray-300 p-8">

            <IoAppsOutline className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl' />
            <h1 className='text-2xl my-4'>Orders #152414</h1>

            <div className="flex items-center gap-4 flex-wrap">
              <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>Dine in</button>
              <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>To Go</button>
              <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>Delivey</button>
            </div>

            {/* orders - cards */}
            <div className="">

              <div className="flex items-center">

                <img 
                  src="./src/img/platos/plato1.png" 
                  className='w-10 h-10 object-cover shadow-2xl rounded-full my-50 mr-5' 
                  alt="" 
                />
                
                <div className="flex flex-col">
                  <p className='text-sm'>Spacy seassoned seafood nodles</p>
                  <span className='text-gray-400'>$ 2.29</span>
                </div>

                <span className='bg-[#262837] py-3 px-5 rounded text-xl'>5</span>

                <div className="">
                  <span>$ 4,58</span>
                  <RiDeleteBin6Line className='border border-[#ec7c6a] text-xl p-4 text-[#ec7c6a]'/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

export default App
