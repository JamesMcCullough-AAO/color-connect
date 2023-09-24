import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import {
  Box,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { generatePuzzle } from "./utils/generatePuzzle";
import {
  ColourPoint,
  GridBoxPath,
  Point,
  SpecialTile,
  colors,
  iconColors,
  unlockableStageTypes,
} from "./types";
import IntroductionModal from "./components/IntroductionModal";
import { playSFX } from "./utils/playSFX";
import HelpModal from "./components/HelpModal";

function App() {
  const [completedPaths, setCompletedPaths] = useState<{
    [key: string]: boolean;
  }>({});
  const [puzzle, setPuzzle] = useState<{
    circles: ColourPoint[];
    size: number;
    wallTiles: Point[];
    specialTiles: SpecialTile[];
    stageEffects: string[];
    colorCount?: number;
    backgroundColor?: string;
  }>({
    circles: [],
    size: 0,
    colorCount: -1,
    wallTiles: [],
    specialTiles: [],
    backgroundColor: "black",
    stageEffects: [],
  });
  const [size, setSize] = useState(3);
  const [colourCount, setColourCount] = useState(1);
  const [path, setPath] = useState<{ [key: string]: GridBoxPath }>({});
  const [level, setLevel] = useState(1);
  const [levelNumber, setLevelNumber] = useState(1);
  const [numberOfConnectedColors, setNumberOfConnectedColors] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [unlockedStageTypes, setUnlockedStageTypes] = useState<string[]>([]);
  const [popupColor, setPopupColor] = useState("rgba(0,0,0,0.7)");
  const {
    isOpen: isIntroModalOpen,
    onOpen: onIntroModalOpen,
    onClose: onIntroModalClose,
  } = useDisclosure();
  const {
    isOpen: isHelpModalOpen,
    onOpen: onHelpModalOpen,
    onClose: onHelpModalClose,
  } = useDisclosure();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 1500); // Hide the popup after 2 seconds
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showPopup]);

  const triggerPopup = (text: string, color: string = "rgba(0,0,0,0.7)") => {
    setPopupText(text);
    setPopupColor(color);
    setShowPopup(true);
  };

  const unlockAStageType = (levelNumber: number) => {
    // List all unlockableStageTypes with a level below the current level that isn't in unlockedStageEffects
    // Randomly select one of them
    // Add it to the unlockedStageEffects
    const unlockableStageTypesBelowLevel = unlockableStageTypes.filter(
      (stageType) =>
        stageType.level <= levelNumber &&
        !unlockedStageTypes.includes(stageType.effect)
    );
    if (unlockableStageTypesBelowLevel.length === 0) {
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * unlockableStageTypesBelowLevel.length
    );
    const randomStageType = unlockableStageTypesBelowLevel[randomIndex];
    setUnlockedStageTypes([...unlockedStageTypes, randomStageType.effect]);
    triggerPopup(randomStageType.popupText, randomStageType.color);
    return randomStageType.effect;
  };

  // when all paths are completed, show a modal
  useEffect(() => {
    // If every the number of completedPaths that are true equals the puzzle.colorCount, then show the modal
    if (
      Object.values(completedPaths).filter((v) => v).length ===
      puzzle.colorCount
    ) {
      onNewPuzzle();
    } else {
      // if the number of connected colors is less than the number of true values in completedPaths, play connect sfx
      if (
        numberOfConnectedColors <
        Object.values(completedPaths).filter((v) => v).length
      ) {
        const filename = "SFX/connect1.wav";
        const success = new Audio(filename);
        success.volume = 0.3;
        success.play();
      }
      setNumberOfConnectedColors(
        Object.values(completedPaths).filter((v) => v).length
      );
    }
  }, [completedPaths]);

  // when start the game, randomset the puzzle
  useEffect(() => {
    const { circles, wallTiles } = generatePuzzle(size, colourCount);
    setPuzzle({
      circles,
      size,
      wallTiles,
      colorCount: colourCount,
      backgroundColor: "black",
      specialTiles: [],
      stageEffects: [],
    });
    onIntroModalOpen();
  }, []);

  const toAddNewColor = ({
    colourCount,
    size,
  }: {
    colourCount: number;
    size: number;
  }) => {
    if (size < 4) {
      return colourCount < size - 1;
    }
    if (size >= 8) {
      return true;
    }
    return colourCount < size;
  };

  const pickRandomStageType = () => {
    if (unlockedStageTypes.length === 0) {
      return [];
    }
    if (levelNumber < 40) {
      const random = Math.random();
      if (random < 0.3) {
        return [];
      }
      const randomIndex = Math.floor(Math.random() * unlockedStageTypes.length);
      const randomStageType = unlockedStageTypes[randomIndex];
      return [randomStageType];
    } else if (levelNumber < 100) {
      const random1 = Math.random();
      if (random1 < 0.2) {
        return [];
      }
      const random = Math.random();
      if (random < 0.5) {
        const randomIndex = Math.floor(
          Math.random() * unlockedStageTypes.length
        );
        const randomStageType = unlockedStageTypes[randomIndex];
        return [randomStageType];
      }
      // Return 2 different random stage types
      const randomIndex1 = Math.floor(
        Math.random() * unlockedStageTypes.length
      );
      const randomIndex2 = Math.floor(
        Math.random() * unlockedStageTypes.length
      );
      const randomStageType1 = unlockedStageTypes[randomIndex1];
      const randomStageType2 = unlockedStageTypes[randomIndex2];
      if (randomStageType1 === randomStageType2) {
        return [randomStageType1];
      }
      return [randomStageType1, randomStageType2];
    }
    // Return 3 different random stage types
    const randomIndex1 = Math.floor(Math.random() * unlockedStageTypes.length);
    const randomIndex2 = Math.floor(Math.random() * unlockedStageTypes.length);
    const randomIndex3 = Math.floor(Math.random() * unlockedStageTypes.length);
    const randomStageType1 = unlockedStageTypes[randomIndex1];
    const randomStageType2 = unlockedStageTypes[randomIndex2];
    const randomStageType3 = unlockedStageTypes[randomIndex3];
    const randomStageTypes = [
      randomStageType1,
      randomStageType2,
      randomStageType3,
    ];
    const uniqueRandomStageTypes = randomStageTypes.filter(
      (stageType, index) => randomStageTypes.indexOf(stageType) === index
    );
    return uniqueRandomStageTypes;
  };

  const onNewPuzzle = () => {
    // play success sfx at volume 50
    const increaseDifficulty = level >= size;

    // reset the puzzle
    setPath({});
    setCompletedPaths({});
    setNumberOfConnectedColors(0);

    let newSize = size;
    let newColourCount = colourCount;

    // Random increase of colours or size

    // If the level number is divisible by 5, and the size is 5 or more, give a breezy level
    if ((levelNumber + 1) % 5 === 0) {
      playSFX("SFX/breeze1.mp3");
      if (levelNumber === 4) {
        triggerPopup("Eazy Breezy!", "blue");
      }
      setLevelNumber(levelNumber + 1);
      const breezySize = Math.min(Math.max(Math.round(size / 2) + 1, 3), 5);
      const breezyColourCount = Math.min(
        Math.max(Math.round(colourCount / 2), 2),
        4
      );
      const { circles, wallTiles } = generatePuzzle(
        breezySize,
        breezyColourCount
      );
      setPuzzle({
        circles,
        size: breezySize,
        wallTiles,
        colorCount: breezyColourCount,
        backgroundColor: "#006399",
        specialTiles: [],
        stageEffects: [],
      });
      return;
    }

    let stageType;

    if (increaseDifficulty && levelNumber < 100) {
      playSFX("SFX/success2.wav");
      setLevel(1);
      if (toAddNewColor({ colourCount, size })) {
        if (colourCount < 19) {
          const newColorColor = colors[colourCount];
          triggerPopup("New Colour!", newColorColor);
          newColourCount = colourCount + 1;
          setColourCount(newColourCount);
        }
      } else {
        if (size < 8) {
          triggerPopup("Bigger Board!");
          newSize = size + 1;
          setSize(newSize);
        }
      }
    } else {
      playSFX("SFX/success1.wav");
      setLevel(level + 1);
      stageType = unlockAStageType(levelNumber + 1);
    }

    if (levelNumber == 100) {
      triggerPopup("Endless Mode Activated!", "green");
    }
    if (levelNumber >= 100) {
      newSize = Math.floor(Math.random() * 4) + 5;
      newColourCount = Math.floor(Math.random() * (newSize - 1)) + 2;
    }

    setLevelNumber(levelNumber + 1);

    const stageTypes = stageType ? [stageType] : pickRandomStageType();

    const { circles, wallTiles, specialTiles, stageEffects } = generatePuzzle(
      newSize,
      newColourCount,
      stageTypes
    );
    setPuzzle({
      circles,
      size: newSize,
      wallTiles,
      colorCount: newColourCount,
      backgroundColor: "black",
      specialTiles: specialTiles,
      stageEffects: stageEffects,
    });
  };

  return (
    <VStack>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor={puzzle.backgroundColor}
        h="100vh"
        w="100vw"
      >
        <Grid
          size={puzzle.size}
          completedPaths={completedPaths}
          setCompletedPaths={setCompletedPaths}
          circles={puzzle.circles}
          path={path}
          setPath={setPath}
          wallTiles={puzzle.wallTiles}
          specialTiles={puzzle.specialTiles}
          setPuzzle={setPuzzle}
          stageEffects={puzzle.stageEffects}
        />
      </Box>
      <Text
        fontSize="6xl"
        fontFamily="monospace"
        color="white"
        position="absolute" //Top center
        top="3%"
        left="50%"
        transform="translate(-50%, 0)"
      >
        {levelNumber}
      </Text>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: popupColor,
            color: iconColors[popupColor as keyof typeof iconColors] || "white",
            borderRadius: "10px",
            animation: "grow 1s ease-in-out",
            fontFamily: "monospace",
            fontSize: "4rem",
            zIndex: 100,
          }}
        >
          {popupText}
        </div>
      )}
      <style>
        {`
          @keyframes grow {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
      <IntroductionModal
        isOpen={isIntroModalOpen}
        onClose={onIntroModalClose}
      />
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={onHelpModalClose}
        unlockedStageTypes={unlockedStageTypes}
        levelNumber={levelNumber}
      />
      <IconButton
        aria-label="Help"
        colorScheme="blue"
        icon={<HelpCenterIcon />}
        position="absolute" //Bottom right
        bottom="3%"
        right="3%"
        onClick={onHelpModalOpen}
      />
    </VStack>
  );
}

export default App;
