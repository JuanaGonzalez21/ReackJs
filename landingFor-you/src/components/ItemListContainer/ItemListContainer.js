import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt={props.desImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.description}
          </Typography>
           <div className='btn-postre'>
            <a className="btn btn-primary btn-postre">Selecionar</a>
        </div>
        </CardContent>
       
        
      </CardActionArea>
    </Card>
  );
}

export default ItemListContainer;