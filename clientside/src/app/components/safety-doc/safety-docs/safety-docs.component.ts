import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Safetydoc } from 'src/app/entities/safetydocs/safetydoc';
import { SafetydocService } from 'src/app/services/safetydoc/safetydoc.service';

@Component({
  selector: 'app-safety-docs',
  templateUrl: './safety-docs.component.html',
  styleUrls: ['./safety-docs.component.css']
})
export class SafetyDocsComponent implements OnInit {

  allSafetydocs = new Array<Safetydoc>();
  deletedSafetydoc: Safetydoc;

  constructor(private safetydocService: SafetydocService){}

  displayedColumns: string[] = ['action', 'id', 'status', 'type', 'switchingPlan', 'safetyDocType',
                            'dateCreated', 'phoneNo', 'crew', 'creator', 'details', 'notes',
                          'workOperationsCompleted', 'tagsRemoved', 'groundingRemoved', 'readyForService'];
  dataSource = new MatTableDataSource(this.allSafetydocs);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.safetydocService.loadSafetydocs().subscribe(
      (res: any) => {
        this.fetchData();
      }
    )
  }

  fetchData(){
    this.safetydocService.loadSafetydocs().subscribe(
      data => {
        this.allSafetydocs = data;
        this.dataSource = new MatTableDataSource(this.allSafetydocs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(id: number){
    this.deletedSafetydoc = this.allSafetydocs.find(i => i.id == id);
    this.safetydocService.deleteSafetydoc(this.deletedSafetydoc).subscribe(
      (res) => {
        this.fetchData();
      }
    )
  }

}
