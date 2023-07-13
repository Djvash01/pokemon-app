import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '@models/pokemon.interface';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent {
  @Input({ required: true }) public pokemon!: Pokemon;
  @Output() public edit = new EventEmitter<Pokemon>();
  @Output() public remove = new EventEmitter<Pokemon>();


  public emitEditEvent(): void {
    this.edit
  }
}
