import React from 'react'
import { useAppContext } from '../context/appContext'
import { Bar} from "react-chartjs-2";


const Languages = () => {
    let {userReposInfo}=useAppContext()
    let languages=userReposInfo.reduce((final,current)=>{
        if(current?.language){
            final[current.language]=final[current.language] + 1 || 1
        }
        return final
    },{})


    // const johnlanguages = userReposInfo.reduce((total, item) => {
    //     const { language, stargazers_count } = item;
    //     if (!language) return total;
    //     if (!total[language]) {
    //       total[language] = { label: language, value: 1, stars: stargazers_count };
    //     } else {
    //       total[language] = {
    //         ...total[language],
    //         value: total[language].value + 1,
    //         stars: total[language].stars + stargazers_count,
    //       };
    //     }
    //     return total;
    //   }, {});

    //   const mostUsed = Object.values(johnlanguages)
    //   .sort((a, b) => {
    //     return b.value - a.value;
    //   })
    //   .slice(0, 5);

    //   const mostPopular = Object.values(languages)
    // .sort((a, b) => {
    //   return b.stars - a.stars;
    // })
    // .map((item) => {
    //   return { ...item, value: item.stars };
    // })
    // .slice(0, 5);

//      let { stars, forks } = userReposInfo.reduce(
//     (total, item) => {
//       const { stargazers_count, name, forks } = item;
//       total.stars[stargazers_count] = { label: name, value: stargazers_count };
//       total.forks[forks] = { label: name, value: forks };
//       return total;
//     },
//     {
//       stars: {},
//       forks: {},
//     }
//   );

//   stars = Object.values(stars).slice(-5).reverse();
//   forks = Object.values(forks).slice(-5).reverse();

    

//     console.log(stars)
//     console.log(forks)



    let data={
        labels: Object.keys(languages),
        datasets: [
            {
                label: "Languages",
                data:Object.values(languages),
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: ["gray","lightcyan","pink","lightblue"]
            },
        ],
}
    
    
    return (
        <div>
      <Bar data={data} />
    </div>
  )
}

export default Languages
