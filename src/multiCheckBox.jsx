import * as React from 'react';

export const list = [
    {
        id: 0,
        name: 'red',
    },
    {
        id: 1,
        name: 'green',
    },
    {
        id: 2,
        name: 'purple',
    },
    {
        id: 3,
        name: 'blue',
    },
];
export default function Checkbox() {
    const [isSelected, setIsSelected] = React.useState(false);
    const [options, setOptions] = React.useState({
        ...list.map((item) => {
            return { ...item, state: false };
        }),
    });
    console.log('options:', options);
    function handleAll(checked) {
        setOptions((prev) => {
            const updatedState = {};
            Object.keys(prev).forEach((key) => {
                updatedState[key] = {
                    ...prev[key],
                    state: checked, // Toggle the state value
                };
            });
            return updatedState;
        });
    }
    function handleSingle(checked, id) {
        console.log('???', options[id].name, checked, id);
        setOptions((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                state: checked,
            },
        }));



    }
    React.useEffect(() => {
        let flag = 0;
        Object.keys(options).forEach((key) => {
            if (options[key].state) {
                flag++;
                console.log('checker', flag)
                if (flag === 4) {
                    setIsSelected(() => true)
                }
            }
            else {
                flag = 0;
                setIsSelected(() => false)

            }

        });
    }, [isSelected, options]);

    return (
        <div>
            <div>
                <div className="mb-5">
                    {' '}
                    <input
                        onChange={(e) => {
                            handleAll(e.target.checked);
                        }}
                        checked={isSelected}
                        type="checkbox"
                    />
                    select all{' '}
                </div>

                {Object.keys(options).map((key) => (
                    <div>
                        {' '}
                        <input
                            onChange={(e) => {
                                handleSingle(e.target.checked, options[key].id);
                            }}
                            checked={options[key].state}
                            type="checkbox"
                        />
                        <span>{options[key].name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
