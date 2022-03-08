import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';

//  Stateless component & statefull component
// const HelloComponent = () => {
//     return HelloComponent
// }

class StateFullComponent extends React.Component{
    render(){
        return <p>StateFullComponent</p>
    }
}

//
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState() {
        this.setState({ hello: "Geek!" });
    }

    render() {
        return (
            <div>
                <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press Here!</a>
                </h2>
            </div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'));

reportWebVitals();