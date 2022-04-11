import React, { useEffect, useState } from 'react'
import Movieitems from './Movieitems'
import axios from 'axios';

function Moviedata() {
    const [articles,setArticles]=useState(null);
        useEffect(()=>{
            // fetchData()
            //  .catch(console.error())
            // fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eed24389dc4442149abc57c52589d127')
            //     .then(response => response.json())
            //     .then(data => setArticles(data.articles));
            
                axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=eed24389dc4442149abc57c52589d127`)
                .then(res => res.data)
                .then(data=>setArticles(data.articles));
            },[])
    const [title,setTitle]=useState("");
    const [fulltitle,setFulltitle]=useState("");
    const [rank,setRank]=useState([]);
           function handlerClicker(){
               const user={
                   title:title,
                   fulltitle:fulltitle,
                   rank:rank
                }
                // post method for insert into dataset
                axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                  })
            }

  return (
      <>
        <div className='row'>
            {articles?articles.map((element,index)=>(
                <div className='col-sm-4' key={index}>
                    <Movieitems title={element.title} description={element.description} image={element.urlToImage} url={element.url}/>
                </div>
                )
            ):''}
        </div>
        <div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name='title'/>
            <input type="text" value={fulltitle} onChange={(e)=>{setFulltitle(e.target.value)}} name='fulltitle'/>
            <input type="text" value={rank} onChange={(e)=>{setRank(e.target.value)}} name='rank'/>
            <button type='buttton' onClick={handlerClicker}>Save</button>
        </div>
    </>
  )
}

export default Moviedata

// import React, { Component } from 'react'
// import Movieitems from './Movieitems'

// export class Moviedata extends Component {
   
//     constructor(props){
//         super(props)
//         this.state={
//             articles:null
//         }
//     }
//     async componentDidMount(){
        // console.log('fetch data')
        // let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=eed24389dc4442149abc57c52589d127";
        // let data=await fetch(url);
        // let parsedata= await data.json()
        // console.log(parsedata)
        // this.setState({articles:parsedata.articles})
//     }
//   render() {
//       const {articles}=this.state
//     return (
//         <div className='row'>
//         {articles?articles.map((element,index)=>(
//             <div className='col-sm-4' key={index}>
//                 <Movieitems  title={element.title} description={element.description} image={element.urlToImage} url={element.url}/>
//             </div>
//             )
//         ):''}
//         </div>
//     )
//   }
// }

// export default Moviedata
