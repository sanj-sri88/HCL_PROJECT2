import { Component, OnInit } from '@angular/core';
//import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

//import { PartrecordService } from '../partrecord.service';
import { PartRecord } from '../partrecord';

@Component({
  selector: 'app-part-record',
  templateUrl: './part-record.component.html',
  styleUrls: ['./part-record.component.css']
})
export class PartRecordComponent implements OnInit {
  dtOptions: any = {};

  //allPartRecordContent: string [];
  partrecords: PartRecord[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    //private appPartrecordService : PartrecordService
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
    
    this.httpClient.get<PartRecord[]>('../assets/data.json')
      .subscribe(data => {
        this.partrecords = (data as any).data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
