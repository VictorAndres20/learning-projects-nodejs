declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
    }
}

/** ********************* SERVER CONFIG *********************** */
/** Port */
process.env.PORT = process.env.PORT || "8000";
/*********** */