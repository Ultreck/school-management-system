import React , {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
// import axios from 'axios';
// import { baseUrl } from '../baseUrl';
// import { getDatas } from '../slices/AllDataSlice';
import { Link } from 'react-router-dom';
// import 'react-calendar/'

const MainComponents = ({open}) => {
  const [date, setdate] = useState(new Date());
  // const [userData, setuserData] = useState([])
// const dispatch = useDispatch();

// useEffect(() => {
//   axios.get(baseUrl + "/datas").then(res =>{
//     setuserData(res.data);
//     // console.log(res);
//     dispatch(getDatas(res.data));
//     }).catch(err => {console.log(err);});
//   }, [dispatch])
  
  const state = useSelector(state => state.datas);

  // console.log(users);

  Chartjs.register(
      BarElement,
      CategoryScale,
      ArcElement,
      LinearScale,
      Tooltip,
      Legend
  )
  // bar chart datas
  const data = {
    labels: [2021, 2022, 20223, 2024, 2025],
    datasets:[
      {
        label: "Admission",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'aqua',
        borderColor: 'none',
        borderWidth: 0,
        borderRadius: 2,
        // width: '80%',
      }
    ]
  }
  const options = {

  }

  // doughnut chart datas
  const data2 = {
    labels: [2022, 20223, 2024],
    datasets:[
      {
        data: [0, 3, 0],
        backgroundColor: ["red", "blue", "green" ],
        borderColor: 'aqua',
        borderWidth: 1,
        width: 1
      }
    ]
  }
  // console.log(state);
  return (
    <div className='w-full lg:pl-24 mx-auto bg-white relative  overflow-auto  h-screen'>
      <div className="text flex px-5 w-full relative overflow-hidden mt-10">
        {/* Whole page and dashboard */}
          <div className="text w-full lg:w-full lg:mx-auto  xl:w-3/4  xl:mx-0">
            <div className="text md:flex justify-center lg:flex-wrap xl:flex-nowrap xl:gap-4 w-full lg:mx-auto lg:gap-6 mx-auto gap-4 lg:mt-0  py-5 xl:mx-0 xl:px-5">
                <div className="text-center w-full  md:w-1/4 lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-blue-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-blue-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <IoMdSchool className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm lg:text-lg py-2 ">Total Student</p>
                    <div className="text-xl font-semibold">{state.length}</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-red-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-red-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <GiTeacher className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm lg:text-lg py-2 ">Total Teacher</p>
                    <div className="text-xl font-semibold">50</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-green-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-green-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <MdSubject className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm lg:text-lg py-2 ">Total Courses</p>
                    <div className="text-xl font-semibold">20</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-orange-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-orange-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <SiGoogleclassroom className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm lg:text-lg py-2 ">Faculty Room</p>
                    <div className="text-xl font-semibold">80</div>
                </div>
               
            </div>
            {/* Chart section */}
            <div className="text gap-4 px-3 lg:flex">
              <div className="text w-full lg:w-2/3  lg:pl-5 flex justify-center my-3 ">
                  <div className="text bg-white shadow-lg hover:shadow-md border rounded-lg w-full h-full px-5">
                    <Bar  data={data} options={options} className='w-full mx-auto'></Bar>
                  </div>
              </div>
              <div className="text w-full lg:w-1/3  lg:px-2 flex justify-center my-3">
                    <div className="text bg-white shadow-lg hover:shadow-md border rounded-lg w-full h-full p-5">
                      <Doughnut  data={data2} options={options} className='w-full mx-auto'></Doughnut>
                    </div>
              </div>
            </div>

              {/* Top Staff and students */}
            <div className="text px-10 mt-8">
              <nav className="text  border-b ">
                <div className="text flex justify-between">
                    <h1 className="text-lg font-bold">Top</h1>
                    <ul className="text flex  gap-8 mr-10">
                      <Link>
                        <li className="text">
                            Staffs
                        </li>
                      </Link>
                      <Link>
                        <li className="text">
                            Students
                        </li>
                      </Link>
                    </ul>
                </div>
                <table className="text">
                  <thead className="text">
                    <tr className="text">
                      <th className="tex">
                        
                      </th>
                    </tr>
                  </thead>
                </table>
              </nav>

            </div>

          </div>
        {/* side page and calendar nav */}
          <div className={`text w-0 lg:w-1/4 $ border h-screen absolute  right-0 px-8 mt-5 overflow-hidden  hidden xl:flex`}>
                <div className="app">
                  <h1 className="header text-2xl font-bold underline py-2">Calendar</h1>
                  <div className="calendar-container rounded-lg border shadow-sm my-6">
                      <Calendar onChange={setdate} value={date} />
                  </div>
                  <div className="text-center">
                    Selected date: {date.toDateString()}
                  </div>
                  {/* <div className="text"></div> */}
                </div>
          </div>
      </div>
    </div>
  )
}

export default MainComponents
