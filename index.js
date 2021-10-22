var data=null;
$(function(){
  $("#scheduler").dxScheduler({
      timeZone: "Europe/Rome",
      dataSource: data,
      views: ["day","week", "month"],
      currentView: "week",
      currentDate: new Date(2021, 9, 29),
      startDayHour: 9,
      height: 700,
  }).dxScheduler("instance");
  console.log(data);
})