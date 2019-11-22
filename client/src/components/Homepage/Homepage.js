import React, { Component } from 'react'
import Result from '../Result/Result.js'
import './Homepage.scss'
import image from '../../assets/Artboard.png'
import stars from '../../assets/stars_bg.png'
import astro from '../../assets/atronaut.png'
import graph from '../../assets/Sheet1.png'
import bg from '../../assets/bg-2.png'
import logo from '../../assets/logo.png'
import image2 from '../../assets/Artboard-2.png'
import image3 from '../../assets/sheet4.png'
import image4 from '../../assets/Sheet3.png'
import image5 from '../../assets/Sheet2.png'

export class Homepage extends Component {
    state = {
        isBoxVisible: false,
        isClicked1: false,
        isClicked2: false,
        isClicked3: false,
        isClicked4: false,
        isClicked5: false,
        isClicked6: false,
        isClicked7: false,
        isClicked8: false,
        isClicked9: false,
    }
    //  data = [
    //     {name:"small" ,
    //      value:1104 ,
    //     percentage:46   },
    //     {name:"medium" ,
    //     value:596 ,
    //     percentage:24.8   },
    //     {name:"large" ,
    //     value:701 ,
    //     percentage:29.2   }
    // ]

    toggleClick1 = () => {
        this.setState(prevState => ({ isClicked1: 
            !prevState.isClicked1
        }))
    }
    toggleClick2 = () => {
        this.setState(prevState => ({ isClicked2: 
            !prevState.isClicked2 
        }))
    }
    toggleClick3 = () => {
        this.setState(prevState => ({ isClicked3: 
            !prevState.isClicked3
        }))
    }
    toggleClick4 = () => {
        this.setState(prevState => ({ isClicked4: 
            !prevState.isClicked4
        }))
    }
    toggleClick5 = () => {
        this.setState(prevState => ({ isClicked5: 
            !prevState.isClicked5
        }))
    }
    toggleClick6 = () => {
        this.setState(prevState => ({ isClicked6: 
            !prevState.isClicked6
        }))
    }
    toggleClick7 = () => {
        this.setState(prevState => ({ isClicked7: 
            !prevState.isClicked7
        }))
    }
    toggleClick8 = () => {
        this.setState(prevState => ({ isClicked8: 
            !prevState.isClicked8
        }))
    }
    toggleClick9 = () => {
        this.setState(prevState => ({ isClicked9: 
            !prevState.isClicked9,
            isBoxVisible: 
            !prevState.isBoxVisible
        }))
    }
    
    render() {
        
        return (
            <div>
                
                <div className="homepage">
                   
                    <div className="section-box">
                    <img className="section-image" src={logo} alt="logo"></img>
                    <div className="homepage__content-box">
                        <div className="homepage__content">
                            <h1 className="homepage__title">HEY TECH GRAD!</h1>
                            <h4 className="homepage__p">Launch your tech career in the right direction. Answer a few simple questions to narrow down your job search to the employers that meet your exact needs - from training to speed of digital adoption</h4>
                
                        </div>
                        <img className="homepage__image"src={image2} alt="rocket ship"></img>
                    </div>
                    <div className="header">
                        <h1 className="header__title">What Do You Look For In A Work Place?</h1>
                    </div>
                <div className="button-box">   
                    <div className="button-box1">
                        <button className={`box box1 ${this.state.isClicked1 ? "box-clicked" : ""}`} onClick={this.toggleClick1}>Small Company</button>
                        <button className={`box box2 ${this.state.isClicked2 ? "box-clicked" : ""}`} onClick={this.toggleClick2}>Medium Company</button>
                        <button className={`box box3 ${this.state.isClicked3 ? "box-clicked" : ""}`} onClick={this.toggleClick3}>Big Company</button>
                    </div>    
                    <div className="button-box2">
                        <button className={`box box4 ${this.state.isClicked4 ? "box-clicked" : ""}`} onClick={this.toggleClick4}>Training Provided</button>
                        <button className={`box box5 ${this.state.isClicked5 ? "box-clicked" : ""}`} onClick={this.toggleClick5}>No Training</button>
                    
                    </div> 
                    <div className="button-box3">
                        <button className={`box box6 ${this.state.isClicked6 ? "box-clicked" : ""}`} onClick={this.toggleClick6}>Laptop Provided</button>
                        <button className={`box box7 ${this.state.isClicked7 ? "box-clicked" : ""}`} onClick={this.toggleClick7}>No Perks</button>
                    </div>
                    <div className="button-box4">
                        <button className={`box box8 ${this.state.isClicked8 ? "box-clicked" : ""}`} onClick={this.toggleClick8}>Work At The Office</button>
                        <button className={`box box9 ${this.state.isClicked9 ? "box-clicked" : ""}`} onClick={this.toggleClick9}>Work Remotely</button>
                    </div>
                    </div>
                
                </div>
                <img className="last-image"src={astro} alt="astro"></img>
                <div className="image-box">
                        <img className={`result ${this.state.isClicked9 ? "result-image" : ""}`} src={image3} alt="hidden"></img>
                        <img className={`result ${this.state.isClicked9 ? "result-image" : ""}`} src={image4} alt="hidden"></img>
                        <img className={`result ${this.state.isClicked9 ? "result-image" : ""}`} src={image5} alt="hidden"></img>
                </div>
                </div>
                
            </div>

        )
    }
}

export default Homepage
