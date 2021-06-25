import Button from '@material-ui/core/Button';
import "./Navbar.css"

export default function NavBar(){
    return(
        <div className = "navbar">
            <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>
            <div className = "nav-buttons">
                <Button color="primary" href ="/activity">Activity</Button>
                <Button color="primary" href ="/exercise">Exercise</Button>
                <Button color="primary" href ="/nutrition">Nutrition</Button>
                <Button color="primary" href ="/sleep">Sleep</Button>
                <Button href ="/login" color="primary">Login</Button>
                <Button href ="/register"  disableElevation>
                    Register
                </Button>
            </div>
        </div>
    )
}