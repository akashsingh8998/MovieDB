import React from 'react'
import MovieList from './MovieList';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : null, movies:[], likedMovies:[],isFavList:true};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getList = this.getList.bind(this)
        // this.favChange = this.favChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        // alert(this.state.value);
        fetch("https://api.themoviedb.org/3/search/movie?api_key=e15f8d77a5fad8941224bad7cd11c12b&language=en-US&query="+this.state.value+"&page=1&include_adult=false")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              movies: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        event.preventDefault();
    }

    getList(movie){
            this.setState({
                likedMovies: movie
              })
        }

    // favChange(){
    //     this.setState({
    //         isFavList: !this.state.isFavList,
    //     })
    // }

    render(){
        return(
            <div>
            <h1>Movies to watch before you Die!!!</h1>
            <table align = "center">
              <tr>
                <td>
            <form onSubmit={this.handleSubmit}>
              <table>
                <tr>
                  <td>
                <label><input className="form-control" type="text" placeholder="Enter a movie name" onChange={this.handleChange} /></label></td>
                <td><input className = "btn btn-primary" type="submit" value="Submit" onClick = {()=>{this.setState({isFavList:false})}}/></td>
                </tr>
                </table>
            </form></td>
            <td>
            <button className="btn btn-primary" onClick = {()=>{this.setState({isFavList:true})}}>Movies to be watched!</button></td>
            </tr>
            </table>
            <br></br>
            {this.state.isFavList ? <MovieList val = {this.state.likedMovies} getList = {this.getList}/> :
             <MovieList val = {this.state.movies} getList= {this.getList}/>}
             <br></br>
             <br></br>
            </div>
        )
    }
}

export default NameForm; 