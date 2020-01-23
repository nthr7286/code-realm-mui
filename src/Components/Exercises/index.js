import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, IconButton } from 'material-ui'
import { 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import { Edit, Delete } from '@material-ui/icons'
import { withStyles } from 'material-ui/styles'
import Form from './Form'

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 5, 
    height: 500, 
    overflowY: 'auto' 
  }
}

export default withStyles(styles)(
  ({ 
    classes,
    muscles,
    exercises, 
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
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) => 
            !category || category === group
              ? <Fragment key={group}>
                  <Typography 
                    variant="headline"
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
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)}>
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
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          <Typography 
            variant="display1"
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
                 variant="subheading"
              >
                {description}
              </Typography>
          }
        </Paper>
      </Grid>
    </Grid>
)
