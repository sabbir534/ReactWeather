var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return(
        <div>
            <Nav/>
            Main component 
            {props.children}              
        </div>
    );
}
module.exports = Main;