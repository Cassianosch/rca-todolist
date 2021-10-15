export interface listData {
    id: number;
    task: string;
    checked: boolean;
}

export interface listPropsData {
    list: listData[];
    handleClickItem: (el: listData) => void;
    handleCheckDoneItem: (id: number) => void;
    handleDeleteInput: (id: number) => void;
}