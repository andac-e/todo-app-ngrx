import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from 'src/app/models/album/album';
import { Favorite } from 'src/app/models/favorite/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements OnInit {
  favorites: Favorite[] = [];
  constructor(
    private favoriteService: FavoriteService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

  removeFavorite(album: Album) {
    this.favoriteService.removeFavorite(album);
    this.toastrService.info('Favorilerden çıkartıldı', album.title);
  }
}
