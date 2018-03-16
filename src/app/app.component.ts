import { Component,HostListener, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Tristate checkboxes';
  allAnalyst:boolean=false;
  analyst = [
    {
      name: "Ryan Allen",
      id: 101,
      checked: false,
      childrens: [
        { name: 'Adam', id: 1, checked: false },
        { name: 'Sewhag', id: 2, checked: false },
        { name: 'David', id: 3, checked: false },
        { name: 'Nehra', id: 4, checked: false }
      ]
    }, {
      name: "David Andrews",
      id: 102,
      checked: false,
      childrens: [
        { name: 'Dhoni', id: 1, checked: false },
        { name: 'Gambir', id: 2, checked: false },
        { name: 'Sachin', id: 3, checked: false },
        { name: 'Buttler', id: 4, checked: false }
      ]
    }, {
      name: "Adam Butier",
      id: 103,
      checked: false,
      childrens: [
        { name: 'Kohli', id: 1, checked: false },
        { name: 'Mggrate', id: 2, checked: false },
        { name: 'Bretlee', id: 3, checked: false },
        { name: 'Jaya surya', id: 4, checked: false }
      ]
    }
    , {
      name: 'Jow Cordano',
      id: 104,
      checked: false,
      childrens: [
        { name: 'Adam tom', id: 1, checked: false },
        { name: 'Shami', id: 2, checked: false },
        { name: 'Bhuvi', id: 3, checked: false },
        { name: 'Raj Sekhra', id: 4, checked: false }
      ]
    }, {
      name: 'David Harris',
      id: 105,
      checked: false,
      childrens: [
        { name: 'Adam-1', id: 1, checked: false },
        { name: 'Sewhag2', id: 2, checked: false },
        { name: 'David3', id: 3, checked: false },
        { name: 'Nehra4', id: 4, checked: false }
      ]
    }, {
      name: 'Tom McCarthy',
      id: 106,
      checked: false,
      childrens: [
        { name: 'Adam5', id: 1, checked: false },
        { name: 'Sewhag59', id: 2, checked: false },
        { name: 'David6', id: 3, checked: false },
        { name: 'Nehra8', id: 4, checked: false }
      ]
    }];

  // @HostListener('window:mouseleave') 
  // onMouseLeave() {
  //   this.collapseLevel2Items();
  // }

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }  

  clearAll(){
    this.analyst.forEach(oneLevel =>{
      oneLevel.checked = false;
      oneLevel.childrens.forEach(twoLevel =>{
        twoLevel.checked = false;
      });
    });
    //this.ref.checkNoChanges();
    this.allAnalyst = false;
  }

  submit(){
    console.log(this.analyst);
  }

  arrowToggle(event:any){
    var element = document.getElementById("tristate-chk-form");

    if (element.classList) {
      element.classList.toggle("tristate-chk-form");
    } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("tristate-chk-form");

      if (i >= 0)
        classes.splice(i, 1);
      else
        classes.push("tristate-chk-form");
      element.className = classes.join(" ");
    }
  }
  
  oneLevelChange(id:number, isChecked: boolean) {
     this.analyst.forEach(oneLevel =>{
       if(oneLevel.id == id)
       {
         oneLevel.childrens.forEach(twoLevel =>{
           twoLevel.checked =isChecked;
         })
         oneLevel.checked = isChecked;
       }
     });
     this.ref.checkNoChanges();
    //  if(isChecked)
    //  {
    //    this.allAnalyst = false;
    //  }
  }

  twoLevelChange(parentId:number,childId:number, isChecked: boolean){
    this.analyst.forEach(oneLevel =>{
      if(oneLevel.id == parentId)
      {
        oneLevel.childrens.forEach(twoLevel =>{
          if(twoLevel.id == childId)
          {
            twoLevel.checked =isChecked;
          }         
        })
        oneLevel.checked = isChecked;
      }
    });
    this.ref.checkNoChanges();
    // if(isChecked)
    // {
    //   this.allAnalyst = false;
    // }
  }

  hiddenLevel2(){
    // this.collapseLevel2Items();
  }

  hiddenLevel3(){
    this.collapseLevel2Items();
  }

  visibleLevel2(event:any,id:number){
       this.collapseLevel2Items();
       var element = document.getElementById("tristate-chk-level2-container-" + id);
       element.style.display = "block";
  }

  
  checkAll(isChecked: boolean) {
    this.analyst.forEach(oneLevel => {
      oneLevel.checked = isChecked;
      oneLevel.childrens.forEach(twoLevel => {
        twoLevel.checked = isChecked;
      });
    });
    this.ref.checkNoChanges();
  }

  private collapseLevel2Items(): void {
    let listOfItems: any = document.getElementsByClassName('tristate-chk-level2-container');
    for (var item of listOfItems) {
      item.style.display = "none";
    }
  }


}
