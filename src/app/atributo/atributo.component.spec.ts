import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributoComponent } from './atributo.component';

describe('AtributoComponent', () => {
  let component: AtributoComponent;
  let fixture: ComponentFixture<AtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtributoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
