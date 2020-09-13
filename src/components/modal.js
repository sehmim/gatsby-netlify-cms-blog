import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { trackCustomEvent, OutboundLink } from 'gatsby-plugin-google-analytics'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{color: "White", border: "1px solid white", margin: "0px 10px"}} variant="outlined" color="default" 
            onClick={e => {
                // To stop the page reloading
                e.preventDefault()
                // Lets track that custom click
                trackCustomEvent({
                  // string - required - The object that was interacted with (e.g.video)
                  category: "Special Button",
                  // string - required - Type of interaction (e.g. 'play')
                  action: "Click",
                  // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                  label: "Gatsby Plugin Example Campaign",
                  // number - optional - Numeric value associated with the event. (e.g. A product ID)
                  value: 43
                })
                setOpen(true);
            }}>
        Open
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Now Trending
        </DialogTitle>

        <DialogContent dividers>
        <ul style={{listStyle: "none"}}>
            <OutboundLink href="https://dev.to/shadid12/5-dev-skills-that-will-boost-your-salary-in-2020-3i2k" target="_new">
                <li>
                    <Typography gutterBottom>🎉 5 Dev skills that will boost your salary in 2020</Typography>
                </li>
            </OutboundLink>

            <OutboundLink href="https://medium.com/swlh/advanced-node-js-a-hands-on-guide-to-event-loop-child-process-and-worker-threads-in-node-js-e7c9019f9622" target="_new">
                <li>
                    <Typography gutterBottom>👀 Advanced Node.Js: A Hands on Guide to Event Loop, Child Process and Worker Threads in Node.Js</Typography>
                </li>
            </OutboundLink>


            <OutboundLink href="https://medium.com/@shadidhaque/being-a-software-developer-in-a-post-covid-19-world-845a0a09c33d" target="_new">
                <li>
                    <Typography gutterBottom>🚀 Being a software developer in a post COVID-19 world</Typography>
                </li>
            </OutboundLink>

            <OutboundLink href="https://dev.to/shadid12/can-you-apply-solid-principles-to-your-react-applications-46il" target="_new">
                <li>
                    <Typography gutterBottom>🤔 SOLID principles to your React applications</Typography>
                </li>
            </OutboundLink>


        </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}