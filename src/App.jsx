import {  useState} from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,} from "chart.js";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip
  );



  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  let count=0
  const labels = [];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "My Data",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  }
  

function App() {
  const [inputData, setInputData] = useState()
  const [inputValue, setInputValue] = useState([])
  const [sortData,setSortData]=useState(chartData)
  const [labelData,setLabelData]=useState([])

  function sort(e){
    const sortedData=inputValue.sort(function (a,b){
      return a-b
     })
    setData(sortedData)
    setInputValue([])
  }
  
 function submitData(e){
     if(e.key==="Enter"){
       setData(inputValue)
       setInputData('')
       
      }
      
  }

  function setData(Data){
     setSortData({
      ...chartData,
       labels:labelData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: Data
        }
      ]
    });
  }


  function generateArray(limit) {
    var result = [];
    for (var i = 0; i < limit; i++) {
      result.push(i);
    }
    return result;
  }



  function handleChange(e){
    setInputData(e.target.value)
    
    if(e.target.value.split(',').length>1){
      setInputValue(e.target.value.split(','))
      setLabelData(generateArray(e.target.value.split(',').length))
    }else{
      setInputValue([...inputValue,e.target.value.split(',')])
      setLabelData([...labelData,count++])
    }
    
  }

 

   return (
    <>
      <div className='flex w-full h-screen  flex-col justify-start   items-center'>
      <div className='flex flex-row w-2/5 gap-x-5 mt-12 justify-center'>
      <input 
      className="bg-white border focus:outline focus:outline-offset-2 focus:outline-pink-500 :bg-slate-700 border-gray-400 rounded-md  py-2 px-4 block w-2/6  leading-tight focus:outline-none hover:shadow-outline-blue focus:shadow-outline-blue transition duration-150 ease-in-out" 
      type="text" 
      placeholder="Enter values"
      value={inputData}
      onChange={handleChange}
      onKeyUp={submitData}
      />
      <button onClick={sort} className='transition px-4 py-2 rounded-lg ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Sort</button>
      </div>  
      <div className='w-3/5 h-3/5 rounded-md bg-white mt-14 shadow-xl cursor-pointer'>
      <Bar options={options} data={sortData} redraw={true}/>;
      </div>
      </div>
    </>
  )
}

export default App
