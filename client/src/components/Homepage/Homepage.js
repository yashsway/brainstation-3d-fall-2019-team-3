import React, { Component } from 'react'

export class Homepage extends Component {

     data = [
        {name:"small" ,
         value:1104 ,
        percentage:46   },
        {name:"medium" ,
        value:596 ,
        percentage:24.8   },
        {name:"large" ,
        value:701 ,
        percentage:29.2   }
    ]
    
    render() {
        return (
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Homepage
