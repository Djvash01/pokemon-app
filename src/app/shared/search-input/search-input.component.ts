import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  public searchControl = new FormControl('');
  private readonly unsubscribe$ = new Subject<void>()
  @Output() private valueChange = new EventEmitter<string>();

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.listenValueChanges();
  }

  private listenValueChanges(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => !!value),
      takeUntil(this.unsubscribe$)
    ).subscribe((value) => this.valueChange.emit(value ?? ''))
  }



}
