import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import classes from "./style.css";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      booktitle: "",
      bookImg: "",
      bookDescription: ""
    };
  }

  render() {
    return (
      <div>
        {this.props.bookDetails.map((data, index) => {
          return (

            <div className="row">
              <div className="col-1-of-3">
                <div className="composition">
                  <img
                    src={data.volumeInfo.imageLinks.smallThumbnail}
                    alt=""
                    className="composition__photo composition__photo--p"
                  />
                {data.volumeInfo.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      /*
      // <div class="book-details">
      //   {this.props.bookDetails.map((data, index) => {
      //     return (
      //       <Card key={index}>
      //         <CardActionArea>
      //           <CardMedia
      //             component="img"
      //             alt="Contemplative Reptile"
      //             height="140"
      //             src={data.volumeInfo.imageLinks.smallThumbnail}
      //             title="Contemplative Reptile"
      //           />
      //           <CardContent>
      //             <Typography gutterBottom variant="h5" component="h2">
      //               {data.volumeInfo.title}
      //             </Typography>
      //             <Typography component="p">
      //               {data.volumeInfo.description}
      //             </Typography>
      //           </CardContent>
      //         </CardActionArea>
      //         <CardActions>
      //           <Button size="small" color="primary">
      //             Share
      //           </Button>
      //           <Button size="small" color="primary">
      //             Learn More
      //           </Button>
      //         </CardActions>
      //       </Card>
      //     );
      //   })}
      
      // </div>


*/
    );
  }
}

export default BookDetails;
