export interface listData {
    id: number;
    task: string;
    checked: boolean;
}

export interface listPropsData {
    list: listData[];
    handleClickItem(el: listData): Promise<void>;
    handleCheckDoneItem(id: number): Promise<void>;
    handleDeleteInput(id: number): Promise<void>;
}