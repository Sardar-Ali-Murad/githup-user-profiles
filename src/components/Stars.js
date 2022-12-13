import React from 'react'
import { useAppContext } from '../context/appContext'
// import {Vertical} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Radar } from 'recharts';
import { Line } from 'react-chartjs-2';
// import { Bar, Radar } from 'react-chartjs-2';
const Stars = () => {

  let {userReposInfo}=useAppContext()
  // It is like also watchers_count and the watchers
  let Stars=userReposInfo.reduce((final,current)=>{
      if(current?.language && current?.stargazers_count){
          final[current?.language]= final[current?.language] + current?.watchers || current?.watchers
      }
      return final
  },{})


  // console.log(Stars)

  let data={
    labels: Object.keys(Stars),
    datasets: [
        {
            label: "Stars Per Language",
            data:Object.values(Stars),
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: ["indigo","voilet","pink","lightblue"]

        },
    ],
}



  return (
    <div>
      <Line  data={data}/>
    </div>
  )
}

export default Stars
