import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatPaginator,
  ],
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
  providers: [DataService],
})
export class PendingComponent implements OnInit {
  protected dataSource!: any;
  selected: {
    first_name: string;
    last_name: string;
    middle_name: string;
    extension_name: string;
    reason: string;
    status: boolean
  } | null = null;
  protected data!: any;
  protected displayFields: string[] = [
    'id',
    'name',
    'gender',
    'phone',
    'address',
    'reason',
    'status',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  protected getData(): void {
    this.ds.getRequest('loadpatients').subscribe((res: any) => {
      console.log(res);
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  protected Ondelete(id: number): void {
    this.ds.postRequest(`patients/delete/${id}`, null).subscribe((res: any) => {
      console.log(res);
    });
  }

  insertHistory(
    first_name: string,
    last_name: string,
    middle_name: string,
    extension_name: string,
    reason: string,
  ): void {
    this.selected = {
      first_name,
      last_name,
      middle_name,
      extension_name,
      reason,
      status:true
    };
    console.log(this.selected);
    this.ds.postRequest('patientsque/add', this.selected).subscribe(
      (res: any) => {
        console.log(res);
        // Optionally: Provide user feedback for successful submission
      })
    }
}
