import { FormControl, FormGroup } from "@angular/forms";

export interface PokemonForm extends FormGroup <{
  id: FormControl<number>,
  name: FormControl<string>,
  image: FormControl<string>,
  attack: FormControl<number>,
  defense: FormControl<number>,
  hp: FormControl<number>,
  type: FormControl<string>,
  idAuthor: FormControl<number>,
}>{}
