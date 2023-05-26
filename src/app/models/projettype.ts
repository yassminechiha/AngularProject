export interface projettype {
    id?:number;
    proj_name: String,
    start_date: String,
    team:Array<number>,
    progress: number,
    status: String
    tasks:Array<string>,
    desc:string;
}

