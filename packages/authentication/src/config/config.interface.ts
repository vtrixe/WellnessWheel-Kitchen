
export interface ConfigDatabase {
    url : string;
}



export interface ConfigData {
    env: StorageManager;
    port: number;
    db: ConfigDatabase
}