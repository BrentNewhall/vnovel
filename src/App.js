import React, { Component } from 'react';
import './App.css';

import dialog from './dialog'

import mitsukiImage from './images/characters/teenage-girl-anime-character.png'
import kasumiImage from './images/characters/beautiful-girl-red-hair.png'

import bedroom1DayImage from './images/backgrounds/simple-bedroom-4106.jpg'
import kitchenDayImage from './images/backgrounds/luxury-kitchen.jpg'

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      currentLine: 0
    }
    this.playerChoice = this.playerChoice.bind(this);
    this.jumpToLocation = this.jumpToLocation.bind(this);
    this.setDialogLine = this.setDialogLine.bind(this);
    this.nextDialogLine = this.nextDialogLine.bind(this);
    this.previousDialogLine = this.previousDialogLine.bind(this);
    this.character1visible = true;
    this.character1props = {
      visible: true,
      img: "",
      x: 50,
      y: 150
    }
    this.backgroundImage = bedroom1DayImage;
    this.choice1 = "";
    this.choice2 = "";
    this.choice3 = "";
    this.next = "";
    this.setDialogLine( 0 );
  }

  jumpToLocation( newLocation ) {
    for( var i = 0; i < dialog.length; i++ ) {
      if( dialog[i].hasOwnProperty( "title" ) ) {
        if( dialog[i].title === newLocation ) {
          this.setDialogLine( i );
          this.setState( { currentLine: i } );
        }
      }
    }
  }
  
  playerChoice( choice ) {
    //alert( "You chose " + dialog[this.state.currentLine].choices[choice].result );
    this.jumpToLocation( dialog[this.state.currentLine].choices[choice].result );
  }

  nextDialogLine() {
    if( this.state.currentLine === dialog.length )
      alert( "Game Is Over!" );
    else if( this.next !== '' )
      this.jumpToLocation( this.next );
    else {
      this.setDialogLine( this.state.currentLine + 1 );
      this.setState( { currentLine: this.state.currentLine + 1 } );
    }
  }

  previousDialogLine() {
    if( this.state.currentLine > 0 ) {
      this.setDialogLine(this.state.currentLine - 1 );
      this.setState( { currentLine: this.state.currentLine - 1 } );
    }
  }

  setDialogLine( lineNum ) {
    if( lineNum >= 0  &&  lineNum < dialog.length ) {
      this.speaker = dialog[lineNum].speaker;
      this.line    = dialog[lineNum].line; 
      if( dialog[lineNum].hasOwnProperty( 'char1' ) ) {
        this.character1props.visible = true;
        if( dialog[lineNum].char1 === 'mitsuki' )
          this.character1props.img = mitsukiImage;
        else
          this.character1props.img = kasumiImage;
      }
      else
        this.character1props.visible = false;
      if( dialog[lineNum].hasOwnProperty( 'choices' ) ) {
        this.choice1 = dialog[lineNum].choices[0].title;
        this.choice2 = dialog[lineNum].choices[1].title;
        this.choice3 = dialog[lineNum].choices[2].title;
      }
      else
        this.choice1 = '';
      if( dialog[lineNum].hasOwnProperty( 'next' ) ) {
        this.next = dialog[lineNum].next;
      } else
        this.next = "";
      if( dialog[lineNum].hasOwnProperty( 'bg' ) ) {
        this.backgroundImage = kitchenDayImage;
      } else
        this.backgroundImage = bedroom1DayImage;
      }
  }

  render() {
    var character1 = '';
    var choiceButtons = '';
    if( this.character1props.visible ) {
      const styleProps = {
        position: 'absolute',
        left: this.character1props.x,
        top: this.character1props.y,
        width: '35%'
      }
      character1 = <img src={this.character1props.img} alt='Character' style={styleProps} />
    }
    let nextButtonDisabled = false;
    if( this.choice1 !== '' ) {
      choiceButtons = <div id="choice-container" className="standard-text-box">
        What do you want to do?
        <div id="choice-buttons">
          <button onClick={() => this.playerChoice(0)}>{this.choice1}</button>
          <button onClick={() => this.playerChoice(1)}>{this.choice2}</button>
          <button onClick={() => this.playerChoice(2)}>{this.choice3}</button>
        </div>
      </div>;
      nextButtonDisabled = true;
    }
    return (
      <div className="App">
        <div id="world" style={ { backgroundImage: `url(${this.backgroundImage})` } }>
          {choiceButtons}
          {character1}
          <div id="dialog-container"><div id="dialog" className="standard-text-box">
            <button id="previous-button" onClick={this.previousDialogLine}>&lt;</button>
            <button id="next-button" disabled={nextButtonDisabled} onClick={this.nextDialogLine}>&gt;</button>
            <span id="speaker-name">{this.speaker}</span> {this.line}
          </div></div>
        </div>
      </div>
    );
  }
}

export default App;
