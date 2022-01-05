import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocKeyWordComponent } from './doc-key-word.component';

describe('DocKeyWordComponent', () => {
  let component: DocKeyWordComponent;
  let fixture: ComponentFixture<DocKeyWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocKeyWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocKeyWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
