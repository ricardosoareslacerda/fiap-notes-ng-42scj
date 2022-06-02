import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
];

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let injector: TestBed;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = injector.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    // preparacao
    spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('button');

    // execucao
    button.click();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });


});
