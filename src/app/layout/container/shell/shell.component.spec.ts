import { async, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-cart'`, () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sample-cart');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to sample-cart!'
    );
  });
});
