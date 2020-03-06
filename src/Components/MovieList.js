import React from 'react'
import MovieCard from './MovieCard'

class MovieList extends React.Component{
    constructor(){
        super()
        this.state={selectedMovies: [],}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(movie){
        if(!this.state.selectedMovies.includes(movie)){
            this.setState({
                selectedMovies: this.state.selectedMovies.concat(movie)
              },() => this.props.getList(this.state.selectedMovies))
        }else{
            let index = this.state.selectedMovies.indexOf(movie)
            this.setState({
                selectedMovies: this.state.selectedMovies.filter((_, i) => i !== index)
              },()=>this.props.getList(this.state.selectedMovies));
        }
        
    }

    render(){
        let movielist = this.props.val;
        let moviemap = movielist.map((movie)=>{
            return(
                <>
                <MovieCard key={movie.id} details={movie} handleChange={this.handleChange}/>
                <br/>
                <br/>
                </>
            )
        });
        return (
            <div className = "image-list">
            {moviemap}
            </div>
        );

    }
}

export default MovieList;