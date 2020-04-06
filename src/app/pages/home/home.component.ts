import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private joke: any = null;
  private  showPunchline: boolean = false;
  private isLoadingJoke = true;
  constructor(private apiService: ApiService) { }

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
