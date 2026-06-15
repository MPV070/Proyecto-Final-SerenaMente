import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Profesionales } from './profesionales';
import { ProfessionalCard } from '../../components/professional-card/professional-card';

describe('Profesionales', () => {
  let component: Profesionales;
  let fixture: ComponentFixture<Profesionales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profesionales, ProfessionalCard],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profesionales);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the expected set of professionals', () => {
    expect(component.psychologists.length).toBe(2);
    expect(component.psychologists[0].name).toBe('Laura Martínez');
    expect(component.psychologists[1].id).toBe('javier-torres');

    expect(component.coachs.length).toBe(1);
    expect(component.coachs[0].id).toBe('maria-delgado');

    expect(component.trainers.length).toBe(1);
    expect(component.nutrition.length).toBe(1);
    expect(component.activities.length).toBe(1);
  });

  it('should render profile links for professional cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a.card-link');

    expect(links.length).toBe(6);
    expect(links[0].getAttribute('href')).toContain('/perfil-profesional/laura-martinez');
    expect(links[1].getAttribute('href')).toContain('/perfil-profesional/javier-torres');
  });
});
