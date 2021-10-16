import { listData } from "./list";

export interface propsData {
    handleChangeValue: (value: listData) => void;
    value: string;
    handleButtonClick: () => void;
    editing: number;
}