import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

class Home extends React.Component {
    render(){
        return (
            <Jumbotron>
                <h1 className="display-3">Welcome to MinionHub!</h1>
                <p className="lead">Have you ever spotted a Minion in its natural habitat? Here at MinionHub, our community-powered database provides open access to thousands of Minions, all one click away.</p>
                <hr className="my-2" />
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        )
    }
    
}

// const Home = (props) => {
//     return (
//         <div className='Home'>
//             <h1>This is the home page...</h1>
//         </div>
//     )
// }

export default Home 