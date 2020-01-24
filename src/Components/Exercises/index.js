import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid' 
import Paper from '@material-ui/core/Paper' 
import Typography from '@material-ui/core/Typography' 
import List from '@material-ui/core/List' 
import ListItem from '@material-ui/core/ListItem' 
import ListItemText from '@material-ui/core/ListItemText' 
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction' 
import IconButton from '@material-ui/core/IconButton' 

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import withStyles from '@material-ui/core/styles/withStyles'
import { withContext } from '../../context'
import Form from './Form'

const styles = theme => ({
  paper: { 
    padding: theme.spacing(3),
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5, 
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    },
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    },
  }
})

const Exercises = 
  ({ 
    classes,
    muscles,
    exercisesByMuscles,
    category, 
    editMode,
    onSelect, 
    exercise,
    exercise: {
      id, 
      title = 'Welcome!', 
      description = 'Please select an exercise from the list on the lesf.'
    },
    onSelectEdit,
    onEdit,
    onDelete
    }) =>
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercisesByMuscles.map(([group, exercises]) => 
            !category || category === group
              ? <Fragment key={group}>
                  <Typography 
                    color='secondary'
                    variant="h5"
                    style={{textTransform: 'capitalize'}}
                  >
                    {group}
                  </Typography>
                  <List component="nav">
                    {exercises.map(({ id, title }) =>
                      <ListItem 
                        key={id}
                        button
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText primary={title} />
  
                        <ListItemSecondaryAction>
                          <IconButton 
                            color='primary'
                            onClick={() => onSelectEdit(id)}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton 
                            color='primary' 
                            onClick={() => onDelete(id)}
                          >
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </List>
                </Fragment>
              : null
          )}
        </Paper>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography 
            color='secondary'
            variant="h4"
            gutterBottom
          >
            {title}
          </Typography>
          {editMode
            ? <Form 
                key={id}
                exercise={exercise}
                muscles={muscles} 
                onSubmit={onEdit}
              />
            : <Typography 
                 variant="subtitle1"
              >
                {description}
              </Typography>
          }
        </Paper>
      </Grid>
    </Grid>

export default withContext(withStyles(styles)(Exercises))
