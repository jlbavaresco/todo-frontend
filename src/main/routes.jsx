import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>        
        {/* Caso alguém insira uma url inválida vai para esta que está em Redirect */}       
        <Redirect from='*' to='/todos'/>
    </Router>
)