import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-importexcel',
  templateUrl: './importexcel.component.html',
  styleUrls: ['./importexcel.component.css']
})
export class ImportexcelComponent implements OnInit {

  form: FormGroup;
  percentDone: number = 0;
  uploadSuccess: boolean = false;
  noOfRecords: number = 0;
  companyName: string;
  minDate: Date;
  maxDate: Date;
  
  constructor(private adminSer: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      upload: ['']
    })
  }
  fileUploadEvent(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.form.get('upload').setValue(file);
    }
  }

  onUpload() {
    let formData: FormData = new FormData();
      formData.append('file',this.form.get('upload').value);
      this.adminSer.copyFile(formData).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {

        }
    }); 
  }

  getSummary() {
    this.uploadSuccess = true;
    this.adminSer.getSummary().subscribe((response: any) => {
      this.noOfRecords = response.noOfRecords;
      this.companyName = response.companyName;
      this.minDate = response.minDate;
      this.maxDate = response.maxDate;
    })
  }





}
