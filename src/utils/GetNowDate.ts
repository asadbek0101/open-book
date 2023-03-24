export function GetNowDate(){
    let date = {
        Mins: 0,
        Hours: 0,
        Days: 0,
        Months: 0,
        Years: 0,
    }
    setInterval(()=>{
        date.Mins = new Date().getMinutes();
        date.Hours = new Date().getHours();
        date.Days = new Date().getDate();
        date.Months = new Date().getMonth();
        date.Years = new Date().getFullYear();
    },1000)
    return date
}