import { Component, OnInit } from '@angular/core';
import {SVGUtils} from '../utils/SVGUtils';
@Component({
  selector: 'avisualizer-main-view',
  templateUrl: './avisualizer-main-view.component.html',
  styleUrls: ['./avisualizer-main-view.component.css']
})
export class AvisualizerMainViewComponent implements OnInit {

  isPVHidden: boolean;
  isSVHidden: boolean;
  constructor() { 
    this.isSVHidden = true;
    this.isPVHidden = false;
  }

  ngOnInit(): void {
  }

  selectSystemView(){
    this.isSVHidden = false;
    this.isPVHidden = true;
    SVGUtils.resetSystemView();
  }

  selectPackageView(){
    this.isSVHidden = true;
    this.isPVHidden = false;
    SVGUtils.resetPackageView();
  }
  


}