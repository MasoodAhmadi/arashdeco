import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import StarRatingComponent from 'react-star-rating-component';


import './Image.scss'
import arash1 from  '../Image/arash1.jpg';
//import arash2 from  '../Image/arash2.jpg';
import arash3 from  '../Image/arash3.jpg';
//import arash4 from  '../Image/arash4.jpg';
import arash5 from  '../Image/arash5.jpg';
//import fifth from  '../Image/fifth.jpg';

class Images extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating1: 1,
      rating2: 1,
      rating3: 1,



    };
  }
  onStarClick1(nextValue, prevValue, name) {
    this.setState({rating1: nextValue});
  }
  onStarClick2(nextValue, prevValue, name) {
    this.setState({rating2: nextValue});
  }
  onStarClick3(nextValue, prevValue, name) {
    this.setState({rating3: nextValue});
  }
    render() {
      const { rating1,rating2,rating3 } = this.state;

        return(
          <div>
          <Card className="root-card">
      <CardActionArea>
        <CardMedia
          className="media"
          image={arash1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bride,Groom Chair
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            can be prepared different type of chair as per client choice
          </Typography>
        </CardContent>
      <p>Rating from state: {rating1}</p>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating1}
        onStarClick={this.onStarClick1.bind(this)}
      />
      </CardActionArea>
      </Card>

      <Card className="root-card1">
      <CardActionArea>
        <CardMedia
          className="media"
          image={arash5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hall Design
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            this hall was organized by our staff in Helsinki
          </Typography>
        </CardContent>
      <p>Rating from state: {rating2}</p>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating2}
        onStarClick={this.onStarClick2.bind(this)}
      />
      </CardActionArea>

      </Card>


      <Card className="root-card2">
      <CardActionArea>
        <CardMedia
          className="media"
          image={arash3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Stage
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Stage for the Bride and Groom
          </Typography>
        </CardContent>
      <p>Rating from state: {rating3}</p>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating3}
        onStarClick={this.onStarClick3.bind(this)}
      />
      </CardActionArea>

      </Card>
      </div>

        )
    }
}
export default Images; 
