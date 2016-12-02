import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hangman v0.1';
  alphabet_chars = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
  selected_letter = '';
  word = 'hippopotamus'.toUpperCase().split('');
  already_tried = [];
  guessed_letters = [];
  lifes = 6;
  dead = false;
  win = false;

  onLetterSelected(e){
    this.selected_letter = e.target.innerText;
    console.log(this.selected_letter);
    this.checkForMatch();
    this.addToList(this.already_tried, this.selected_letter);
  }
  checkForMatch(){
  	var letter = this.selected_letter;
  	if (this.word.indexOf(letter) == -1
  		&& this.already_tried.indexOf(letter) == -1){
  		// no Match and letter is not tried
	    this.hang();
	} else {
	    this.addToList(this.guessed_letters, this.selected_letter)
	    this.checkSuccess()
	    // Match found!
	};
  };
  findInList(item, list){
  	if (list.indexOf(item) > -1){
  		return true;
  	} else {
  		return false;
  	}
  }
  checkSuccess(){
  	var word_letters = new Set(this.word);
  	// find the letters that remained not guessed
  	var letters_not_guessed = Array.from(word_letters).filter((item) => {
  		return !this.findInList(item, this.guessed_letters);
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
    this.guessed_letters.push(this.word[0])
    this.guessed_letters.push(this.word[this.word.length-1])
  }

  addToList(list, item){
  	// keep the list unique
  	// this should be "utils" function one day
  	if (list.indexOf(item) == -1){
  		list.push(item)
  	}
  }
}
