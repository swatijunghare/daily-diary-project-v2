// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApiService } from 'src/app/shared/api.service';
// import { AuthserviceService } from 'src/app/shared/authservice.service';

// @Component({
//   selector: 'app-student-dashboard',
//   templateUrl: './student-dashboard.component.html',
//   styleUrls: ['./student-dashboard.component.css']
// })
// export class StudentDashboardComponent {
//   studentData !: any;
//   selectedStudent: any;
//   studentDataFromJson: any;
//   email!: string; //display emailid of vt to student dashboard

//   showDailyDiarySection: boolean = false;
//   MonthDaysData: string[]=['MonthDay1','MonthDay2','MonthDay3','MonthDay4','MonthDay5','MonthDay6','MonthDay7','MonthDay8','MonthDay9','MonthDay10','MonthDay11','MonthDay12','MonthDay13'];
//   hoursData: string[] = ['hour1', 'hour2', 'hour3', 'hour4', 'hour5', 'hour6', 'hour7', 'hour8', 'hour9', 'hour10', 'hour11', 'hour12', 'hour13'];
//   minutesData: string[] = ['minutes1','minutes2','minutes3','minutes4','minutes5','minutes6','minutes7','minutes8','minutes9','minutes10','minutes11','minutes12','minutes13'];
//  // Task1TickData: string[] = ['Task1Tick1','Task1Tick2','Task1Tick3','Task1Tick4','Task1Tick5','Task1Tick6','Task1Tick7','Task1Tick8','Task1Tick9','Task1Tick10','Task1Tick11','Task1Tick12','Task1Tick13']
//   taskData: any[] | undefined;


//   constructor(private apiservice: ApiService,
//     private router: Router,
//     private authservice : AuthserviceService) { }

//   ngOnInit(): void {
//     this.getAllStudents();
//     this.email = this.authservice.getEmail();//display emailid of vt to student dashboard
//   }

//   getAllStudents() {
//     this.apiservice.getStudents().subscribe((res: any) => {

//       this.studentData = res.studentDetails;
//       console.log(res.studentDetails);
//     })
//   }
//   selectStudent(id: number) {
//     this.apiservice.getStudentById(id).subscribe((res) => {
//       this.selectedStudent = res.studentDetails;
//       //console.log(res.studentDetails);
//       console.log(this.selectedStudent);
//     })
//   }
//   clearSelectedStudent() {
//     this.selectedStudent = null;
//   }
//   go_to_login() {
//     this.router.navigate(['/vt_login'])
//   }

//   //select json file and upload
//   onFileSelected(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         //It checks if e and e.target are not null or undefined before attempting to access e.target. 
//         //The result is cast to FileReader type, and then .result is accessed and cast as a string.
//         const fileContent = (e.target as FileReader)?.result as string;
//         this.parseJson(fileContent);
//          this.jsonData1(); // Log the filtered data before sending to the backend
//         // this.uploadDataToBackend();
//         this.showDailyDiarySection = true; 
//       };
//       reader.readAsText(file);
//     }
//   }
//   private parseJson(jsonString: string): void {
//     try {
//       const jsonData = JSON.parse(jsonString);
//       this.studentDataFromJson = jsonData;
//       console.log("stu_data from json", this.studentDataFromJson);
//       // this.hoursData = Object.values(this.studentDataFromJson.fieldInfo.hour);
//     } catch (error) {
//       console.log("Error parsing JSON:", error);
//     }
//   }

//   //here new obj for filtered data from scanned file to send to backend
//   // private jsonData1(): void {
//   //   if (this.studentDataFromJson) {
//   //     const tasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'];
//   //     const sortedData: TaskData[] = [];
  
//   //     // Extract the 'Year' and 'Month' from the scanned file
//   //     const year = this.studentDataFromJson.fieldInfo['Year'];
//   //     const month = this.studentDataFromJson.fieldInfo['Month'];
  
//   //     tasks.forEach((task) => {
//   //       const taskName = this.studentDataFromJson.fieldInfo[`TaskName${task.substring(4)}`];
//   //       console.log("TaskName=",taskName);
  
//   //       // Skip if TaskName is empty
//   //       if (!taskName) {
//   //         return;
//   //       }
  
//   //       for (let i = 1; i <= 13; i++) {
//   //         const tickKey = `${task}Tick${i}`;
//   //         const monthDayKey = `MonthDay${i}`;
//   //         const hourKey = `hour${i}`;
//   //         const minuteKey = `minutes${i}`;
  
//   //         const performedValue = this.studentDataFromJson.fieldInfo[tickKey] === '1' ? 'Yes' : 'No';
//   //         console.log("Tick",this.studentDataFromJson.fieldInfo[tickKey]);
  
//   //         // Only include tasks with tick value 1
//   //         if (performedValue === 'Yes') {
//   //           const monthDayValue = this.studentDataFromJson.fieldInfo[monthDayKey];
//   //           const hourValue = this.studentDataFromJson.fieldInfo[hourKey];
//   //           const minuteValue = this.studentDataFromJson.fieldInfo[minuteKey];
  
//   //           const minutesPresent = minuteValue !== ''; // Check if minutes are present
  
//   //           // Form the date string directly
//   //           const date = `${year}-${month}-${monthDayValue}`;
  
//   //           const taskObj = {
//   //             TaskName: taskName,
//   //             Performed: performedValue,
//   //             Date: date,
//   //             Hour: hourValue,
//   //             Minutes: minutesPresent ? minuteValue : '00', // Include only if minutes are present
//   //           };
  
//   //           // Check if the task is already in the sortedData array
//   //           const existingTask = sortedData.find((item) => item.TaskName === taskName && item.Date === date);
  
//   //           if (!existingTask) {
//   //             sortedData.push(taskObj);
//   //           }
//   //         }
//   //       }
//   //     });
  
//   //     // Sort the array based on TaskName, Date
//   //     sortedData.sort((a, b) => {
//   //       const taskNameComparison = a.TaskName.localeCompare(b.TaskName);
//   //       return taskNameComparison === 0 ? a.Date.localeCompare(b.Date) : taskNameComparison;
//   //     });
  
//   //     console.log("sortedData =", sortedData);
//   //   }
//   // }

//   private jsonData1(): void {
//     if (this.studentDataFromJson) {
//       const tasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'];
//       const taskData: any[] = [];
  
//       tasks.forEach((task) => {
//         const taskName = this.studentDataFromJson.fieldInfo[`TaskName${task.substring(4)}`];
//         console.log("TaskName=", taskName);
  
//         // Skip if TaskName is empty
//         if (!taskName) {
//           return;
//         }
  
//         const taskTicks: number[] = [];
  
//         for (let i = 1; i <= 13; i++) {
//           const tickKey = `${task}Tick${i}`;
//           const performedValue = this.studentDataFromJson.fieldInfo[tickKey] === '1' ? 1 : 0;
//           console.log("Tick", performedValue);
  
//           taskTicks.push(performedValue);
//         }
  
//         const taskObj = {
//           TaskName: taskName,
//           TaskTicks: taskTicks,
//         };
  
//         taskData.push(taskObj);
//       });
  
//       console.log("taskData =", taskData);
  
//       // use taskData to display in the template
//       this.taskData = taskData; 
//     }
//   }
// }

// interface TaskData {
//   TaskName: string;
//   Performed: string;//Performed means TaskTick
//  Date: string;
//   Hour: string;
//   Minutes?: string;
// }
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { AuthserviceService } from 'src/app/shared/authservice.service';
import { NgxImageCompressService } from 'ngx-image-compress';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  studentData !: any;
  selectedStudent: any;
  studentDataFromJson: any;
  email!: string; //display emailid of vt to student dashboard

  showDailyDiarySection: boolean = false;
  MonthDaysData: string[]=['MonthDay1','MonthDay2','MonthDay3','MonthDay4','MonthDay5','MonthDay6','MonthDay7','MonthDay8','MonthDay9','MonthDay10','MonthDay11','MonthDay12','MonthDay13'];
  hoursData: string[] = ['hour1', 'hour2', 'hour3', 'hour4', 'hour5', 'hour6', 'hour7', 'hour8', 'hour9', 'hour10', 'hour11', 'hour12', 'hour13'];
  minutesData: string[] = ['minutes1','minutes2','minutes3','minutes4','minutes5','minutes6','minutes7','minutes8','minutes9','minutes10','minutes11','minutes12','minutes13'];
 // Task1TickData: string[] = ['Task1Tick1','Task1Tick2','Task1Tick3','Task1Tick4','Task1Tick5','Task1Tick6','Task1Tick7','Task1Tick8','Task1Tick9','Task1Tick10','Task1Tick11','Task1Tick12','Task1Tick13']
  taskData: any[] | undefined;

  selectedImage: File | null = null;
  compressedBase64: string | null = null;


  constructor(private apiservice: ApiService,
    private router: Router,
    private authservice : AuthserviceService,
    private imageCompressService :NgxImageCompressService
   ) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.email = this.authservice.getEmail();//display emailid of vt to student dashboard
  }

  getAllStudents() {
    this.apiservice.getStudents().subscribe((res: any) => {

      this.studentData = res.studentDetails;
      console.log(res.studentDetails);
    })
  }
  selectStudent(id: number) {
    this.apiservice.getStudentById(id).subscribe((res) => {
      this.selectedStudent = res.studentDetails;
      //console.log(res.studentDetails);
      console.log(this.selectedStudent);
    })
  }
  clearSelectedStudent() {
    this.selectedStudent = null;
  }
  go_to_login() {
    this.router.navigate(['/vt_login'])
  }

  //select image
  onFileSelected(event: any): void {
    const files = event.target.files;
    this.selectedImage = files && files.length > 0 ? files[0] : null;

    if (this.selectedImage) {
      const originalSizeInBytes = this.selectedImage.size;
      const originalSizeInKB = originalSizeInBytes / 1024;
      console.log('Original Image Size:', originalSizeInKB.toFixed(2), 'KB');
      this.compressAndUpload(); //call function to compress and upload image on http post
    }
  }

  //function to compress image and upload it
  compressAndUpload(): void {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.imageCompressService
          .compressFile(base64String, -1, 60, 60)
          .then((compressedBase64: string) => {
            const compressedSizeInBytes = compressedBase64.length;
            const compressedSizeInKB = compressedSizeInBytes / 1024;
            console.log('Compressed Image Size:', compressedSizeInKB.toFixed(2), 'KB');
            this.compressedBase64 = compressedBase64;
            // Call your API service here to send the compressed image
            this.onUploadAndProcessData();
          })
          .catch((error) => {
            console.error('Image Compression Error:', error);
          });
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  //send upload file to http post and get json data and show in table
  onUploadAndProcessData(): void {
    if (this.compressedBase64) {
      console.log('Sending Compressed Image Size:', this.compressedBase64.length / 1024, 'KB');
      // Call your API service to upload the compressed image
      this.apiservice.uploadCompressedImg(this.compressedBase64.split(',')[1]).subscribe({
        next: (response) => {
          console.log('API Response:', response);
          this.studentDataFromJson = response;
         
          this.jsonData1(); 
          this.sortedData1();
          this.showDailyDiarySection = true; 
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
    }
  }

  //function getting json 
  private jsonData1(): void {
    console.log("json Data");
    if (this.studentDataFromJson) {
      console.log(this.studentDataFromJson);
      const tasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'];
      const taskData: any[] = [];
      const sortedData: TaskData[] = [];

      // Extract the 'Year' and 'Month' from the scanned file
      const year = this.studentDataFromJson.fieldInfo['Year'];
      const month = this.studentDataFromJson.fieldInfo['Month'];
  
      tasks.forEach((task) => {
        const taskName = this.studentDataFromJson.fieldInfo[`TaskName${task.substring(4)}`];
       // console.log("TaskName=", taskName);
  
        // Skip if TaskName is empty
        if (!taskName) {
          return;
        }
  
        const taskTicks: number[] = [];
  
        for (let i = 1; i <= 13; i++) {
          const tickKey = `${task}Tick${i}`;
          const monthDayKey = `MonthDay${i}`;
          const hourKey = `hour${i}`;
          const minuteKey = `minutes${i}`;
          const performedValue = this.studentDataFromJson.fieldInfo[tickKey] === '1' ? 1 : 0;
          //console.log("Tick", performedValue);
  
          taskTicks.push(performedValue);
        }
  
        const taskObj = {
          TaskName: taskName,
          TaskTicks: taskTicks,
        };
  
        taskData.push(taskObj);
      });
  
     // console.log("taskData =", taskData);
  
      // use taskData to display in the template
      this.taskData = taskData; 
    }
  }
 //here sotrted data from json file to send to backend
  private sortedData1(): void {
    if (this.studentDataFromJson) {
      const tasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'];
      const sortedData: TaskData[] = [];
  
      // Extract the 'Year' and 'Month' from the scanned file
      const year = this.studentDataFromJson.fieldInfo['Year'];
      const month = this.studentDataFromJson.fieldInfo['Month'];
  
      tasks.forEach((task) => {
        const taskName = this.studentDataFromJson.fieldInfo[`TaskName${task.substring(4)}`];
       // console.log("TaskName=",taskName);
  
        // Skip if TaskName is empty
        if (!taskName) {
          return;
        }

        const taskTicks: number[] = [];
  
        for (let i = 1; i <= 13; i++) {
          const tickKey = `${task}Tick${i}`;
          const monthDayKey = `MonthDay${i}`;
          const hourKey = `hour${i}`;
          const minuteKey = `minutes${i}`;
          const performedValue = this.studentDataFromJson.fieldInfo[tickKey] === '1' ? 'Yes' : 'No';
        //  console.log("Tick",this.studentDataFromJson.fieldInfo[tickKey]);
  
       // taskTicks.push(performedValue);
          // Only include tasks with tick value 1
          if (performedValue === 'Yes') {
            const monthDayValue = this.studentDataFromJson.fieldInfo[monthDayKey];
            const hourValue = this.studentDataFromJson.fieldInfo[hourKey];
            const minuteValue = this.studentDataFromJson.fieldInfo[minuteKey];
  
            const minutesPresent = minuteValue !== ''; // Check if minutes are present
  
            // Form the date string directly
            const date = `${year}-${month}-${monthDayValue}`;
  
            const taskObj = {
              TaskName: taskName,
              Performed: performedValue,
              Date: date,
              Hour: hourValue,
              Minutes: minutesPresent ? minuteValue : '00', // Include only if minutes are present
            };
  
            // Check if the task is already in the sortedData array
            const existingTask = sortedData.find((item) => item.TaskName === taskName && item.Date === date);
  
            if (!existingTask) {
              sortedData.push(taskObj);
            }
          }
        }
      });
  
      // Sort the array based on TaskName, Date
      sortedData.sort((a, b) => {
        const taskNameComparison = a.TaskName.localeCompare(b.TaskName);
        return taskNameComparison === 0 ? a.Date.localeCompare(b.Date) : taskNameComparison;
      });
  
      console.log("sortedData =", sortedData);
    }
  }

 
}

interface TaskData {
  TaskName: string;
  Performed: string;//Performed means TaskTick
 Date: string;
  Hour: string;
  Minutes?: string;
}
