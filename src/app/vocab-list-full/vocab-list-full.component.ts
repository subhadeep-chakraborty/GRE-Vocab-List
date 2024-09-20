import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {vocabs} from 'src/assets/vocabList';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocab-list-full',
  templateUrl: './vocab-list-full.component.html',
  styleUrls: ['./vocab-list-full.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatExpansionModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabListFullComponent {
  public vocabJson : any = {vocabs};
   vocabArr: any;

ngOnInit(){
  this.vocabArr = this.vocabJson?.vocabs?.mountain_categories?.map((x: any) => x.mountain_contents);
  console.log(this.vocabArr?.length , this.vocabArr);
}

}
