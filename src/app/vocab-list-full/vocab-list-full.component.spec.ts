import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabListFullComponent } from './vocab-list-full.component';

describe('VocabListFullComponent', () => {
  let component: VocabListFullComponent;
  let fixture: ComponentFixture<VocabListFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabListFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
