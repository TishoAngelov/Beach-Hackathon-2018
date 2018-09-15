import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

// TODO: Put in separate file

interface FlagData {
  beachName?: string;
  locationName: string;
  lat: number | null;
  long: number | null;
  flagType: FLAG;
  description?: string;
  timestamp: number;
  image?: string;
}

export enum FLAG {
  GREEN,
  YELLOW,
  RED,
  RED_YELLOW
}

@Component({
  selector: 'wis-flag-form',
  templateUrl: './flag-form.component.html',
  styleUrls: ['./flag-form.component.css']
})
export class FlagFormComponent implements OnInit {

  public flagForm: FormGroup;

  public uploader: FileUploader = new FileUploader({url: 'URL', itemAlias: 'photo'});

  public defaultFlagData: FlagData =  {
    beachName: '',
    locationName: '',
    lat: null,
    long: null,
    description: '',
    flagType: FLAG.GREEN,
    timestamp: null,
    image: ''
  };

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.subscribeCurrentPosition();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
  };
  }

  public onSubmit(): void {
    console.warn(this.flagForm.value);
  }

  private subscribeCurrentPosition(): void { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.defaultFlagData.lat = position.coords.latitude;
        this.defaultFlagData.long = position.coords.longitude;
        this.defaultFlagData.timestamp = position.timestamp;
        this.flagForm = this.initForm();
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
      lat: [this.defaultFlagData.lat, Validators.compose([Validators.required])],
      long: [this.defaultFlagData.long, Validators.compose([Validators.required])],
      timestamp: [this.defaultFlagData.timestamp, Validators.compose([Validators.required])],
      image: [this.defaultFlagData.image, Validators.compose([Validators.required])]
    });
  }

}
