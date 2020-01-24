import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import Add from '@material-ui/icons/Add'
import Form from './Form'
import { withContext } from '../../context'

class CreateDialog extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }

  render() {

    const { open } = this.state,
      { muscles } = this.props

    return <Fragment>
        <Fab 
          variant="round" 
          onClick={this.handleToggle}
          color='secondary'
          size="small"
        >
          <Add />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='xs'
        >
          <DialogTitle>
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form 
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
    </Fragment>
  }
}

export default withContext(CreateDialog)
