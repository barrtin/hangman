import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alphabet_chars = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
  // set types
  word;
  selected_letter;
  already_tried;
  guessed_letters;
  lifes;
  dead;
  win;

  onLetterSelected(e){
    this.selected_letter = e.target.innerText;
    this.checkForMatch();
    this._addToList(this.already_tried, this.selected_letter);
  }
  checkForMatch(){
    var letter = this.selected_letter;
    if (!this._findInList(letter, this.word)
      && this.already_tried.indexOf(letter) == -1){
      this.hang(); // no Match and letter is not tried
    } else { // Match found!
      this._addToList(this.guessed_letters, letter)
      this.checkSuccess()
    };
  };
  checkSuccess(){
    var word_letters = new Set(this.word);
    // find the letters that remained not guessed
    var letters_not_guessed = Array.from(word_letters).filter((item) => {
        return !this._findInList(item, this.guessed_letters);
    })
    if (letters_not_guessed.length == 0){
        this.win = true;
    }
  };
  hang(){
    this.lifes--;
    if (this.lifes == 0){
        this.dead = true;
    };
  }
  ngOnInit(){
    this.initializeGame();
  }

  initializeGame(){
    this.selected_letter = '';
    this.already_tried = [];
    this.guessed_letters = [];
    this.lifes = 6;
    this.dead = false;
    this.win = false;
    this._getRandomWord()
    this.guessed_letters.push(this.word[0])
    this.guessed_letters.push(this.word[this.word.length-1])
  }

  _findInList(item, list){
    if (list.indexOf(item) > -1){
        return true; // item is found in the list
    } else {
        return false; // item not found
    }
  }
  _addToList(list, item){ // keep the list unique (this should be "utils" function one day)
    if (list.indexOf(item) == -1){
        list.push(item)
    }
  }
  _getRandomWord(){
    var words = ['hippopotamus', 'elephant', 'monkey', 'crocodile', 'spider', 'frog', 'antelope'];
    var word = words[Math.floor(Math.random() * words.length)];
    this.word = word.toUpperCase().split('');
  }
}
