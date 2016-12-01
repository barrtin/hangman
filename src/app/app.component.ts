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
  match_found = false;
  lifes = 6;
  dead = false;

  onLetterSelected(e){
    this.selected_letter = e.target.innerText;
    console.log(this.selected_letter);
    this.addToList(this.already_tried, this.selected_letter);
    this.checkForMatch();
  }
  checkForMatch(){
  	var letter = this.selected_letter;
  	if (this.word.indexOf(letter) == -1 && this.word.indexOf(letter.toLowerCase()) == -1){
	    this.match_found = false;
	    this.hang();
	    console.log('match not found: ' + letter)
	} else {
		this.match_found = true;
	    console.log('match found: ' + letter)
	    this.addToList(this.guessed_letters, this.selected_letter)
	};
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
