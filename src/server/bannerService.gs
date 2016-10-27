var calendars = {
  "announcement": "ccsknights.org_jtmuqm3325ocmretuic01836hg@group.calendar.google.com",
  "letterDay": "ccsknights.org_u40calbnpa0lk48a4namm1dpao@group.calendar.google.com"  
}

function doGet(e) {
  var callback = e.parameters.callback;
  var cache = CacheService.getScriptCache();  
  var retObj = {}
  for(var cal in calendars){
    retObj[cal] = cache.get(cal);
  }
  
  return ContentService.createTextOutput(callback + "("+  JSON.stringify(retObj) +")").setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function cacheEvents(){
  var cache = CacheService.getScriptCache();
  for(var cal in calendars){
    cache.put(cal,getTopEvent(calendars[cal]), 1800);
  }
}


function getTopEvent(cal){
  var cal = CalendarApp.getCalendarById(cal);
  var title = ""
  try{title = cal.getEventsForDay(new Date)[0].getTitle();}
  catch(e){}
  return title;

}
