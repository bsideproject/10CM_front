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
    if (!result.destination) {
      return;
    }
    const items = reorder(
      itemList,
      result.source.index,
      result.destination.index,
    );
    if (onDragEndAction) {
      onDragEndAction(items);
    }
  };
  ``;
  return (
    <DndWrap>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item, index) => (
                <Draggable
                  key={item.number}
                  draggableId={item.number.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <TripDayCard
                      number={index + 1}
                      phone={item.phone}
                      address={item.address}
                      title={item.title}
                      ref={provided.innerRef}
                      dndProps={{
                        ...provided.draggableProps,
                        ...provided.dragHandleProps,
                      }}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style,
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
