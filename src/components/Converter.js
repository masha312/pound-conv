import React from 'react';

export class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            convValGr: 0,
            convValOun: 0,
            convValTons: 0
        };

    }

   render() {
       const{convValGr, convValOun, convValTons} = this.state;

       const mainDisplay = (
          
           <div id="display">
                <div id="container">
                <div class="pounds"><input onChange={(event) => {this.convert(event.currentTarget.value) }} type="text" autofocus />
                <p>pounds</p></div>
                <div><p class="grams units"> {convValGr} grams</p></div>
                <div><p class="ounces units"> {convValOun} ounces</p></div>
                <div><p class="tons units"> {convValTons} tons</p></div>
                </div>
            </div>
       )

       
        return (<div>{mainDisplay}</div>);
        
   }

    clearState() {
        this.setState({
            convValGr: 0,
            convValOun: 0,
            convValTons: 0
        });
    }


    convert(value) {
        const convGrams = (value * 453.592).toFixed(2);
        const convOunc = (value * 16).toFixed(2);
        const convTons = (value * 0.0005).toFixed(2);

        this.setState({
            convValGr: convGrams,
            convValOun: convOunc,
            convValTons: convTons
        });
    }

}