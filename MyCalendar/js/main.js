'use strict';

// {
//   const today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth(); // 0＝1月

//   function getCalendarHead() {
//     const dates = [];
//     const d = new Date(year, month, 0).getDate();
//     const n = new Date(year, month, 1).getDay();

//     for (let i=0; i< n; i++){
//       dates.unshift({
//         date : d-i,
//         isToday : false,
//         isDisabled : true
//       });
//     }
//     return dates;
//   }

//   function getCalendarBody(){
//     const dates = [];
//     const lastDate = new Date(year, month+1, 0).getDate();

//     for(let i = 1; i <= lastDate; i++){
//       dates.push({
//         date : i,
//         isToday : false,
//         isDisabled : false
//       });
//     }
//     if(year === today.getFullYear() && month === today.getMonth()){
//       dates[today.getDate() - 1].isToday = true;
//     }
//     return dates;
//   }

//   function getCalendarTail(){
//     const dates = [];
//     const lastDay = new Date(year, month +1, 0).getDay();
//     for (let i = 1; i < 7 - lastDay; i++){
//       dates.push({
//         date : i,
//         isToday:false,
//         isDisabled:true
//       });
//     }
//     return dates;
//   }

//   function clearCalendar(){
//     const tbody = document.querySelector("tbody");
//     while(tbody.firstChild){
//       tbody.removeChild(tbody.firstChild);
//     }
//   }

//   function renderTitle(){
//     const title = `${year}/${String(month + 1).padStart(2, "0")}`;
//     document.getElementById("title").textContent = title;
//   }

//   function renderWeeks(){
//     const dates = [
//       ...getCalendarHead(),
//       ...getCalendarBody(),
//       ...getCalendarTail()
//     ];
//     const weeks = [];
//     const weeksCount = dates.length / 7;

//     for (let i = 0; i < weeksCount; i++){
//       weeks.push(dates.splice(0, 7));
//     }

//     weeks.forEach(week => {
//       const tr = document.createElement("tr");
//       week.forEach(date => {
//         const td = document.createElement("td");

//         td.textContent = date.date;
//         if(date.isToday){
//           td.classList.add("today");
//         }
//         if(date.isDisabled){
//           td.classList.add("disabled");
//         }

//         tr.append(td);
//       });
//       document.querySelector("tbody").append(tr);
//     });
//   }

//   function createCalendar() {
//     clearCalendar();
//     renderTitle();
//     renderWeeks();
//   }

//   document.getElementById("prev").addEventListener("click", () => {
//     month--;
//     if(month < 0){
//       year--;
//       month = 11;
//     }

//     createCalendar();
//   });
//   document.getElementById("next").addEventListener("click", () => {
//     month++;
//     if(month > 11){
//       year++;
//       month = 0;
//     }

//     createCalendar();
//   });
//   document.getElementById("today").addEventListener("click", () => {
//     year = today.getFullYear();
//     month = today.getMonth();
//     createCalendar();
//   });

//   createCalendar();

// }


{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  

  const getLastMonthCalendar = () => {
    const dates = [];

    for (let i = 0; i < new Date(year, month, 1).getDay(); i = (i + 1) | 0) {
      const data = {
        date : new Date(year, month, 0).getDate() - i,
        isToday : false,
        isDisabled : true
      };

      dates.unshift(data);
    }
    console.log(dates);
    return dates;
  }

  const getThisMonthCalendar = () => {
    const dates = [];
  
    for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i = (i + 1) | 0) {
      const data = {
        date : i,
        isToday : false,
        isDisabled : false
      };
      
      dates.push(data);
    }

    if (year === today.getFullYear() && month === today.getMonth()){
      dates[today.getDate() -1].isToday = true;
    }
    console.log(dates);
    return dates;
  }
  
  const getNextMonthCalendar = () => {
    const dates = [];
  
    for (let i = 1; i < 7 - new Date(year, month + 1, 0).getDay() ; i = (i + 1) | 0) {
      const data = {
        date : i,
        isToday : false,
        isDisabled : true
      };

      dates.push(data);
    }
    console.log(dates);
    return dates;
  }

  const clearCalendar = () => {
    document.querySelector("tbody").innerHTML = "";
    // const tbody = document.querySelector("tbody");
    //  while(tbody.firstChild){
    //    tbody.removeChild(tbody.firstChild);
    //  }
  }
  

  const renderTitle = () => {
    const title = `${year}/${String(month + 1).padStart(2, "0")}`;
    document.getElementById("title").textContent = title;
  }

  const renderWeeks = () => {
    const dates = [
      ...getLastMonthCalendar(),
      ...getThisMonthCalendar(),
      ...getNextMonthCalendar()
    ];
    
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++){
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement("tr");
      week.forEach(date => {
        const td = document.createElement("td");

        td.textContent = date.date;
        if(date.isToday){
          td.classList.add("today");
        }
        if(date.isDisabled){
          td.classList.add("disabled");
        }

        tr.append(td);
      });
      document.querySelector("tbody").append(tr);
    });
  }

  const createCalendar = () => {
    clearCalendar();
    renderTitle();
    renderWeeks();
  };
  
  document.getElementById("prev").addEventListener("click", () => {
    month--;
    if(month < 0){
      year--;
      month = 11;
    }

    createCalendar();
  });
  document.getElementById("next").addEventListener("click", () => {
    month++;
    if(month > 11){
      year++;
      month = 0;
    }

    createCalendar();
  });
  document.getElementById("today").addEventListener("click", () => {
    year = today.getFullYear();
    month = today.getMonth();
    createCalendar();
  });

  createCalendar();

}