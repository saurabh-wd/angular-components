import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TypeAheadComponent} from './components/type-ahead/type-ahead.component';
import {LoginComponent} from './components/login/login.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TypeAheadComponent,
        LoginComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));  
  
});
