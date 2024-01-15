import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public addRepositoryData!: FormGroup
  public title = 'githubBrowser';
  public hideSidebar = true;
  public repositoryData: any = [];
  public displayBranch: boolean = false;
  public displaySelectedRecord: any = [];
  public branchHeading: any;
  public activeIndex: number = 0;
  public postBranches: any = [{ branch: 'develop' }, { branch: 'staging' }, { branch: 'Production' }];
  public  postIssue: any = []
  public displayCommentsData: any = [];
  public branchName: any = [];
  public deleteRecord: any;
  public commentsData: any = [
    { date: '10 January 2024', name: 'User 1', description: 'Space between head and page number', imagePath: '../assets/comment1.png' },
    { date: '11 January 2024', name: 'User 2', description: 'List Style Type', imagePath: '../assets/comment2.png' },
    { date: '12 January 2024', name: 'User 3', description: 'Underline issue in UI', imagePath: '../assets/comment3.png' },
    { date: '13 January 2024', name: 'User 4', description: 'Implementation issue of Dashboard screen', imagePath: '../assets/comment4.png' },
    { date: '14 January 2024', name: 'User 5', description: 'Request a change to existing rule', imagePath: '../assets/comment1.png' },
    { date: '15 January 2024', name: 'User 6', description: 'Please find security issues at https://hackerone.com/eslint', imagePath: '../assets/comment2.png' },
  ];
  public  issues: any = [
    { name: 'Bug Report', description: 'Report an issue with Angular12.1.2', imagePath: '../assets/bug.png' },
    { name: 'Non-Rule change Request', description: 'Request a change that is not a bug fix,rule change,or new rule', imagePath: '../assets/avatar.png' },
    { name: 'New Rule Proposal', description: 'Proose a new rule to be added to angular', imagePath: '../assets/bug.png' },
    { name: 'Question', description: 'please go to https://github.com', imagePath: '../assets/avatar.png' },
    { name: 'Rule Change Request', description: 'Request a change to existing rule', imagePath: '../assets/bug.png' },
    { name: 'Security Issue', description: 'Please find security issues at https://hackerone.com/eslint', imagePath: '../assets/avatar.png' },
  ]
  constructor() {
  }

  ngOnInit(): void {
    this.addRepositoryData = new FormGroup({
      organization: new FormControl('', [Validators.required]),
      repositoryName: new FormControl('', [Validators.required]),
    });
    alert("please click + button to Add Repository ")
  }


//Add Repository
  addRepository() {
    $('#exampleModal').modal('hide');
    this.repositoryData.push(this.addRepositoryData.value);
    this.addRepositoryData.reset();
  }

  //On click of Repository 
  selectRecord(event: any) {
    this.displaySelectedRecord = [];
    this.displayBranch = true;
    this.branchHeading = event.repositoryName;
    this.displaySelectedRecord = this.postBranches;
    this.deleteRecord = event;
  }

  //List Comments
  displayComments(repo: any) {
    this.displayCommentsData = [];
    this.branchName = repo;
    this.displayCommentsData = this.commentsData;
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
    // this.cdr.detectChanges();
  }

//Delete Repository
  deleteRepository() {
    this.repositoryData.splice(this.repositoryData.findIndex((a: any) => a.organization === this.deleteRecord.organization), 1)
    console.log(this.repositoryData)
    this.displayBranch = false;
  }
}
