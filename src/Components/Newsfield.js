import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Button from 'react-bootstrap/Button'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class Newsfield extends Component {
  static defaultProps = {
      category: 'general',
  };

  static propTypes = {
      category: PropTypes.string,
  };

  constructor(props) {
      super(props);
      this.state = {
          articles: [],
          page: 1,
          loading: false,
      };
  }

  async updateNews() {
    this.setState({ loading: true });
    const url = `http://localhost:5000/news?pageSize=10&page=${this.state.page}&category=${this.props.category}`;
    console.log(`Fetching data from: ${url}`); // Debugging: log the fetch URL
    
    try {
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
    }
}

  componentDidMount() {
      this.updateNews();
  }

  componentDidUpdate(prevProps) {
      if (this.props.category !== prevProps.category) {
          this.setState({ page: 1 }, () => this.updateNews()); // Reset page to 1 on category change
      }
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
