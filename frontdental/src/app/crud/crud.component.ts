import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    NavComponent,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatPaginator,
  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [DataService],
})
export class CrudComponent implements OnInit {
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
