import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@models/pokemon.interface';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { RequestService } from '@services/request/request.service';
import { catchError, EMPTY, finalize, of, Subject, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isLoading = false;
  private readonly searchValue$ = new Subject<string>();
  public pokemon?: Pokemon;

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointService
  ){}

  public ngOnInit(): void {
    this.getPokemonById();
  }

  private getPokemonById(): void {
    this.searchValue$.asObservable().pipe(
      tap(() => { this.isLoading = true; }),
      switchMap((id) => this.request.get<Pokemon>(this.endpoints.pokemon.getById(id))),
      finalize(() => { this.isLoading = false; }),
    ).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
      },
      error: () => {
        this.pokemon = undefined;
      }
    });
  }

  public handlerSearchValue(value: string){
    this.searchValue$.next(value);
  }
}
