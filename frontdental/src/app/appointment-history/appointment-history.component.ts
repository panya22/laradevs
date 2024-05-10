import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatPaginator,
  ],
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css'],
  providers: [DataService],
})
export class AppointmentHistoryComponent implements OnInit {
  protected dataSource!: any;
  protected data!: any;
  protected displayFields: string[] = [
    'name',
    'address',
    'birthdate',
    'delete',
    'update',
    'view',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  protected getData(): void {
    this.ds.getRequest('loadpatients', '').subscribe((res: any) => {
      console.log(res);
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  protected Ondelete(id: number): void {
    this.ds
      .postRequest(`patients/delete/${id}`, '', null)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
