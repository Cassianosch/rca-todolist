import { listData } from "./list";

export interface propsData {
    handleChangeValue(el: listData): Promise<void>;
    value: string;
    handleButtonClick: () => void;
    editing: string;
}