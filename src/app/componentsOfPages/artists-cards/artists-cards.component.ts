import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-cards',
  templateUrl: './artists-cards.component.html',
  styleUrls: ['./artists-cards.component.css']
})
export class ArtistsCardsComponent implements OnInit {



  @Input() artist: any;
  imageShownLink: string = 'data:image/png;base64,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';
  currentRating: any = 1;

// for the conditional stylin of the star rating
  starColor(m: 1) {

    if (m <= 1) {
      return 'svg1-red';

    } else if (m <= 2) {
      return 'svg1-orange';

    } else if (m <= 3) {
      return 'svg1-yellow';

    } else if (m <= 4) {
      return 'svg1-greenyellow';

    } else {
      return 'svg1-green';
    }
  }





  // for conditional styling of the card's background color
  x = false;
  changeColor1() { this.x = true }
  changeColor2() { this.x = false }


  constructor() { }

  ngOnInit(): void {

    if (this.artist.images != 0) { this.imageShownLink = this.artist.images[0].url }
    this.currentRating = this.artist.popularity / 100 * 5;
  }
}
