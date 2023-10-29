import React from "react";

export default function Apple({
  apple,
  onDragStart,
  onDragEnd,
  onDoubleClick,
}) {
  return (
    <li
      className="apple"
      style={{ left: apple.position.left, top: apple.position.top }}
      onMouseDown={(event) => {
        const clickOffset = {
          x: event.clientX - parseFloat(event.currentTarget.style.left),
          y: event.clientY - parseFloat(event.currentTarget.style.top),
        };
        onDragStart(clickOffset);
      }}
      // 마우스 업 이벤트가 발생하면 드래그를 종료합니다.
      onMouseUp={onDragEnd}
      // 마우스 더블클릭 이벤트
      onDoubleClick={onDoubleClick}
    >
      {apple.sweetness}
    </li>
  );
}
