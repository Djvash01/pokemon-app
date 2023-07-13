import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { InformationComponent } from './information/information.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, PokemonFormComponent, InformationComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
