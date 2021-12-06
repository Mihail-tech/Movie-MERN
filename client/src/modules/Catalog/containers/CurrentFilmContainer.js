import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import CurrentFilm from '../views/CurrentFilm'
import { useHistory, useParams } from "react-router";
import {getFilmRequested} from '../actions'

const CurrentFilmContainer = (props) => {

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        const id = history.location.pathname.match()
       
        props.getFilm(id);
    }, [id]);
    


console.log(history.location.pathname.match())
    return (
        <CurrentFilm 
            film={props.film.film}
            
        />
    )
};

const mapStateToProps = state => ({
    film: state.catalog.film,
    title: state.catalog.title,
  });

const mapDispatchToProps = dispatch => ({
    getFilm: (id) => dispatch(getFilmRequested(id)),
})

export default connect(mapStateToProps, mapDispatchToProps) (CurrentFilmContainer);