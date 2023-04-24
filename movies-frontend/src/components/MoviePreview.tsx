import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Movie } from 'src/models/movie.model';

interface ExpandMoreProps extends IconButtonProps {
      expand: boolean;
}

interface Props {
      movie: Movie
}

const ExpandMore = styled((props: ExpandMoreProps) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
})(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
      }),
}));

export default function MoviePreview({ movie }: Props) {
      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
            setExpanded(!expanded);
      };

      return (
            <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                        avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                              </Avatar>
                        }
                        action={
                              <IconButton aria-label="settings">
                                    <MoreVertIcon />
                              </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                  />
                  <CardMedia
                        component="img"
                        height="194"
                        image={movie.poster}
                        alt={movie.title}
                  />

                  <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                              <ShareIcon />
                        </IconButton>
                        <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                        >
                              <ExpandMoreIcon />
                        </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                              <Typography paragraph>
                              </Typography>
                        </CardContent>
                  </Collapse>
            </Card>
      );
}
