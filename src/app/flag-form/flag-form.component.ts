import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FlagSevice } from '../services/flags.service';

// TODO: Put in separate file

export interface FlagData {
  beachName?: string;
  locationName?: string;
  lat: number | null;
  long: number | null;
  flagType: FLAG;
  description?: string;
  image?: string;
}

export enum FLAG {
  GREEN = 1,
  YELLOW,
  RED
}

@Component({
  selector: 'wis-flag-form',
  templateUrl: './flag-form.component.html',
  styleUrls: ['./flag-form.component.scss']
})
export class FlagFormComponent implements OnInit {

  public flagForm: FormGroup;

  public uploader: FileUploader = new FileUploader({ itemAlias: 'photo'});
  public flagType = FLAG;
  public uploadFileName: string;
  public defaultFlagData: FlagData =  {
    beachName: 'Южен плаж',
    locationName: 'Бургас',
    lat: null,
    long: null,
    description: '',
    flagType: FLAG.GREEN,
    image: ''
  };
  private base64textString: string;
  
  constructor(private formBuilder: FormBuilder, private flagService: FlagSevice) {
    this.base64textString = '';
  }

  public ngOnInit(): void {
    this.subscribeCurrentPosition();
    this.uploader.onAfterAddingFile = (file: any) => {
      this.handleFileSelect(file.file.rawFile);
      this.uploadFileName = file._file.name;
      file.withCredentials = false;

     };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  public setFlagType(flag: number): void {
    this.flagForm.get('flagType').setValue(flag);
  }
  
  public onSubmit(): void {
    this.flagForm.get('image').setValue(this.base64textString);
    this.flagService.addNewFlag(this.flagForm.value).subscribe(res => console.log(res));
  }
  private handleFileSelect(file): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  private handleReaderLoaded(readerEvt): void {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  private subscribeCurrentPosition(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.defaultFlagData.lat = position.coords.latitude;
        this.defaultFlagData.long = position.coords.longitude;
        this.flagForm = this.initForm();
      },
      (err) => {
        alert(err.message);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      beachName: [this.defaultFlagData.beachName, Validators.compose([Validators.required])],
      locationName: [this.defaultFlagData.locationName, Validators.compose([Validators.required])],
      description: [this.defaultFlagData.description],
      flagType: [this.defaultFlagData.flagType],
      lat: [this.defaultFlagData.lat, Validators.compose([Validators.required])],
      long: [this.defaultFlagData.long, Validators.compose([Validators.required])],
      image: [this.defaultFlagData.image, Validators.compose([Validators.required])]
    });
  }
}
