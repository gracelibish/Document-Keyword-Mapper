import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from "rxjs";
import { DocKeyWordService } from '../doc-key-word.service';  
import { DocKeyWord } from '../doc-key-word';  
import { __values } from 'tslib';
import { SearchKeyWordsPipe } from '../search-key-words.pipe';

@Component({
  selector: 'app-doc-key-word',
  templateUrl: './doc-key-word.component.html',
  styleUrls: ['./doc-key-word.component.css']
})


export class DocKeyWordComponent implements OnInit {
  dataSaved = false;  
  docKWForm: any;  
  editMode: boolean = false;
  docKeyWordsList!: DocKeyWord[]; 
  fullList: DocKeyWord[] = []; 
  newPromoDocId = null;  
  message = "";  
  searchedKeyword: string ="";  

  constructor(private formbulider: FormBuilder, private docKeyWordService:DocKeyWordService) { this.loadAllPromoDocKWs();}

  ngOnInit(): void {
    this.docKWForm = this.formbulider.group({  
      PromoDocId: [''],
      PromoDocName: ['', [Validators.required]], 
      SKUId: [''],
      SKU: ['', [Validators.required]],  
      Keywords: ['', [Validators.required]],
    });  
    this.loadAllPromoDocKWs();     
  } 

  ngAfterContentInit(): void{
    this.docKWForm = this.formbulider.group({  
      PromoDocId: ['', [Validators.required]],
      PromoDocName: ['', [Validators.required]], 
      SKUId: ['', [Validators.required]],
      SKU: ['', [Validators.required]],  
      Keywords: ['', [Validators.required]],
    });  
    this.loadAllPromoDocKWs(); 
  }

  filterResults(criteria:string): DocKeyWord[]{
    if(this.searchedKeyword == "")
      this.docKeyWordsList = this.fullList;
    else{
      this.docKeyWordsList = this.fullList.filter(x => x.Keywords.indexOf(this.searchedKeyword));
      }
    return this.docKeyWordsList;
      
  }

  loadAllPromoDocKWs() { 
    var result:string = '';
    
    this.docKeyWordService.getAllDocKeyWord().subscribe(response => 
      {
        console.log(response);
        var result = response;
         this.docKeyWordsList = result;
         this.fullList = result;
      });
    
    }  

    addKW() {  
      this.dataSaved = false;  
      const docKeyWord = this.docKWForm.value;  
      this.CreateKeyWord(docKeyWord);  
      this.docKWForm.reset();  
      this.loadAllPromoDocKWs();
    }  
    loadKeyWordsToEdit(docKWID: number) {  
      this.docKeyWordService.getDocKeyWordById(docKWID).subscribe(docKW=> {  
        this.message = "";  
        this.dataSaved = false;  
        this.editMode = true;
        this.docKWForm.controls['PromoDocId'].setValue(docKW.PromoDocId); 
        this.docKWForm.controls['PromoDocName'].setValue(docKW.PromoDocName);  
        this.docKWForm.controls['SKU'].setValue(docKW.SKU);  
        this.docKWForm.controls['SKUId'].setValue(docKW.SKUId);  
        this.docKWForm.controls['Keywords'].setValue(docKW.Keywords);  
      });  
    
    }  
    CreateKeyWord(docKeyWord: DocKeyWord) {  
      if (docKeyWord.PromoDocId != 0) {  
        this.docKeyWordService.createDocKeyWord(docKeyWord).subscribe(  
          () => {  
            this.dataSaved = true;  
            this.message = 'Keyword saved Successfully';  
            this.loadAllPromoDocKWs();  
            this.newPromoDocId = null;  
            this.docKWForm.reset();  
          }  
        );  
      } else {          
        this.docKeyWordService.updateDocKeyWord(docKeyWord).subscribe(() => {  
          this.dataSaved = true;  
          this.message = 'Keyword Updated Successfully';  
          this.loadAllPromoDocKWs();  
          this.newPromoDocId = null;  
          this.docKWForm.reset();  
        });  
      }        
    }   

    DeleteKeyword(docKeyWord: DocKeyWord):void      {
      if (docKeyWord.PromoDocId != 0) {  
        var conf = confirm("Are you sure you want to delete the Keywords for the document?");
        if(conf)
        {
        docKeyWord.Keywords = "";
        this.docKeyWordService.updateDocKeyWord(docKeyWord).subscribe(() => {  
          this.dataSaved = true;  
          this.message = 'Keyword Updated Successfully';  
          this.loadAllPromoDocKWs();  
          this.newPromoDocId = null;  
          this.editMode = false;
          this.docKWForm.reset();  
        }); 
      }
      }
    }

    resetForm() {  
      this.docKWForm.reset();  
      this.message = "";  
      this.dataSaved = false;  
      this.editMode = false;
    }  
  
}

