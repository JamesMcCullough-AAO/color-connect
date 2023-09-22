import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GridBox from "./GridBox";
import { GridBoxPath } from "../types";

type GridProps = {
  size: number;
  puzzle: { color: string; x: number; y: number }[];
  completedPaths: { [key: string]: boolean };
  setCompletedPaths: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  path: { [key: string]: GridBoxPath };
  setPath: React.Dispatch<React.SetStateAction<{ [key: string]: GridBoxPath }>>;
  wallTiles: { x: number; y: number }[];
};

const Grid: React.FC<GridProps> = ({
  size,
  puzzle,
  completedPaths,
  setCompletedPaths,
  path,
  setPath,
  wallTiles,
}) => {
  const [drawing, setDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const [prevBox, setPrevBox] = useState<{ x: number; y: number } | null>(null);
  // console log drawing updates
  useEffect(() => {
    console.log("drawing", drawing);
  }, [drawing]);

  const startDrawing = (x: number, y: number) => {
    const key = `${x},${y}`;
    const circleData = puzzle.find((p) => p.x === x && p.y === y);

    // If circleData, or if the path key has only 1 connection, start drawing
    if (
      circleData ||
      (path[key] &&
        ((path[key].up &&
          !path[key].down &&
          !path[key].left &&
          !path[key].right) ||
          (!path[key].up &&
            path[key].down &&
            !path[key].left &&
            !path[key].right) ||
          (!path[key].up &&
            !path[key].down &&
            path[key].left &&
            !path[key].right) ||
          (!path[key].up &&
            !path[key].down &&
            !path[key].left &&
            path[key].right)))
    ) {
      // If on a circle, clear all paths of that color
      if (circleData) {
        setPath((prevPath) => {
          const newPath = { ...prevPath };
          Object.keys(newPath).forEach((key) => {
            if (newPath[key].color === circleData?.color) {
              delete newPath[key];
            }
          });
          return newPath;
        });
      }
      setDrawing(true);
      setCurrentColor(circleData?.color || path[key]?.color);
      setPrevBox({ x, y });
      setPath((prevPath) => ({
        ...prevPath,
        [key]: prevPath[key] || {
          up: false,
          down: false,
          left: false,
          right: false,
          color: circleData?.color || "tomato",
        },
      }));
    }
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const invalidMoveCheck = ({
    diffX,
    diffY,
    key,
    prevKey,
  }: {
    diffX: number;
    diffY: number;
    key: string;
    prevKey: string;
  }) => {
    // If the current path[key] contains a circle of a different color to currentColor, return true
    const x = key.split(",")[0];
    const y = key.split(",")[1];

    console.log("x, y", x, y);

    const circleData = puzzle.find(
      (p) => p.x === parseInt(x) && p.y === parseInt(y)
    );

    if (circleData && circleData.color !== currentColor) {
      return true;
    }

    // If the current path contains a wall, return true
    if (wallTiles.some((w) => w.x === parseInt(x) && w.y === parseInt(y))) {
      return true;
    }

    if (!path[key]) return false;
    // If the current path[key] is empty, return false
    if (
      !path[key].up &&
      !path[key].down &&
      !path[key].left &&
      !path[key].right
    ) {
      return false;
    }

    if (!prevKey) return true;

    // If backtracking along a valid path, return false
    if (diffX === 1) {
      if (path[key].left && path[prevKey].right) {
        return false;
      }
    } else if (diffX === -1) {
      if (path[key].right && path[prevKey].left) {
        return false;
      }
    } else if (diffY === 1) {
      if (path[key].up && path[prevKey].down) {
        return false;
      }
    } else if (diffY === -1) {
      if (path[key].down && path[prevKey].up) {
        return false;
      }
    }
    return true;
  };

  const handleMouseEnter = (x: number, y: number) => {
    if (!drawing) return;

    const key = `${x},${y}`;
    const prevKey = prevBox && `${prevBox.x},${prevBox.y}`;

    if (!prevKey) return;

    const prevX = prevBox?.x;
    const prevY = prevBox?.y;

    const diffX = x - prevX;
    const diffY = y - prevY;

    // Check if (x, y) is adjacent to (prevX, prevY)
    if (Math.abs(diffX) + Math.abs(diffY) !== 1) return;

    // Check if the move is valid
    if (invalidMoveCheck({ diffX, diffY, key, prevKey })) {
      console.log("invalid move");
      stopDrawing();
      return;
    }

    console.log("Set path is updated");

    const backtracking = path[key] && path[key].color === currentColor;

    setPath((prevPath) => {
      const newPath = { ...prevPath };

      if (newPath[key]) {
        // This path already exists.
        // If this is backtracking along the current path, delete the prevKey and remove the connection from the current key
        if (prevKey === key) {
          delete newPath[key];
        } else {
          console.log("backtracking");
          if (diffX === 1) {
            if (newPath[key].left && newPath[prevKey].right) {
              newPath[key].left = false;
              newPath[prevKey].right = false;
            }
          } else if (diffX === -1) {
            if (newPath[key].right && newPath[prevKey].left) {
              newPath[key].right = false;
              newPath[prevKey].left = false;
            }
          } else if (diffY === 1) {
            if (newPath[key].up && newPath[prevKey].down) {
              newPath[key].up = false;
              newPath[prevKey].down = false;
            }
          } else if (diffY === -1) {
            if (newPath[key].down && newPath[prevKey].up) {
              newPath[key].down = false;
              newPath[prevKey].up = false;
            }
          }

          // If the previous key has no connections, delete it
          if (
            !newPath[prevKey].up &&
            !newPath[prevKey].down &&
            !newPath[prevKey].left &&
            !newPath[prevKey].right
          ) {
            delete newPath[prevKey];
          }
          if (
            !newPath[key].up &&
            !newPath[key].down &&
            !newPath[key].left &&
            !newPath[key].right
          ) {
            delete newPath[key];
          }
        }
      } else {
        // The user is extending the path, add the connection
        newPath[key] = {
          up: false,
          down: false,
          left: false,
          right: false,
          color: currentColor || "tomato",
        };
        // If newPath[prevKey] doesn't exist, create it
        newPath[prevKey] = newPath[prevKey] || {
          up: false,
          down: false,
          left: false,
          right: false,
          color: currentColor || "tomato",
        };

        if (diffX === 1) {
          newPath[prevKey].right = true;
          newPath[key].left = true;
        } else if (diffX === -1) {
          newPath[prevKey].left = true;
          newPath[key].right = true;
        } else if (diffY === 1) {
          newPath[prevKey].down = true;
          newPath[key].up = true;
        } else if (diffY === -1) {
          newPath[prevKey].up = true;
          newPath[key].down = true;
        }
      }

      return newPath;
    });
    // If the key is a circle, stop drawing
    if (!backtracking) {
      const circleData = puzzle.find((p) => p.x === x && p.y === y);
      if (circleData) {
        setCompletedPaths((prevCompletedPaths) => ({
          ...prevCompletedPaths,
          [currentColor || "tomato"]: true,
        }));
        stopDrawing();
      }
    }
    setPrevBox({ x, y });
  };

  useEffect(() => {
    const handleMouseUp = () => {
      stopDrawing();
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [stopDrawing]);

  return (
    <Box
      position="relative"
      height="70vh"
      width="70vh"
      display="grid"
      gridTemplateColumns={`repeat(${size}, 1fr)`}
      onMouseLeave={stopDrawing}
    >
      {Array.from({ length: size * size }, (_, index) => {
        const row = Math.floor(index / size);
        const col = index % size;
        const circleData = puzzle.find((p) => p.x === col && p.y === row);
        return (
          <GridBox
            key={index}
            color={circleData?.color}
            x={col}
            y={row}
            path={
              path[`${col},${row}`] || {
                up: false,
                down: false,
                left: false,
                right: false,
              }
            }
            onMouseDown={() => startDrawing(col, row)}
            onMouseEnter={() => handleMouseEnter(col, row)}
            isWallTile={wallTiles.some((w) => w.x === col && w.y === row)}
          />
        );
      })}
    </Box>
  );
};

export default Grid;
