// ******* FIRST APPROACH
var PlayerService = {
  getPlayerTeamId: function (playerId) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "/player/" + playerId + "/team",
        success: function (team) {
          resolve(team.id);
        },
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  },
  getPlayers: function (teamId) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "/team/" + teamId + "/player",
        success: resolve(playerList),
        error: function (xhr, status, error) {
          reject(error);
        },
      });
    });
  },
};

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: function () {
    PlayerService.getPlayerTeamId(this.playerId)
      .then((teamId) => PlayerService.getPlayers(teamId))
      .then((playerList) => {
        /* render playerlist */
      })
      .catch((error) => console.log(error));
  },
};

// ******* SECOND APPROACH
//async / await  approach

var PlayerService = {
  getPlayerTeamId: async function (playerId) {
    return await $.ajax({ url: "/player/" + playerId + "/team" });
  },
  getPlayers: async function (teamId) {
    return await $.ajax({ url: "/team/" + teamId + "/player" });
  },
};

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async function () {
    try {
      const teamId = await PlayerService.getPlayerTeamId(this.playerId);
      const playerList = await PlayerService.getPlayers(teamId);
      // Code for rendering playerList here
    } catch (error) {
        console.log(error);
    }
  },
};

// my solution REACT

// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

const App = () => {
	
    const checkboxes = [0, 1, 2];
       
           
           return (
               <Form>
           {checkboxes.map(id =>
             <Checkbox key={id} id={id}/>
           )}
          </Form>
           )
       
   }
   
   class Form extends React.component{
       
     render(){
     
     return (
         <div className="form">
           {this.props.children}
         </div>
        )
     }
   }
   
   class Checkbox extends React.Component{
   
       constructor(props) {
           super(props);
           this.state = {
               checked: false;
           };
       }
   
       checkboxOnCheck() {
           this.setState(prevState => {return {checked: !prevState.checked}});
       }
       
     render(){
         return (
       <div className="checkbox-wrapper">
           <span>checkbox {this.props.id}</span>
       <input value={this.state.checked} onChange={this.checkboxOnCheck} type="checkbox" />
           </div>
       );
     }
   }
   
   ReactDOM.render(
     <App />,
     document.getElementById('container')
   );





//REACT   *************************

// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

class BigForm extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: [false, false, false]
		};
	}

	checkboxOnCheck(id) {
		const checked = this.state.checked.map((value, index) => {
			if(id === index) {
				return !value;
			}
			return value;
		});

		this.setState({ checked });
	}

	render() {
		const checked = this.state.checked
		return (
			<div className="form">
				<span>Checked boxes: {checked}</span>
				<div className="checkbox-wrapper">
					<span>checkbox 0</span>
					<input value={checked[0]} onChange={this.checkboxOnCheck(0)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 1</span>
					<input value={checked[1]} onChange={this.checkboxOnCheck(1)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 2</span>
					<input value={checked[2]} onChange={this.checkboxOnCheck(2)} type="checkbox" />
				</div>
			</div>
		)
	}
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);



//  javascript

// Given the following array of elements:

newItems = [
    {
      network: 'facebook',
      text: 'post number 1',
    },
    {
      network: 'twitter',
      text: 'some twitter text',
    },
    {
      network: 'gplus',
      text: 'some gplus stuff',
    },
    {
      network: 'facebook',
      text: 'post number 2',
    },
  ]
  
  
  // Write a function with this signature:
  
  // (arrayOfItems, aNetwork) => newArray
  
  function foo(arrayOfItems, aNetwork) {
      return arrayOfItems.filter(item => item.network === aNetwork)
    .map(item => {
    return {displayName: aNetwork.includes('facebook') ? "Facebook" : 
    aNetwork.includes('gplus') ? "Google +" : aNetwork, text: item.text}
    });
  }
  
  // That, given an array and a network, transforms the given array into the following structure:
  
  // example:
  // foo(newItems, 'facebook')
  
  // outputs:
  // finalsItems = [
  //   {
  //     displayName: 'Facebook'
  //     text: 'post number 1'
  //   },
  //   {
  //     displayName: 'Facebook',
  //     text: 'post number 2'
  //   },
  // ]
  
  // foo(newItems, 'gplus')
  
  // outputs:
  // finalsItems = [
  //   {
  //     displayName: 'Google +',
  //     text: 'some gplus stuff'
  //   }
  // ]
  
  // You will need to define your own way to consistently transform `network` into `displayNames`
  
  console.log(foo(newItems, 'facebook'));
  console.log(foo(newItems, 'gplus'))