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
import { lime, purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Movie } from 'src/models/movie.model';
import { colors, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

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

      const closeExpand = () => { setExpanded(false) }

      return (
            <Card sx={{ flexGrow: 1 }} className={`!bg-inherit !shadow-md  !shadow-violet-400 hover:!shadow-xl hover:!shadow-violet-400 !text-white max-w-[540px]
             border-t border-violet-300/80 transition-all delay-300 `}>
                  <CardHeader
                        avatar={
                              <Avatar sx={{ bgcolor: purple[400] }} aria-label="recipe">
                                    {movie.adult ? '18+' : '16+'}
                              </Avatar>
                        }
                        action={
                              <IconButton aria-label="settings" className='!text-white'>
                                    <MoreVertIcon />
                              </IconButton>
                        }
                        title={movie.title}
                        titleTypographyProps={{ className: '!font-bold' }}
                        className='!text-white overflow-ellipsis overflow-hidden whitespace-nowrap font-bold'
                        subheader={movie.release_date.split('-').reverse().join('-')}
                        subheaderTypographyProps={{ className: '!text-white' }}
                  />
                  <Link to={`/movie/${movie._id}`} className='relative'>
                        <div className='black-layer'>
                              <CardMedia
                                    component="img"
                                    height="194"
                                    className='image'
                                    image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                                    alt={movie.title}

                              />
                        </div>
                  </Link>

                  <CardActions disableSpacing className='!py-4'>
                        <IconButton aria-label="Add to favorites" className='!text-white'>
                              <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" className='!text-white'>
                              <ShareIcon />
                        </IconButton>
                        <ExpandMore
                              className='!text-white'
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
                                    {movie.overview}
                              </Typography>
                        </CardContent>
                  </Collapse>
            </Card>
      );
}
