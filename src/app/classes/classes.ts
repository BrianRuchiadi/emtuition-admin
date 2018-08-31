export class Classes {
    constructor(
        public name: string = '',
        public fees: number = null,
        public status: string = 'active',
        public isMonday: boolean = false,
        public isTuesday: boolean = false,
        public isWednesday: boolean = false,
        public isThursday: boolean = false,
        public isFriday: boolean = false,
        public isSaturday: boolean = false,
        public isSunday: boolean = false,
        public timeStart: any = null,
        public timeEnd: any = null,
    ) { }
}
