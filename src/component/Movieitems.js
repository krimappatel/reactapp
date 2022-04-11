import React, { Component } from 'react'

export class Movieitems extends Component {
  render() {
    const {title,description,image,url}=this.props;
    return (
      <div className='container'>
        <div className="card" style={{width:"18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>    
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target='_blank' className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Movieitems
