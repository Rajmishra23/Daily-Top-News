import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
      


    constructor(){
        super();
        console.log("Hello everyone my name is mayur patel")
        this.state ={
            articles:[],
            loading :false,
            page:1
        }
    }
    async componentDidMount(){
        console.log("DD");
        let url  = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b0cf582a2118441d9c6727683941fc25&page=1"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    handlePrevClick = async ()=>{
      let url  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b0cf582a2118441d9c6727683941fc25&page=${this.state.page -1}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
       
      this.setState({
        page:this.state.page -1,
        articles:parsedData.articles
        
      })
    }
    handleNextClick = async ()=>{
      let url  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b0cf582a2118441d9c6727683941fc25&page=${this.state.page +1}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
       
      this.setState({
        page:this.state.page +1,
        articles:parsedData.articles
        
      })
    }
  render() {
     
    return (

      <div className='container'>
       <h1 className='my-4'>Lastes News</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>

            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
            
           
            
        </div>
        <div className='container d-flex justify-content-between mb-5'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}

export default News
