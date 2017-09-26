// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

// class App extends React.Component {
// 	constructor(props){   // act like init function in backbone
// 		super(props);
// 		this.state = {
// 			comments: [];
// 		}

// 		this.fetch=this.fitch.bind(this);  //when I separeted it

// 		this.fetch(); 
// 	}

// 	fetch(){
// 		$.ajax({
// 			url: 'http://127.0.0.1:8000',   ///////////////////////////////////////
// 			type: 'GET',
// 			success: (data) => {
// 				console.log("I have the data: ", data);
// 				this.setState({comments: data});
// 			},
// 			error: (data) =>{
// 				console.log("I have error: ",data);
// 			}
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{props.comments.map((comment, index)=>{ 
//      				return <li>comment: {comment}</li>
//     			})}
// 			</div>
// 			)
// 	}
// }

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';










// import $ from 'jquery';
var Main = React.creatClass({
	constructor(props){   // act like init function in backbone
		super(props);
		this.state = {
			comments: [];
		}

		this.fetch=this.fitch.bind(this);  //when I separeted it

		this.fetch(); 
	}
	
	fetch(){
		console.log('I am in get yahooooooooooooooo!!!')
		$.ajax({
			url: 'http://127.0.0.1:8000',   ///////////////////////////////////////
			type: 'GET',
			success: (data) => {
				console.log("I have the data: ", data);
				this.setState({comments: data});
			},
			error: (data) =>{
				console.log("I have error: ",data);
			}
		});
	}

	search () {
		console.log(`${term} was searched`);
		ajaxPost(term, this.fetch);
	}

	// ajaxPost (username, )

	render() {
		return (
			<div>
				{props.comments.map((comment, index)=>{ 
     				return <li>comment: {comment}</li>
    			})}
			</div>
			)
	}
})





// class App extends React.Component {
// 	constructor(props){   // act like init function in backbone
// 		super(props);
// 		this.state = {
// 			comments: [];
// 		}

// 		this.fetch=this.fitch.bind(this);  //when I separeted it

// 		this.fetch(); 
// 	}

// 	fetch(){
// 		console.log('I am in get yahooooooooooooooo!!!')
// 		$.ajax({
// 			url: 'http://127.0.0.1:8000',   ///////////////////////////////////////
// 			type: 'GET',
// 			success: (data) => {
// 				console.log("I have the data: ", data);
// 				this.setState({comments: data});
// 			},
// 			error: (data) =>{
// 				console.log("I have error: ",data);
// 			}
// 		});
// 	}

// 	search () {
// 		console.log(`${term} was searched`);
// 		ajaxPost(term, this.fetch);
// 	}

// 	// ajaxPost (username, )

// 	render() {
// 		return (
// 			<div>
// 				{props.comments.map((comment, index)=>{ 
//      				return <li>comment: {comment}</li>
//     			})}
// 			</div>
// 			)
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('app'));

// export default App; 