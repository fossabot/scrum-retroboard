// @flow
import * as types from './actionTypes';

export function update(point, pointType) {
  return {
    type: types.UPDATE_POINT,
    point,
    pointType
  };
}

export function create(pointType) {
  return {
    type: types.CREATE_POINT,
    pointType
  };
}

export function remove(point, pointType) {
  return {
    type: types.REMOVE_POINT,
    point,
    pointType
  };
}

export function incrementLike(point, pointType) {
  return {
    type: types.INCREMENT_LIKE,
    point,
    pointType
  };
}

export function incrementLikeAll(pointType) {
  return {
    type: types.INCREMENT_LIKE_ALL,
    pointType
  };
}

export function updateTitle(title) {
  return {
    type: types.UPDATE_TITLE,
    title
  };
}

export function load(points) {
  return {
    type: types.LOAD,
    points
  };
}

export function newSprint() {
  return {
    type: types.NEW_SPRINT
  };
}

export function updateImage(image, pointType) {
  return {
    type: types.UPDATE_IMAGE,
    image,
    pointType
  };
}

export function deleteImage(pointType) {
  return {
    type: types.DELETE_IMAGE,
    pointType
  };
}
