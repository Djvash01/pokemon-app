import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { PokemonForm } from '@models/pokemon-form.interface.';
import { Pokemon } from '@models/pokemon.interface';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonFormComponent implements OnInit, OnChanges {
  @Input() pokemon?: Pokemon;
  @Output() cancelEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Pokemon>();
  public form!: PokemonForm;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder
  ){}

  public ngOnChanges(changes: SimpleChanges): void {
    if(!changes['pokemon'].isFirstChange()){
      this.createForm();
    }
  }

  public ngOnInit(): void {
    this.createForm()
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [this.pokemon?.id ?? 0, [Validators.required]],
      name: [this.pokemon?.name ?? '', [Validators.required]],
      image: [this.pokemon?.image ?? '', [Validators.required]],
      attack: [this.pokemon?.attack ?? 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      defense: [this.pokemon?.attack ?? 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      hp: [this.pokemon?.attack ?? 0, [Validators.required, Validators.min(0), Validators.max(100)]],
      type: [this.pokemon?.type ?? '', [Validators.required]],
      idAuthor: 1
    });
  }

  public savePokemon(): void {
    if(this.form.invalid) return;
    this.saveEvent.emit(this.form.getRawValue());
  }

  public cancel(): void {
    this.form.reset();
    this.cancelEvent.emit();
  }


}
