import React , {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import {useSelector } from 'react-redux';
import { IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
// import { Link } from 'react-router-dom';
import lecturers from './Lecturers';
import Footer from './Footer';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import SnackBar from '../materialUis/SnackBar';
import male from "../images2/maleAvatar.jpg";
// import female from "../images2/femaleAvatar.jpg";
import TimestampDisplay from './TimestampDisplay';
// import 'react-calendar/'

const MainComponents = ({open}) => {
  const state = useSelector(state => state.datas);
  const user = useSelector(state => state.users);
  const [date, setdate] = useState(new Date());
  const [value, setValue] = useState(0);
  const [reload, setreload] = useState(null);
  const [msg, setmsg] = useState("Thanks for rating our app. Your rating was ");
  const [realValue, setrealValue] = useState([]);
  const [hover, setHover] = useState(-1);
  const user_id = JSON.parse(sessionStorage.getItem("user_id"));
// console.log(user_id);
const [oopen, setOpen] = useState(false);


const handleClick = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

useEffect(() => {
axios.get(baseUrl + "/getRating").then((res) => {
  let [result] = res.data.filter((value, index) => value.user_id === user_id);
  setrealValue(res.data);
  setValue(result.rating);
})
}, [msg, reload, user_id])


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
    labels: [2021, 2022, 2023, 2024],
    datasets:[
      {
        label: "Admission",
        data: [1, 5, state.length, 0],
        backgroundColor:[ "green"],
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
    labels: ["Student", "Staff"],
    datasets:[
      {
        data: [state.length, lecturers.length],
        backgroundColor: ["blue", "green" ],
        borderColor: 'aqua',
        borderWidth: 1,
        width: 1
      }
    ]
  }

const handeChanges = (e, rating) =>{
  const fullName = user.firstname + " " + user.lastname;
  const path = user.path;
  const review = " ";
  axios.post(baseUrl + "/rating", {rating, fullName, review, user_id, path}).then((res) => {
    setValue(rating);
    console.log(res);
    setreload(res)
    setmsg("Thanks for rating our app. Your rating was")
  })
  handleClick();
}

  const labels = {
    0.5: 'Poor',
    1: 'Fair',
    1.5: 'Ok',
    2: 'Good',
    2.5: 'Nice',
    3: 'Better',
    3.5: 'Best',
    4: 'Impresive',
    4.5: 'Amazing',
    5: 'Excellent',
  };


  function getLabelText(value) {
    // console.log(value);
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  const options1 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '',
    perPage: 3,
    perMove: 1,
     focus  : 'center',
     speed:100
  };
  const options2 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '',
    perPage: 2,
    perMove: 1,
     focus  : 'start',
     speed:100
  };
  const options3 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '',
    perPage: 1,
    perMove: 1,
     focus  : 'center',
     speed:100
  };
  return (
    <div className='w-full lg:pl-24 mx-auto bg-white relative  overflow-auto  h-screen'>
      <div className="text flex px-5 w-full relative overflow-hidden mt-16">
        {/* Whole page and dashboard */}
          <div className="text-sm w-full lg:w-full lg:mx-auto  xl:w-3/4  xl:mx-0 ">
            <div className="text md:flex justify-center lg:flex-wrap xl:flex-nowrap xl:gap-4 w-full lg:mx-auto lg:gap-6 mx-auto gap-4 lg:mt-0  py-5 xl:mx-0 xl:px-5">
                <div className="text-center w-full  md:w-1/4 lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-blue-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-blue-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <IoMdSchool className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm py-2 ">Total Students</p>
                    <div className="text-xl font-semibold">{state.length}</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-red-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-red-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <GiTeacher className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm py-2 ">Total Staffs</p>
                    <div className="text-xl font-semibold">{lecturers.length}</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-green-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-green-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <MdSubject className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm py-2 ">Total Courses</p>
                    <div className="text-xl font-semibold">20</div>
                </div>
                <div className="text-center w-full md:w-1/4  lg:w-2/5 xl:w-1/4 my-5 h-40 px-2 py-5 bg-orange-100 rounded-lg">
                  <div className="text-white mx-auto w-10 h-10 bg-orange-600 p-2" style={{clipPath:"polygon(0 25%, 51% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)"}}>
                    <SiGoogleclassroom className='z-50 w-full h-full'/>
                  </div>
                    <p className="text-sm py-2 ">Faculty Room</p>
                    <div className="text-xl font-semibold">80</div>
                </div>
               
            </div>
            {/* Chart section */}
            <div className="text lg:px-5">
            <h1 className="text text-xl ml-10">Statistics</h1>
            <div className="text gap-4 lg:px-3 lg:flex">
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
            </div>

              {/* Top Staff and students */}
            <div className="text lg:px-10 mt-2">
            <div className="text my-10 border xl:hidden shadow-lg p-5">
                    <h2 className="text-blue-800">Rate Our App</h2>
                  {/* <input type="text" placeholder="your review" class=" border"/> */}
                      <Box
                            sx={{
                              width: 200,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => handeChanges(event, newValue)}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                  </div>
              <nav className="text ">
                <div className=" flex justify-between">
                    <h1 className="text-xl my-2 ">Top 5 Staff</h1>
                </div>
                <table className="text-sm  w-full mb-10">
                  <thead className="text">
                      <tr className="text border border-slate-500 py-1 w-full">
                        <th className="text  border border-slate-500 py-1">Name</th>
                        <th className="text  border border-slate-500 py-1">Course</th>
                      </tr>
                  </thead>
                 <tbody className="text-sm">
                  {lecturers.map((value, index) => (
                    <>
                      {index <= 4? 
                      <tr className="text border w-full border-slate-500 lg:px-8  py-1" key={value.picture}>
                        <td className="text mx-5 lg:px-5 px-2 gap-5 py-1">
                          <td className="text rounded-full w-10 h-10">
                            <img src={value.picture} alt="" className="text w-full h-full rounded-full"  />
                          </td>
                          <td className="text px-5">{value.name}</td>
                          </td>
                        <td className="text  border border-slate-500 lg:px-10 px-2 py-1">{value.course}</td>
                      </tr>
                      :
                      <td className="text hidden"></td>
                    }
                    </>
                  ))}
                 </tbody>
                </table>
              </nav>

                <div className="justify-between mb-10">
                    <h1 className="text-xl my-2">Review</h1>
                      {/* Largger Screen scrolling for skills and Tools tab*/}
                  <Splide hasTrack={ false } options={options1} className='py-5 px-16 hidden lg:flex justify-center'>
                    <SplideTrack>
                    {realValue.map((val, index) => (
                      <SplideSlide  className='py-3  '>
                        <div className="text-center text-xs  bg-gray-100 shadow-md  px-5 py-4 rounded grid justify-center">
                            <div className="text relative before:content-[' '] before:w-7 before:h-7 before:bg-gray-100 before:absolute before:-translate-x-[31px] before:rotate-[-35deg]
                             before:border-r-8 before:border-white
                            before:rounded-tr-3xl before:translate-y-1.5 after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 after:absolute after:translate-x-[36px] after:rotate-[35deg]  after:border-l-8 after:border-white after:rounded-tl-3xl  after:translate-y-1.5 w-12 h-12 rounded-full border-8 -mt-9 border-white mx-auto flex">
                              <img src={`${val.path? val.path : male}`} alt="" className="text z-50 w-full h-full rounded-full" />
                            </div>
                            <h1 className="text-xs mb-3 mt-4 font-semibold text-slate-700">{val.name}</h1>
                            <div className="text -mt-2">
                                <p className="text-xs my-0.5">{val.rating === 0.5 && `This is a Poor App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 1 && `This is a Fair App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 1.5 && `This is an Ok App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 2 && `This is a Good App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 2.5 && `This is a Nice App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 3 && `This is a Better App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 3.5 && `This is a Best App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 4 && `This is an Impressive App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 4.5 && `This is an Amaizing App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 5 && `This is an Excellent App`}</p>
                            </div>
                              <div className="text-center mx-auto ">
                                  <Stack spacing={1} className=''>
                                    <Rating name="half-rating-read" defaultValue={val.rating} precision={0.5} readOnly className='' />
                                 </Stack>
                              </div>
                            <h1 className="text mt-.5">Rating: {val.rating}</h1>
                            <h1 className=" text-blue-600 mt-2 font-semibold text-md">
                              <TimestampDisplay className="" timestamp={val.createdAt}/>
                            </h1>
                        </div>
                      </SplideSlide>
                ))}
                  </SplideTrack>
                  </Splide>
                  {/* Median screen  */}
                  <Splide hasTrack={ false } options={options2} className='py-5 hidden md:flex lg:hidden px-16'>
                    <SplideTrack>
                    {realValue.map((val, index) => (
                      <SplideSlide  className='py-3'>
                        <div className="text-center text-xs  bg-gray-100 shadow-md  px-5 py-4 rounded grid justify-center">
                            <div className="text relative before:content-[' '] before:w-7 before:h-7 before:bg-gray-100 before:absolute before:-translate-x-[31px] before:rotate-[-35deg]
                             before:border-r-8 before:border-white
                            before:rounded-tr-3xl before:translate-y-1.5 after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 after:absolute after:translate-x-[36px] after:rotate-[35deg]  after:border-l-8 after:border-white after:rounded-tl-3xl  after:translate-y-1.5 w-12 h-12 rounded-full border-8 -mt-9 border-white mx-auto flex">
                              <img src={`${val.path? val.path : male}`} alt="" className="text z-50 w-full h-full rounded-full" />
                            </div>
                            <h1 className="text-xs mb-3 mt-4 font-semibold text-slate-700">{val.name}</h1>
                            <div className="text -mt-2">
                              <p className="text-xs my-0.5">{val.rating === 0.5 && `This is a Poor App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 1 && `This is a Fair App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 1.5 && `This is a Ok App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 2 && `This is a Good App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 2.5 && `This is a Nice App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 3 && `This is a Better App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 3.5 && `This is a Best App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 4 && `This is an Impressive App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 4.5 && `This is an Amaizing App`}</p>
                              <p className="text-xs my-0.5">{val.rating === 5 && `This is an Excellent App`}</p>
                            </div>
                              <div className="text-center ml-3 ">
                                  <Stack spacing={1} className=''>
                                    <Rating name="half-rating-read" defaultValue={val.rating} precision={0.5} readOnly className='' />
                                 </Stack>
                              </div>
                            <h1 className="text mt-.5">Rating: {val.rating}</h1>
                            <h1 className=" text-blue-600 mt-2 font-semibold text-md">
                              <TimestampDisplay className="" timestamp={val.createdAt}/>
                            </h1>
                        </div>
                      </SplideSlide>
                ))}
                  </SplideTrack>
                  </Splide>
                  {/* Smaller screen  */}
                  <Splide hasTrack={ false } options={options3} className='py-5 md:hidden px-16'>
                    <SplideTrack>
                    {realValue.map((val, index) => (
                      <SplideSlide  className='py-3'>
                        <div className="text-center text-xs  bg-gray-100 shadow-md px-5 py-4 rounded grid justify-center">
                            <div className="text relative before:content-[' '] before:w-7 before:h-7 before:bg-gray-100 before:absolute before:-translate-x-[31px] before:rotate-[-35deg]
                             before:border-r-8 before:border-white
                            before:rounded-tr-3xl before:translate-y-1.5 after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 after:absolute after:translate-x-[36px] after:rotate-[35deg]  after:border-l-8 after:border-white after:rounded-tl-3xl  after:translate-y-1.5 w-12 h-12 rounded-full border-8 -mt-9 border-white mx-auto flex">
                              <img src={`${val.path}`} alt="" className="text z-50 w-full h-full rounded-full" />
                            </div>
                            <h1 className="text-xs mb-3 mt-4 font-semibold text-slate-700">{val.name}</h1>
                            <div className="text -mt-2">
                                <p className="text-xs my-0.5">{val.rating === 0.5 && `This is a Poor App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 1 && `This is a Fair App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 1.5 && `This is a Ok App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 2 && `This is a Good App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 2.5 && `This is a Nice App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 3 && `This is a Better App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 3.5 && `This is a Best App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 4 && `This is an Impressive App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 4.5 && `This is an Amaizing App`}</p>
                                <p className="text-xs my-0.5">{val.rating === 5 && `This is an Excellent App`}</p>
                            </div>
                              <div className="text-center ml-3 ">
                                  <Stack spacing={1} className=''>
                                    <Rating name="half-rating-read" defaultValue={val.rating} precision={0.5} readOnly className='' />
                                 </Stack>
                              </div>
                            <h1 className="text mt-.5">Rating: {val.rating}</h1>
                            <h1 className=" text-blue-600 mt-2 font-semibold text-md">
                              <TimestampDisplay className="" timestamp={val.createdAt}/>
                            </h1>
                        </div>
                      </SplideSlide>
                ))}
                  </SplideTrack>
                  </Splide>
                </div>
            </div>
              <Footer/>
            </div>
        {/* side page and calendar nav */}
          <div className={`text w-0 lg:w-1/4 h-screen fixed  right-0 px-8 mt-4 overflow-hidden  hidden xl:flex`}>
                <div className="app">
                  <h1 className="header text-2xl font-bold underline py-2">Calendar</h1>
                  <div className="calendar-container rounded-lg border shadow-sm my-6">
                      <Calendar onChange={setdate} value={date} />
                  </div>
                  <div className="text-center">
                    Selected date: {date.toDateString()}
                  </div>
                  {/* <div className="text"></div> */}
                  <div className="text mt-10 border shadow-lg p-5">
                    <h2 className="text-blue-800">Rate Our App</h2>
                    {/* <input type="text" placeholder="your review" class=" border"/> */}
                      <Box
                            sx={{
                              width: 200,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => handeChanges(event, newValue)}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                  </div>
                </div>
          </div>
      </div>
      <SnackBar oopen={oopen} msg={msg} value={value} handleClose={handleClose} handleClick={handleClick} />
    </div>
  )
}

export default MainComponents
