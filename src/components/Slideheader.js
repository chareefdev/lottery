import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Slideheader extends Component {
    render() {
        return (
            <div style={{border:"1px solid red",height:'250px',margin:0}}>
                <Link to='/' className='btn btn-primary'>
                        Create Todo
                </Link>
            </div>
        );
    }
}

export default Slideheader;