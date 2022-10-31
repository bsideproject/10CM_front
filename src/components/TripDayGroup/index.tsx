import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import styled, { css } from 'styled-components';
import Hamberger from 'assets/image/Icon/24/move.svg';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import TripDayCard from 'components/TripDayCard';

interface Props {}

interface Item {
  number: number;
  phone: string;
  address: string;
  title: string;
}

const DraggableItem: React.FC<Props> = ({}) => {
  const [itemList, setItemList] = useState<Item[]>([
    {
      number: 1,
      phone: '010-9002-4823',
      address: '양평역 1번출구',
      title: '끝',
    },
    {
      number: 2,
      phone: '010-9002-4822',
      address: '양평역 2번출구',
      title: '입',
    },
    {
      number: 3,
      phone: '010-9002-4833',
      address: '양평역 3번출구',
      title: '니',
    },
    {
      number: 4,
      phone: '010-9002-4844',
      address: '양평역 4번출구',
      title: '다',
    },
  ]);
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
    setItemList(items);
    console.log(items);
  };
  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
  ) => ({
    background: isDragging ? colors.BLUE_DARK : colors.BLUE_BASE,
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
          {(provided, snapshot) => (
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
  > div > article + article {
    margin-top: 20px;
  }
`;
const CategoryBody = styled.div`
  margin-top: 24px;
`;
const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 48px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.BLUE_BASE};
  }
`;
const DragButton = styled.img`
  width: 30px;
  height: 30px;
`;
const ItemName = styled.div`
  flex: 1;
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.BLUE_LIGHT};
`;
const ItemInfoWrap = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
  flex-grow: 0;
`;
const Viewable = styled.div<{ viewable: boolean }>`
  padding: 2px 10px;
  border-radius: 100px;
  flex-shrink: 0;
  ${({ viewable }) =>
    viewable
      ? css`
          color: ${colors.BLUE_LIGHT};
          background-color: ${colors.BLUE_LIGHT};
        `
      : css`
          color: ${colors.BLUE_DARK};
          background-color: ${colors.BLUE_DARK};
        `};
`;
