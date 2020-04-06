import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public joke: any = null;
  public  showPunchline: boolean = false;
  public isLoadingJoke = true;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getJoke();
  }

  async getJoke(){
    this.joke = null;
    this.joke = (await this.apiService.getRandomJoke())[0];
  }

  showJokePunchline(){
    this.showPunchline = true;
  }

  getNextJoke(){
    this.showPunchline = false;
    this.getJoke();
  }
}
