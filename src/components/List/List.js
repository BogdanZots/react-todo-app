import React from 'react';
import './List.scss';
import classNames from 'classnames';
import Badge from '../Badge/Badge';
const List = ({items, isRemovable,onClick}) => {
    console.log(items)
    return (
        <ul onClick={onClick} className="list">
            {items.map(item => {
                return <li
                    key={item.id}
                    className={classNames(item.className,{active:item.active})}>
                    <i>
                        {item.icon
                            ? item.icon
                            : <Badge color={item.color}/>}
                    </i>
                    <span>{item.name}</span>
                </li>
            })
}
        </ul>
    );
}

export default List;
