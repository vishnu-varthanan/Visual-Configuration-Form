import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import { Flex } from "@tremor/react";


const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

// const dropdownControlledExampleOptions = [
//     { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
//     { key: 'apple', text: 'Apple' },
//     { key: 'banana', text: 'Banana' },
//     { key: 'orange', text: 'Orange', disabled: true },
//     { key: 'grape', text: 'Grape' },
//     { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
//     { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
//     { key: 'broccoli', text: 'Broccoli' },
//     { key: 'carrot', text: 'Carrot' },
//     { key: 'lettuce', text: 'Lettuce' },
// ];

export const DropdownControlledExample: React.FunctionComponent<any> = (props: any) => {
    // const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

    // const onChange = (event: React.FormEvent<HTMLDivElement>, item: any): void => {
    //     setSelectedItem(item);
    //     console.log(item.text)
    // };

    return (
        <Flex>
            <h3>{props.Title}</h3>
            <Dropdown
                label={props.label}
                selectedKey={props.selectedItem ? props.selectedItem.key : undefined}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={props.changeFunction}
                placeholder="Select an option"
                options={props.Values}
                styles={dropdownStyles}
            />
        </Flex>
    );
};
