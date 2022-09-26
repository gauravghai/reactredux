import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
