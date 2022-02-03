import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { type } from '@testing-library/user-event/dist/type';
// import { Component, Profiler } from 'react/cjs/react.production.min';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
function formatName(user){
  return user.firstname + ' ' + user.lastname;
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
//const user = {firstname: 'muhammad', lastname: 'naeem'};
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here again!</h2>
//   </div>
// );
//const user = {avatarUrl: 'https://www.reactjs.org'};
//const element = <a href="https://www.reactjs.org"> react js link </a>;
// const element = <img src={user.avatarUrl} />;
//const name = 'Naeem'
//const element = getGreeting(user);

// const element = (
//     <h1 className="greeting">
//       Hello G
//     </h1>
// );
// const definedElement = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'Hello G'
// );
// const defElement = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
//}
// const props = {name: 'heading'}

class Name extends React.Component{
  render(){
    return <h1>{this.props.name}</h1>;
  }
}
class Names extends React.Component{
  render(){
    return (
      <div>
        <Name name="hi naeem" />
        <Name name="hi ali" />
        <Name name="hi usman" />
      </div>
    );
  }
}

function Image(props){
  return <img className="Avatar" src={props.user.avatarUrl}  alt={props.user.name} />
}
function UserInfo(props){
  return <div className="UserInfo">
          <Image user={props.user}/>
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
}
function Description(props){
  return <div className="Comment-text">{props.text}</div>
}
function formatDate(date) {
  return date.toLocaleDateString();
}
function TodayDate(props){
  return <div className="Comment-date">{formatDate(props.todayDate)}</div>
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <Description text={props.description}/>
      <TodayDate todayDate={props.date}></TodayDate>
    </div>
  );
}
const comment = {
  date: new Date(),
  description: 'I am a specialist software engineer!',
  author: {
    name: 'Hello Guys',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
//const componentElement = <Comment date={comment.date} description={comment.description} author={comment.author} />
// ReactDOM.render(
//   componentElement,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
function FormatDate(props) {
  return <h2>it is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      posts: [],
      comments: []
    };
  }
  componentDidMount(){
    this.timerId =  setInterval(() => this.tick(), 1000);
    this.setState({posts:['p1','p2','p3']})
    this.setState({comments:['c1','c2']})
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({date:new Date()});
  }
  render(){
    return <div>
      <h1>hello g</h1>
      <FormatDate date={this.state.date}/>
      <h3>these are my posts: {this.state.posts}</h3>
      <h3>these are my comments: {this.state.comments}</h3>
    </div>
  }
}
//const element = <Clock />;
function App(){
  return (<div>
    <Clock />
    <Clock />
    <Clock />
  </div>
  );
}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Clock />
      <button type="submit">Submit</button>
    </form>
  );
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <h1>you are logged in</h1>
  }
  else{
    return <h1>you are not logged in</h1>
  }
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <LoginButton onClick={this.handleLoginClick} /> : <LogoutButton onClick={this.handleLogoutClick} />}
      </div>
    );
  }
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
function WarningMessage(props) {
  if (props.warn) {
    return null;
  }
  return (
    <div className="warning">
     Danger Warning!!!!!!!!!!!!!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningMessage warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'hide warnings' : 'show warnings'}
        </button>
      </div>
    );
  }
}
function NamesList(props) {
  const names = props.names;
  const listItems = names.map((name) =>
    <li key={name.toString()}>
      {name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const names = [1,2,3,4,5];

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
           {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: 'Main Concept', content: 'Learning Main Concept!'},
  {id: 4, title: 'Advanced React', content: 'Learning Advance Concept!'}
];

class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      flavor: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  handleFlavorChange(event){
    this.setState({flavor: event.target.value});
  }  
  handleDescChange(event){
    this.setState({description: event.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.numberOfGuests)
    console.log(this.state.isGoing)
    console.log(this.state.flavor)
    console.log(this.state.description)
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select value={this.state.flavor} onChange={this.handleFlavorChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleDescChange}/>
        </label>
       
        <br />
        <input type='submit' value='submit' />
      </form>
    );
  }
}
function BoilingResult(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingResult celsius= {temperature}/>        
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {temperature: '', scale: 'c'}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature){
    this.setState({scale:'c', temperature})
  }
  handleFahrenheitChange(temperature){
    this.setState({scale:'c', temperature})
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale = 'c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <br />
        <TemperatureInput scale = 'f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
      </div>      
      )
  }
}
ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);
//setInterval(tick, 1000);
//reportWebVitals();