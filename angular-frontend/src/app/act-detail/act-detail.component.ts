import { Component } from '@angular/core';
import { Act, TimetableService } from '../timetable.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-act-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './act-detail.component.html',
  styleUrl: './act-detail.component.css'
})
export class ActDetailComponent {

  constructor(private artistService : TimetableService, private route : ActivatedRoute) {}
 
  act: Act | null = null;
   
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.act = this.getAct(id)
    } else {
      alert('missing pathparam id')
    }
  }
 
  getAct(id: string): Act {
    return this.artistService.getAct(id);
  }
}
