import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-characters',
  templateUrl: './page-characters.component.html',
  styleUrls: ['./page-characters.component.scss'],
})
export class PageCharactersComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  public characters: any = [];

  ngOnInit(): void {
    this.getCharacter(1);
  }

  private getCharacter(id: number) {
    this.apiService.getInfo('character/').subscribe((data: any) => {
      this.characters = data.results;
      console.log(data);
    });
  }

  public openCharacter(id: number) {
    this.router.navigate(['character/' + id]);
  }
}
