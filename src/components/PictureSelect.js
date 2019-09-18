import React from "react";
import style from "./PictureSelect.module.less";

const PictureSelect = props => {
  const { pictures, value, onChange } = props;

  // 点击全选框
  const onClickAllSelect = e => {
    if (e.target.checked) {
      onChange(pictures.map(value => value.id));
    } else {
      onChange([]);
    }
  };

  // 点击某一项
  const onClickItem = (item, e) => {
    let arr = JSON.parse(JSON.stringify(value));
    if (e.target.checked) {
      arr.push(item.id);
      onChange(arr);
    } else {
      arr.splice(arr.indexOf(item.id), 1);
      onChange(arr);
    }
  };

  return (
    <div className={style.picture_select}>
      <div className={style.select_num}>
        <input
          type="checkbox"
          className={style.all_select}
          checked={value.length === pictures.length}
          onChange={onClickAllSelect}
        />
        <span>已选中{props.value.length}个文件</span>
      </div>

      <div className={style.select_list}>
        {
          pictures.map((item, index, arr) => {
            return (
              <div className={style.img_div} key={index}>
                <img src={item.url} alt=" " />

                <input
                  type="checkbox"
                  checked={~value.indexOf(item.id)}
                  onChange={onClickItem.bind(null, item)}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default PictureSelect;
