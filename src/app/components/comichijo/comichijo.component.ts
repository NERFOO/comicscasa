import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comichijo',
  templateUrl: './comichijo.component.html',
  styleUrls: ['./comichijo.component.css']
})
export class ComichijoComponent implements OnInit {
  @Input() comic! : Comic;
  @Input() index! : number;

  @Output() favorito : EventEmitter<Comic> = new EventEmitter();
  seleccionarFavorito() : void {
    this.favorito.emit(this.comic);
  }

  @Output() eliminar : EventEmitter<number> = new EventEmitter();
  eliminarComic() : void {
    this.eliminar.emit(this.index);
  }

  @Output() modificar : EventEmitter<number> = new EventEmitter();
  modificarComic() : void {
    this.modificar.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
