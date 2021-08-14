import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-character',
  templateUrl: './page-character.component.html',
  styleUrls: ['./page-character.component.scss'],
})
export class PageCharacterComponent implements OnInit {
  public character: any = [];
  private charId = this.route.snapshot.paramMap.get('charId');

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCharacter(this.charId);
  }

  private getCharacter(id: any) {
    this.apiService.getInfo('character/' + id).subscribe((data: any) => {
      this.character = data;
      console.log(data);
    });
  }
}
