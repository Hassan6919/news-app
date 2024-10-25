import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Button from 'react-bootstrap/Button'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class Newsfield extends Component {
  static defaultProps = {
    category : "general",
  }
   static propTypes = {
     category: PropTypes.string,
   }  
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
        }
    }
    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a53dba2494e74a4cb148aee8964fbd36&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data1 = await fetch(url)
        let parsedData = await data1.json()
        console.log(parsedData)
        this.setState ({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }
    async componentDidMount(){
      this.updateNews()
    }
    haprev = async()=>{
      
      this.setState({page: this.state.page - 1 })
      this.updateNews()


    }

    haNext = async()=>{
      
     this.setState({page: this.state.page + 1 })
     this.updateNews()

    }
  render() {
    return ( <>
      <div className='container my-3'>
            <h1 className='text-center text-white border-bottom pb-3 mb-3' style={{margin: "30px 0px"}}>HS News - Network</h1>
            {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.title} style={{margin: "0px 0px 20px"}}>
            <Newsitem title={element.title} description={element.description} image={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>
                
            })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
      <Button variant="dark" onClick={this.haprev} disabled={this.state.page<=1}>	&larr; Previous  </Button>
      <Button variant="dark" onClick={this.haNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</Button>
      </div>
      </>
    )
  }
}

export default Newsfield
