import { Point } from './types';

export const colorRGB = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

export const fontSize = {
  HEADER: 14,
  ITEM: 12,
};

export const drawConsts = {
  BLOCK_MARGIN: 10,
  CHECKBOX_WIDTH: fontSize.ITEM,
  LIST_ITEM_PADDING: 2,
  COLUMNS_MARGIN: 5,
  LOGO_HEIGHT: 100,
};

export const canvasFont = {
  HEADER: `bold ${fontSize.HEADER}px Arial`,
  ITEM: `${fontSize.ITEM}px Arial`,
};

export function drawRectangle(
  ctx: CanvasRenderingContext2D,
  start: Point,
  width: number,
  height: number,
) {
  const end = { x: start.x + width, y: start.y + height };
  ctx.moveTo(start.x, end.y);
  ctx.beginPath();
  ctx.lineTo(end.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineTo(start.x, end.y);
  ctx.lineTo(start.x, start.y);
  ctx.lineTo(end.x, start.y);
  ctx.stroke();
}

export const img64 = {
  LOGO:
    'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMzUuNjQxLDExMS4wNjdsLTE5LjU2Ny0xNC44MjRjLTIuOTg1LTIuMjYxLTcuMTgyLTEuOTc1LTkuODMyLDAuNjc1bC05LjUyLDkuNTJsLTkuNTItOS41MiAgICBjLTIuNjQ4LTIuNjQ4LTYuODQ2LTIuOTM3LTkuODMyLTAuNjc1bC0xOS41NjcsMTQuODI0Yy01LjcyNyw0LjMzOS0yLjYxNSwxMy40OCw0LjUzNCwxMy40OGMzLjI1MywwLDMuMzM1LTAuNjIyLDE4Ljg4MS0xMi4zOTggICAgbDEwLjIwMSwxMC4yMDFjMi45MjksMi45Myw3LjY3OCwyLjkyOSwxMC42MDYsMGwxMC4yMDEtMTAuMjAxYzE1LjU1MSwxMS43NzksMTUuNjI4LDEyLjM5OCwxOC44OCwxMi4zOTggICAgQzEzOC4yNiwxMjQuNTQ2LDE0MS4zNjQsMTE1LjQwMiwxMzUuNjQxLDExMS4wNjd6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjQxLjgxOCw0Ny4wNzlsLTE5LjU2Ny0xNC44MjRjLTIuOTg1LTIuMjYyLTcuMTgyLTEuOTc1LTkuODMyLDAuNjc1bC05LjUyLDkuNTJsLTkuNTItOS41MiAgICBjLTIuNjQ4LTIuNjQ4LTYuODQ2LTIuOTM2LTkuODMyLTAuNjc1bC0xOS41NjgsMTQuODI0Yy0zLjMwMiwyLjUwMS0zLjk1MSw3LjIwNi0xLjQ1LDEwLjUwN2MyLjUwMiwzLjMwMiw3LjIwNiwzLjk1MSwxMC41MDgsMS40NSAgICBsMTQuMzU4LTEwLjg3NmwxMC4yMDEsMTAuMjAxYzIuOTI5LDIuOTMsNy42NzgsMi45MjksMTAuNjA2LDBsMTAuMjAxLTEwLjIwMWMxNS41NTEsMTEuNzc5LDE1LjYyOCwxMi4zOTgsMTguODgsMTIuMzk4ICAgIEMyNDQuNDM2LDYwLjU1OSwyNDcuNTQsNTEuNDE0LDI0MS44MTgsNDcuMDc5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNy44OTksNDU5LjEzOGwtNjkuNjQ0LTEzMy43NzljLTEuOTEyLTMuNjc0LTYuNDM5LTUuMTAyLTEwLjExNi0zLjE4OWMtMy42NzQsMS45MTMtNS4xMDIsNi40NDEtMy4xODksMTAuMTE2ICAgIGw1OS4yOTksMTEzLjkwOWMtMTcuMTczLTguNDA1LTM1Ljc4Ny0xNS45ODctNTQuOTUxLTIyLjM4MmwtNzAuNDgxLTEzNS4zODZjLTEuOTEyLTMuNjczLTYuNDQxLTUuMTAzLTEwLjExNi0zLjE4OSAgICBjLTMuNjc0LDEuOTEzLTUuMTAyLDYuNDQxLTMuMTg5LDEwLjExNmw2My42MjEsMTIyLjIwOWMtODIuODg4LTIzLjc4Mi0xNzMuOTI5LTI2Ljc4Ny0yNTUuNTUyLTExLjg4M2wzLjg2My03LjQxOSAgICBjMS43NTUsMCw1Ljk3MywwLjQ5Myw5LjAyNi0zLjQ3M2MzLjI2Ni00LjI0NSwxLjQxNC04LjQ3Ny0wLjEyOC0xMy42MTlsODIuNzY1LTE1OC45ODRoMzMuMzgyICAgIGMzLjIwNSwyMC4yOTMsMjAuODE1LDM1Ljg2MSw0MS45OTUsMzUuODYxSDM4Ni4zbDIyLjQ4NSw0My4xOWMxLjkxMywzLjY3NCw2LjQ0MSw1LjEwNCwxMC4xMTYsMy4xODkgICAgYzMuNjc0LTEuOTEzLDUuMTAyLTYuNDQxLDMuMTg5LTEwLjExNmwtMTguODc5LTM2LjI2M2g2NS44NTJjMjMuNjcsMCw0Mi45MjgtMTkuMjU4LDQyLjkyOC00Mi45MyAgICBjMC0xNi4xOTItOS4wMTMtMzAuMzE0LTIyLjI4NC0zNy42MjVjMS44NTctNS4wNDgsMi44MzgtMTAuNDA0LDIuODM4LTE1LjgzNGMwLTQzLjg1LTU1Ljg5MS02Mi4zOTctODIuMjMxLTI3Ljk0MSAgICBjLTguMjgzLTQuOTg5LTE3Ljk3Ny03LjgxLTI4LjI4Ni03LjgxYy0xNS4yODMsMC0yOS4xMTEsNi4zMTktMzkuMDMyLDE2LjQ3M2wtMTcuNjM3LTMzLjg3NyAgICBjLTAuMjA3LTAuMzk3LTAuNDI2LTAuNzg2LTAuNjU4LTEuMTY0Yy0zLjQ2OS01LjY3NC05LjYxMi05LjE0Ni0xNi4zMzQtOS4xNDZjLTYuNzIxLDAtMTIuODY1LDMuNDcyLTE2LjMzNCw5LjE0NiAgICBjLTAuMjMxLDAuMzc4LTAuNDUxLDAuNzY2LTAuNjU4LDEuMTY0bC0xMzEuOTI0LDI1My40MmMtMi41ODctNi4yMjItNS40MzItMTIuMjMtOC40ODQtMTcuNzkyYzcuNjU4LDAsMTIuMzYyLDAuOTE2LDE1LjU3Ni00LjA5MSAgICBjMS42NDUtMi41NjIsMS44Ny01Ljc0MywwLjYwMy04LjUxMWMwLTAuMDAxLTAuMDAxLTAuMDAyLTAuMDAxLTAuMDAyYy0yLjk5My02LjUzLTEyLjQxMi0yNi41NTUtMjMuMTg3LTQ0LjE2MyAgICBjNi4wMjgsMCwxMC45ODUsMC44NSwxNC4wOS00LjMxNWMxLjYyMy0yLjcsMS43MDgtNS45NzMsMC4yMzEtOC43NTNjLTUuMzEzLTEwLjAwMi0yNC45NDUtNDUuMDIzLTU0LjUwMi03NS43MTUgICAgYy0zLjQ5NS0zLjYyOC05LjMzLTMuNjMtMTIuODI4LDBjLTI5LjU1NywzMC42OTItNDkuMTksNjUuNzEzLTU0LjUwMiw3NS43MTNjLTMuMTU0LDUuOTM2LDEuMTY4LDEzLjA3MSw3Ljg2MSwxMy4wNzFoNi40NTggICAgYy0xMC43NzMsMTcuNjA1LTIwLjE5NCwzNy42MzEtMjMuMTg3LDQ0LjE2MWMtMi43MDIsNS44OTUsMS42MTIsMTIuNjA2LDguMDksMTIuNjA2aDguMDg1ICAgIGMtNy4wNDgsMTIuODQ4LTEzLjA4OSwyNy45ODktMTcuMDU0LDQyLjk2NGMtMS40OTQsNS42NDcsMi43NjgsMTEuMTY3LDguNjA1LDExLjE2N2gzOS42Njh2MjguMjMgICAgYy0yNC40NzMsOC42NjQtNDcuNTE2LDE5LjA2LTY4LjUyNywzMC45ODRjLTExLjM0Nyw2LjQ0LTYuNzUxLDIzLjc5MSw2LjI5NCwyMy43OTFjOC4zNCwwLDIwNy43MzYsMCwyMjUuNzU3LDAgICAgYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNWgtMTE4Ljc1di0zNy43OTVjMTIwLjktMzEuMjk1LDI2NC4zMDgtMTkuMzI5LDM3MC43NjIsMzcuNzk1SDI3My40OTggICAgYy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVINDk5LjIyQzUxMS4wNDksNDgxLjI2OSw1MTYuMjc0LDQ2Ni43NzgsNTA3Ljg5OSw0NTkuMTM4eiBNNDc3LjU0NiwxNjEuNjYgICAgYzAsMy43ODMtMC42OTQsNy41MTYtMi4wMywxMS4wMTNjLTMuOTQ2LTAuNTk2LTguMTU1LTAuNjYtMTIuMzctMC4wNzZjLTcuNjU4LTguMjY0LTE4Ljc5OC0xMi40NDUtMjkuOTc5LTExLjI2OCAgICBjLTIuNTQ3LTYuODY1LTYuMzg3LTEyLjk5NS0xMS4xOTQtMTguMTU1QzQzOS41MDUsMTE5LjYzLDQ3Ny41NDYsMTMxLjkyMSw0NzcuNTQ2LDE2MS42NnogTTMzOC43NiwxODguNTc5ICAgIGM2LjkzMi00LjA2LDAuNTM1LTkuOTMsNy4yOTEtMjQuNTg2YzYuMjE0LTEzLjUzMywxOS45NzgtMjMuMDg0LDM1Ljk3OS0yMy4wODRjMTQuMzgzLDAsMjcuNDY2LDcuOTk0LDM0LjM0NSwxOS45NDMgICAgYzUuNjE4LDkuNzIsMi44NjcsMTIuOTMyLDcuOTAzLDE1Ljc3MWM0LjkzMSwyLjc3OSw2Ljc3OC0xLjM2NSwxNS4xNjMtMC4zMzRjNS44MzUsMC43MTgsMTEuMTQ4LDMuODk2LDE0LjU1LDguODA0ICAgIGMxLjQwNiwyLjAzLDMuNjksMy4xODUsNi4wNzksMy4yMTJjMi4yOTksMC4wMjcsNC4yMjctMS4yNTYsOS44MDItMS4wOTNjMTUuMDMzLDAuNDI1LDI3LjEyLDEyLjc5LDI3LjEyLDI3LjkwNyAgICBjMCwxNS40LTEyLjUyOSwyNy45MjktMjcuOTI3LDI3LjkyOWgtMTQ0LjU4Yy0xNS4yOTgsMC0yNy44NzctMTIuNTk5LTI3LjUtMjguMTgzYzAuMzUxLTE0LjgwNywxMi42ODYtMjYuODU0LDI3LjUtMjYuODU0ICAgIGM0Ljg3OSwwLDcuOTUzLDEuMjM2LDkuMDI1LDEuNDQ5QzMzNS4zNjUsMTg5LjgzMiwzMzcuMjYsMTg5LjQ1OCwzMzguNzYsMTg4LjU3OXogTTMwNC42ODMsMTE1LjQzMSAgICBjMC4xMzEtMC4yNTIsMC4yNzYtMC40NzcsMC40MjktMC42NzZjMS4wNzQtMS4zOTQsMi41OTMtMS41NjEsMy4yNTctMS41NjFjMC42NjQsMCwyLjE4MywwLjE2NywzLjI1NywxLjU2MSAgICBjMC4xNTMsMC4xOTksMC4yOTgsMC40MjMsMC40MjksMC42NzZsMjEuMTQ3LDQwLjYyMmMtMi41NDEsNS4wNy00LjQ1OSwxMS4wMjgtNS4yODEsMTcuMDk1ICAgIGMtMTEuNjItMC45MzUtMjMuODU3LDIuODgtMzMuMTYxLDExLjk4M2MtNi45MjIsNi43NzMtOS44NDIsMTMuNTQ3LTExLjk2OSwyMi4wNTZoLTI1Ljg3NUwzMDQuNjgzLDExNS40MzF6IE03NC45NzMsNDY2LjI2OCAgICBIMjEuNTYxYzE2LjY2OC04Ljk0NCwzNC41NjctMTYuOTQxLDUzLjQxMi0yMy44NlY0NjYuMjY4eiBNODkuOTc0LDQ2Ni4yNjhjMC0xMC4xMzksMC01OC4xNzIsMC02OC4wMDZoMTQuNzczICAgIGMwLjAwMSw2LjQ2NSwwLjAwMSw2MC4yNDIsMC4wMDEsNjguMDA2SDg5Ljk3NHogTTEzNC42ODcsNDA5LjQ5Yy01LjAwOCwxLjEwMi05Ljk5LDIuMjY4LTE0Ljk0MSwzLjUxdi0xNC43MzhoMjAuNzg1ICAgIEwxMzQuNjg3LDQwOS40OXogTTQzLjQyMiwzODMuMjYyYzQuNjI4LTE0Ljc1NCwxMS4yMDgtMjkuMTQxLDE4LjUzOC00MC4zODFjMS43ODMtMi43MzYsMS45MjQtNi4yMTksMC4zNjgtOS4wOSAgICBjLTEuNTU3LTIuODc0LTQuNTU2LTQuNjYtNy44MjUtNC42NmgtOS4yMDljNS40NTItMTEuMjcsMTQuNjM2LTI5LjIwMiwyNC4wMTUtNDIuODMyYzEuODc4LTIuNzI5LDIuMDg3LTYuMjQ3LDAuNTQ1LTkuMTc5ICAgIGMtMy4wMDktNS43MjMtOC41MjctNC43NTctMTUuMTY4LTQuNzU3YzcuODUyLTEzLjU1MiwyMi42NDItMzYuODY0LDQyLjY3NS01OC43MDVjMjAuMDI5LDIxLjgzOCwzNC44MjIsNDUuMTU0LDQyLjY3NSw1OC43MDUgICAgYy02LjU5OCwwLTEyLjE1MS0wLjk4LTE1LjE2OSw0Ljc1OWMtMS41NDIsMi45MzMtMS4zMzIsNi40NSwwLjU0Nyw5LjE3OGM5LjM3OCwxMy42MjksMTguNTYzLDMxLjU2LDI0LjAxNSw0Mi44MzFoLTkuMjA5ICAgIGMtNy4wNTIsMC0xMS4zMDksNy44NC03LjQ1NiwxMy43NTJjNy44MDcsMTEuOTc0LDE0LjEyMSwyNi40MTgsMTguNTI5LDQwLjM4QzE0MC45MTMsMzgzLjI2Miw1NC43NjcsMzgzLjI2Miw0My40MjIsMzgzLjI2MnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K',
};