declare module MProfile {
    export interface IEmployee {
        EmpName: string;
        EmpSalary: number;
        new(name: string, sal: number): IEmployee;
    }
    export interface Main {
        emp: IEmployee;
        sayHello(msg: string): string;
    }
}

declare var Profile: MProfile.Main;