import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DataService],
})
export class DashboardComponent implements OnInit {
  protected data!: any;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  protected getData(): void {
    this.ds.getRequest('dashboard').subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }
}
