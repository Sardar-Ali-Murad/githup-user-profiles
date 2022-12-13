import React from 'react'
import { useAppContext } from '../context/appContext'
import {Bar} from "react-chartjs-2";



const MostWatched = () => {
    let {userReposInfo}=useAppContext()
    let MostWatchedProjects=userReposInfo.reduce((final,current)=>{
        // if(current?.watchers_count){
            final[current?.name]=current?.watchers
        // }
        return final
    },{})
    

    MostWatchedProjects = Object.entries(MostWatchedProjects)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    // console.log(MostWatchedProjects)
//    console.log(Object.keys(forkedProjects).slice(0,5))
//    console.log(Object.values(forkedProjects).slice(0,5))


    
    let data={
        labels: Object.keys(MostWatchedProjects).slice(0,5),
        datasets: [
            {
                label: "Most Watched Projects",
                data:Object.values(MostWatchedProjects).slice(0,5),
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: ["red","green","blue","orange"]
            },
        ],
}
  return (
    <div>
        <Bar data={data}/>
    </div>
  )
}

export default MostWatched
