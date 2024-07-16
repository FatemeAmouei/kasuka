import React, { Component } from 'react';
import TeamComp from './TeamComp.js'
import './Team.css';
import '../title/title.css';

export default class Team extends Component {
  render() {
    return (
      <div>
        <div className="Team-content">
            <div className="titles">
                <h3 className="title">تیم</h3>
                <h2 className="subtitle">تیم ما را بررسی کنید</h2>
            </div>
            <div className="TeamComps">
                <TeamComp src='https://hivalearn.ir/templates/kasuka/assets/img/team/team-1.jpg' name=" والتر وایت" job="مدیر ارشد اجرایی"/>
                <TeamComp src='https://hivalearn.ir/templates/kasuka/assets/img/team/team-2.jpg' name=" سارا جونسون" job="مدیر تولید "/>
                <TeamComp src='https://hivalearn.ir/templates/kasuka/assets/img/team/team-3.jpg' name=" ویلیام اندرسون " job=" CTO "/>
                <TeamComp src='https://hivalearn.ir/templates/kasuka/assets/img/team/team-4.jpg' name=" آماندا جپسون " job="حسابدار"/>
            </div>
        </div>
      </div>
    )
  }
}
