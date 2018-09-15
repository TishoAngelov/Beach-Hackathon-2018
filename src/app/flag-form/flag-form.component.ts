import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
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

  public uploader: FileUploader = new FileUploader({url: 'URL', itemAlias: 'photo'});
  public flagType = FLAG;

  public defaultFlagData: FlagData =  {
    beachName: 'Южен плаж',
    locationName: 'Бургас',
    lat: null,
    long: null,
    description: '',
    flagType: FLAG.GREEN,
    image: ''
  };

  constructor(private formBuilder: FormBuilder, private flagService: FlagSevice) { }

  public ngOnInit(): void {
    this.subscribeCurrentPosition();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  public setFlagType(flag: number): void {
    this.flagForm.get('flagType').setValue(flag);
  }

  public onSubmit(): void {
    this.flagService.addNewFlag(this.flagForm.value).subscribe(res=>console.log(res));
    console.warn(this.flagForm.value);
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
