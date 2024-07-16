import React, { Component } from 'react'
import './Team.css';


export default class TeamComp extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <section>
            <div className="member">
                <div className="member-img">
                    <img src={this.props.src} alt="#" />
                    <div className="social">
                        <a href="#">
                            <i className='bi bi-twitter'></i>
                        </a>
                        <a href="#">
                            <i className='bi bi-facebook'></i>
                        </a>
                        <a href="#">
                            <i className='bi bi-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='bi bi-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className="member-info">
                    <h4 className='member-info_name'>{this.props.name}</h4>
                    <span className='member-job'>{this.props.job}</span>
                </div>
            </div>
        </section>
    )
  }
}
