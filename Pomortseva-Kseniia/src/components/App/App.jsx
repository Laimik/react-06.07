import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter/RootRouter';

const theme = createMuiTheme();

class App extends Component {
  state = {
    messages: [
      { author: 'user', text: 'привет', id: uuidv4() },
      { author: 'user', text: 'как дела', id: uuidv4() },
    ],
  };

  timer = null;

  addMessage = ({ author, text }) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { author, text, id: uuidv4() }],
    }));
  };

  render() {
    const { messages } = this.state;
    // const { classes } = this.props;

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
