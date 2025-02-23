export class DateUtils {

    public static getDateFormat(): string {
        return "dd/MM/yyyy"
    }

    public static getNumDateFromDateObj(date: Date = new Date()): number {
        let numDate: number = 0;
        let year: string = date.getFullYear().toString();
        let month: string = (date.getMonth() + 1).toString();
        let day: string = date.getDate().toString();

        month = '0'.repeat(2 - month.length) + month;
        day = '0'.repeat(2 - day.length) + day;
        
        numDate = parseInt(year+month+day);

        return numDate;
    }

}