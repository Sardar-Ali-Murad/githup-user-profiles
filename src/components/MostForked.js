import React from 'react'
import { useAppContext } from '../context/appContext'
import {Line} from "react-chartjs-2";


const MostForked = () => {
    let {userReposInfo}=useAppContext()
    let forkedProjects=userReposInfo.reduce((final,current)=>{
        if(current?.forks_count){
            final[current?.name]=current?.forks_count
        }
        return final
    },{})
    // console.log(forkedProjects)

    forkedProjects = Object.entries(forkedProjects)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

  //  console.log(forkedProjects)
  //  console.log(Object.keys(forkedProjects).slice(0,5))
  //  console.log(Object.values(forkedProjects).slice(0,5))


    let data={
        labels: Object.keys(forkedProjects).slice(0,5),
        datasets: [
            {
                label: "Most Forked Projects",
                data:Object.values(forkedProjects).slice(0,5),
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: ["indigo","voilet","pink","lightblue"]
            },
        ],
}
  return (
    <div>
      <Line data={data}/>
    </div>
  )
}

export default MostForked
