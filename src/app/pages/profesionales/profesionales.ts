import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-profesionales',
  standalone: false,
  templateUrl: './profesionales.html',
  styleUrls: ['./profesionales.scss'],
})
export class Profesionales implements OnInit {
  psychologists: any[] = [];
  coachs: any[] = [];
  trainers: any[] = [];
  nutrition: any[] = [];
  activities: any[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    const all = this.mockService.getAllProfessionals();
    this.psychologists = all.filter(p => p.type === 'psicologo');
    this.coachs = all.filter(p => p.type === 'coach');
    this.trainers = all.filter(p => p.id === 'ana-ruiz');
    this.nutrition = all.filter(p => p.id === 'elena-morales');
    this.activities = all.filter(p => p.id === 'claudia-vega' || p.id === 'marta-gomez');
  }
}
