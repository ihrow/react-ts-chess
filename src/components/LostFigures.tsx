import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFigureProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      <div className="figures">
        {figures.map(figure =>
          <div className="lost-figure-item" key={figure.id}>
            {figure.name} {figure.icon && <img className="lost-icon" alt={figure.color + ' ' + figure.name} src={figure.icon}/> }
          </div>
        )}
      </div>
    </div>
  );
};

export default LostFigures;