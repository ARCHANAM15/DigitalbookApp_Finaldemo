import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridUiComponent } from './grid-ui.component';



describe('OrderGridComponent', () => {
  let component: GridUiComponent;
  let fixture: ComponentFixture<GridUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display books', () => {
    expect(component).toBeTruthy();
  });
 
});
