import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  title = 'random-password-generator';
  passwordLength:number=15;
  numbers:boolean=false;
  symbols:boolean=false;
  lowerCase:boolean=true;
  upperCase:boolean=false;
  generatedPassword="";
  lowerCaseAlphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
upperCaseAlphabet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
numbersList=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
Symbols=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/"
]


  generatePassword(){
    this.generatedPassword="";
    console.log("generate password");
    if (!this.lowerCase && !this.upperCase && !this.numbers && !this.symbols) {
      this.toastr.error('Please select at least one option to generate a password!');
      return;
    }
  
    var passwordPool:any[]=[];
    
    if(this.numbers){
      passwordPool=passwordPool.concat(this.numbersList);
    }
    console.log(passwordPool);
    if(this.lowerCase){
      passwordPool=passwordPool.concat(this.lowerCaseAlphabet);
    }
    console.log(passwordPool);
    if(this.upperCase){
      passwordPool=passwordPool.concat(this.upperCaseAlphabet);
    }
    console.log(passwordPool);
    if(this.symbols){
      passwordPool=passwordPool.concat(this.Symbols);
    }
    console.log(passwordPool);
    for(var i=0;i<this.passwordLength;i++){
      var index=Math.floor(Math.random()*(passwordPool.length))
      console.log(index);
      this.generatedPassword=this.generatedPassword+passwordPool[index];
    }
  }
  copyToClipboard() {
    const inputElement: HTMLInputElement = document.getElementById('generatedPassword') as HTMLInputElement;
    inputElement.select();
    document.execCommand('copy');
    this.toastr.info('Password copied to clipboard!');
  }
  
}
