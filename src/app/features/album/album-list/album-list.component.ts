import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album/album';
import { AlbumService } from 'src/app/services/album.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PagingInfo } from 'src/app/shared/models/paging-info';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  pagingInfo: PagingInfo = { itemsPerPage: 10, currentPage: 1 };

  constructor(
    private albumService: AlbumService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  addToFavorite(album: Album) {
    this.favoriteService.addToFavorite(album);
  }
}
