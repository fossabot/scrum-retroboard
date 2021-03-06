// @flow
import React, { Component } from 'react';
import { Label, Container } from 'reactstrap';
import Point from './Point';
import styles from './PointList.css';

type Props = {
  points: {
    stop: Array,
    start: Array,
    continue: Array
  },
  pointType: string,
  actions: {
    update: (point: object, pointType: string) => void,
    remove: (point: object, pointType: string) => void,
    incrementLike: (point: object, pointType: string) => void
  }
};

export default class PointList extends Component<Props> {
  props: Props;

  textChanged(event, point) {
    const newPoint = point;
    const { value } = event.target;
    const { actions } = this.props;
    const { pointType } = this.props;
    newPoint.text = value;
    actions.update(newPoint, pointType);
  }

  render() {
    const { points, pointType, actions } = this.props;
    if (points.length > 0) {
      return (
        <Container className={styles.container} fluid>
          {points.map(point => (
            <Point
              key={point.id}
              point={point}
              onChange={event => this.textChanged(event, point)}
              onLikeClick={() => actions.incrementLike(point, pointType)}
              onDeleteClick={() => actions.remove(point, pointType)}
            />
          ))}
        </Container>
      );
    }
    return <Label className={styles.label}>No bullet point added yet!</Label>;
  }
}
