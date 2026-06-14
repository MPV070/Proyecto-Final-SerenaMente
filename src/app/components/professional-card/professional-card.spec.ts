import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCard } from './professional-card';

import { Component, Input } from '@angular/core';




describe('ProfessionalCard', () => {
  let component: ProfessionalCard;
  let fixture: ComponentFixture<ProfessionalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
