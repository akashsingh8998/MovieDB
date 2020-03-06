import React from 'react'

class MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isSelected : false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        alert("done!")
        this.setState({
            isSelected: !this.state.isSelected,
        });
        this.props.handleChange(this.props.details)
    }

    render(){
        const details = this.props.details
        let url = `http://image.tmdb.org/t/p/w185//${details["poster_path"]}`;
    return(
        <div className = "movie-card">
            <img src = {url} alt = {details["original_title"]}/>
            <div className="container">
            <h4>{details["original_title"]}</h4>
            <p>{details["overview"]}</p>
            <label>
          {/* <input
            name="isSelected"
            type="checkbox"
            checked={this.state.isSelected}
            onChange={this.handleInputChange} /> */}
            <button className = "btn btn-primary" onClick={this.handleInputChange}>Add/Remove</button>
        </label>
            </div>
        </div>
        
    );
    }
}


export default MovieCard;