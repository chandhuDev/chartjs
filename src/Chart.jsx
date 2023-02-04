import React,{useState} from 'react'
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


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 

const Chart = ({Data}) => {
    
    

    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset',
          data: Data,
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };



  return (
   <>
   <div className='w-full h-full '>
   <Bar options={options} data={data} />;
   </div>
   </>
  )
}

export default Chart
