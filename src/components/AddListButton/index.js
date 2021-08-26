import React, {useState} from 'react';
import List from '../List/List';
import './AddButtonList.scss'
import closeSvg from '../../assets/img/close.svg'
import Badge from '../Badge/Badge';

const AddButtonList = ({colors}) => {
    console.log(colors)

    const [visiblePopup,
        setVisiblePopup] = useState(false)
    const [selectedColor,
        selectColor] = useState(null)

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(!visiblePopup)}
                items={[{
                    className: "list__add-button",
                    icon: (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 1V15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <path
                                d="M1 8H15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    ),
                    name: "Добавить список",
                    id: 5
                }
            ]}/> {visiblePopup && <div className="add-list__popup">
                <img
                    onClick={() => setVisiblePopup(!visiblePopup)}
                    src={closeSvg}
                    alt="close popup"
                    className="add-list__popup-close"/>
                <input className="field" type="text" placeholder="Название папки"/>
                <div className="add-list__popup-colors">
                    <ul className="add-list__popup-colors">
                        {colors
                            .map(function (color) {
                                return <Badge
                                    hexColor={color.hex}
                                    onClick={(hexColor) => console.log(hexColor)}
                                    key={color.id}
                                    color={color.name}/>
                            })}
                    </ul>
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    );
}

export default AddButtonList;
