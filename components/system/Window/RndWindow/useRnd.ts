import { type Props, type RndResizeCallback } from "react-rnd";
import { type DraggableEventHandler } from "react-draggable";
import { useCallback, useMemo } from "react";
import rndDefaults, {
  RESIZING_DISABLED,
  RESIZING_ENABLED,
} from "components/system/Window/RndWindow/rndDefaults";
import useDraggable from "components/system/Window/RndWindow/useDraggable";
import useResizable from "components/system/Window/RndWindow/useResizable";
import { isWindowOutsideBounds } from "components/system/Window/functions";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { getWindowViewport, pxToNum } from "utils/functions";
import { TASKBAR_HEIGHT } from "utils/constants";

const enableIframeCapture = (enable = true): void =>
  document.querySelectorAll("iframe").forEach((iframe) => {
    // eslint-disable-next-line no-param-reassign
    iframe.style.pointerEvents = enable ? "initial" : "none";
  });

const useRnd = (id: string): Props => {
  const {
    processes: {
      [id]: {
        allowResizing = true,
        autoSizing = true,
        lockAspectRatio = true,
        maximized = false,
      } = {},
    },
  } = useProcesses();
  const { setWindowStates } = useSession();
  const [size, setSize] = useResizable(id, autoSizing);
  const [position, setPosition] = useDraggable(id, size);
  const onDragStop: DraggableEventHandler = useCallback(
    (_event, { x, y }) => {
      enableIframeCapture();

      const newPosition = { x, y };

      if (
        !isWindowOutsideBounds(
          { position: newPosition, size },
          getWindowViewport(),
          true
        )
      ) {
        setPosition(newPosition);
        setWindowStates((currentWindowStates) => ({
          ...currentWindowStates,
          [id]: {
            ...currentWindowStates[id],
            position: newPosition,
          },
        }));
      }
    },
    [id, setPosition, setWindowStates, size]
  );
  const onResizeStop: RndResizeCallback = useCallback(
    (
      _event,
      _direction,
      { style: { height, width, transform } },
      _delta,
      resizePosition
    ) => {
      const [, x, y] =
        /translate\((-?\d+)px, (-?\d+)px\)/.exec(transform) || [];
      const newPositon =
        typeof x === "string" && typeof y === "string"
          ? { x: pxToNum(x), y: pxToNum(y+ TASKBAR_HEIGHT) }
          : resizePosition;

      enableIframeCapture();

      const newSize = { height: pxToNum(height), width: pxToNum(width) };

      if (newPositon.y < 0) {
        newSize.height += newPositon.y;
        newPositon.y = 0;
      }

      setSize(newSize);
      setPosition(newPositon);
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          ...currentWindowStates[id],
          position: newPositon,
          size: newSize,
        },
      }));
    },
    [id, setPosition, setSize, setWindowStates]
  );
  const disableIframeCapture = useCallback(
    () => enableIframeCapture(false),
    []
  );
  const enableResizing = useMemo(
    () => (allowResizing && !maximized ? RESIZING_ENABLED : RESIZING_DISABLED),
    [allowResizing, maximized]
  );

  return {
    disableDragging: maximized,
    enableResizing,
    lockAspectRatio,
    onDragStart: disableIframeCapture,
    onDragStop,
    onResizeStart: disableIframeCapture,
    onResizeStop,
    position,
    size,
    ...rndDefaults,
  };
};

export default useRnd;
