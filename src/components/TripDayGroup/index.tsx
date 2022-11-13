import React from 'react';
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import TripDayCard from 'components/TripDayCard';

interface Props {
  // TODO 백엔드 연동시 타입 지정 필수!!
  itemList: Item[];
  onChangeList: (itemList: Item[]) => void;
}

export interface Item {
  number: number;
  phone: string;
  address: string;
  title: string;
}

const DraggableItem: React.FC<Props> = ({ itemList, onChangeList }) => {
  const reorder = <T,>(
    list: T[],
    startIndex: number,
    endIndex: number,
  ): T[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEndAction = (items: any[]) => {
    onChangeList(items);
  };
  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
  ) => ({
    boxShadow: isDragging
      ? '0px 2px 20px rgba(0, 0, 0, 0.4)'
      : '0px 2px 8px rgba(0, 0, 0, 0.12)',
    ...draggableStyle,
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      // drag 영역이 아닐 경우
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    ) {
      // 출발지와 도착지가 같을 경우
      return;
    }

    const items = reorder(itemList, source.index, destination.index);
    if (onDragEndAction) {
      //  return값이 X
      onDragEndAction(items);
    }
  };

  return (
    <DndWrap>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item, index) => (
                <Draggable
                  key={item.number}
                  draggableId={item.number.toString()}
                  index={index}
                >
                  {(provided2, snapshot2) => (
                    <TripDayCard
                      number={index + 1}
                      phone={item.phone}
                      address={item.address}
                      title={item.title}
                      ref={provided2.innerRef}
                      dndProps={{
                        ...provided2.draggableProps,
                        ...provided2.dragHandleProps,
                      }}
                      style={getItemStyle(
                        snapshot2.isDragging,
                        provided2.draggableProps.style,
                      )}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DndWrap>
  );
};
export default DraggableItem;

const DndWrap = styled.div`
  > div > article {
    margin-top: 20px;
  }
`;

// ref: https://kasterra.github.io/react-beautiful-dnd-1/ (설명 정확)
