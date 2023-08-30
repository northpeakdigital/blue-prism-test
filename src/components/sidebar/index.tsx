import { log } from 'console';
import React, { FC } from 'react';
import styled from 'styled-components';

interface ScheduleListProps {
  data: any
}

const ScheduleList: FC<ScheduleListProps> = ({data}) => {

  const ScheduleListEl = styled.ul`
    margin: 0;
    padding: 0;
    width: 400px;
    margin-left: 100px;
  `

  const ScheduleListItem = styled.li`
    margin: 0;
    padding: 0;
    padding: 20px;
    border-radius: 30px;
    margin-bottom: 10px;
    list-style-type: none;
    border: 1px solid red;

    .list-item-button-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .list-item-title {
      display: flex;
      margin-bottom: 10px;
      align-items: center;

      .list-item-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border-radius: 100px;
        display: inline-block;
        background-color: red;
        border: 2px solid red;
      }

      p {
        margin: 0;
        font-size: 18px;
      }
    }

    .list-item-content {
      margin-bottom: 10px;
    }

    button {
      border: none;
      cursor: pointer;
      appearance: none;
      padding: 8px 20px;
      border-radius: 12px;
      background-color: red;
    }
  `

  return (
    <ScheduleListEl>
      {data.map((item: any, index: any) => (
        <ScheduleListItem key={`item-${index}`}>
          <div className="list-item-title">
            <div className="list-item-icon"></div>
            <p>Schedule Title</p>
          </div>
          <div className="list-item-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a libero nisi. Integer malesuada massa nec erat facilisis, non venenatis est consectetur.</p>
          </div>
          <div className="list-item-button-wrapper">
            <button>Retire</button>
          </div>
        </ScheduleListItem>
      ))}
    </ScheduleListEl>
  );
};

export default ScheduleList;
