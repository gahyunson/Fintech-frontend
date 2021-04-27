import React from 'react'
import '../css/MainPage.css'

function MainPage() {
    return (
      <div>
        <div className="bg">
            <span className="title">Holy Connect</span>
        </div>
        <div className="mainBody">
             <div className="mainContent">
                Be with you, <br/>
                Be valuable.
             </div>
             <div className="subContent">
                Holy Connect 가치를 부여하다
             </div>
            <button className="btn-first">
                현금
            </button>
            <button className="btn-second">
                스케줄
            </button>
        </div>
      </div>
    );
}

export default MainPage