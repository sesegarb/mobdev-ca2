import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    characters: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.characters = this.api.getCharacters();
    }
    openDetails(characters) {
        let characterId = characters.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}