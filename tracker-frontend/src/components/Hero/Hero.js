import "./Hero.css"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';

const styles = makeStyles({
   media: {
      height: 140,
      paddingTop: '56.25%' // 16:9
   },
   card: {
      position: 'relative'
   },
   overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'black',
      backgroundColor: 'white'
   }
})

export default function NavBar(){
    const classes = styles();
    return(
        <div className = "navbar">
            <Card style = {styles.card}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h1">
                        Life Tracker
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Helping you take back control of your world
                    </Typography>

                </CardContent>
                <CardMedia 
                    className = {classes.media} 
                    image = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghi-best-fitness-trackers-social-1574867722.png?crop=0.838xw:0.645xh;0.0369xw,0.209xh&resize=1200:*" 
                    title = "fit watch"
                />
                <div className="icons-row">
                    <div>
                        <img src = "http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg" alt =""></img>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Fitness
                        </Typography>
                        </div>
                    <div>
                        <img src = "http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg" alt =""></img>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Food
                        </Typography>
                    </div>
                    <div>
                    <img src = "http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg" alt =""></img>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rest
                        </Typography>
                    </div>
                    <div>
                        <img src = "http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg" alt =""></img>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Planner
                        </Typography>
                    </div> 
                    
                </div>
                
            </Card>
            
        </div>
    )
}