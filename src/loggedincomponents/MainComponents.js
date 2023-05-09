import React , {useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/'

const MainComponents = () => {
  const [date, setdate] = useState(new Date())
  return (
    <div className=''>
      <div className="text w-full relative">
        {/* Whole page and dashboard */}
          <div className="text w-2/3">

          </div>

        {/* side page and dashboard nav */}
          <div className="text w-1/3 border h-screen absolute right-0 px-8 mt-14 shadow-lg hidden lg:flex">
                <div className="app">
                  <h1 className="header text-2xl font-bold underline py-2">Calendar</h1>
                  <div className="calendar-container">
                      <Calendar onChange={setdate} value={date} />
                  </div>
                  <div className="text-center">
                    Selected date: {date.toDateString()}
                  </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default MainComponents
