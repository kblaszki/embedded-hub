/**
 * Approximate Wokwi part bounding boxes (width x height in diagram pixels).
 * Used only for preview centering — source diagram.json in repo stays unchanged.
 */
const PART_SIZES = {
  'wokwi-arduino-uno': { width: 176, height: 134 },
  'wokwi-arduino-nano': { width: 120, height: 68 },
  'wokwi-arduino-mega': { width: 280, height: 134 },
  'wokwi-led': { width: 24, height: 36 },
  'wokwi-rgb-led': { width: 36, height: 36 },
  'wokwi-resistor': { width: 80, height: 30 },
  'wokwi-pushbutton': { width: 60, height: 60 },
  'wokwi-buzzer': { width: 50, height: 45 },
  'wokwi-74hc595': { width: 90, height: 70 },
};

const DEFAULT_SIZE = { width: 80, height: 60 };
const VIEWPORT_PADDING = 48;

/**
 * @param {string} type
 */
function getPartSize(type) {
  return PART_SIZES[type] ?? DEFAULT_SIZE;
}

/**
 * Shift all parts so the circuit bounding box is centered in the viewport.
 * @param {string} diagramJson
 * @param {number} viewportWidth
 * @param {number} viewportHeight
 * @param {{ left?: number, top?: number }} [extraOffset]
 * @returns {string}
 */
export function centerDiagramForPreview(
  diagramJson,
  viewportWidth,
  viewportHeight,
  extraOffset = {},
) {
  const diagram = JSON.parse(diagramJson);
  if (!Array.isArray(diagram.parts) || diagram.parts.length === 0) {
    return diagramJson;
  }

  // Wokwi embed already frames multi-part circuits well; manual bbox centering
  // uses approximate part sizes and shifts those layouts incorrectly.
  if (diagram.parts.length > 1) {
    const left = extraOffset.left ?? 0;
    const top = extraOffset.top ?? 0;
    if (left === 0 && top === 0) {
      return diagramJson;
    }
    for (const part of diagram.parts) {
      part.left = (part.left ?? 0) + left;
      part.top = (part.top ?? 0) + top;
    }
    return JSON.stringify(diagram);
  }

  let minLeft = Infinity;
  let minTop = Infinity;
  let maxRight = -Infinity;
  let maxBottom = -Infinity;

  for (const part of diagram.parts) {
    const left = part.left ?? 0;
    const top = part.top ?? 0;
    const { width, height } = getPartSize(part.type);
    minLeft = Math.min(minLeft, left);
    minTop = Math.min(minTop, top);
    maxRight = Math.max(maxRight, left + width);
    maxBottom = Math.max(maxBottom, top + height);
  }

  const bboxWidth = maxRight - minLeft;
  const bboxHeight = maxBottom - minTop;

  const targetWidth = viewportWidth - VIEWPORT_PADDING * 2;
  const targetHeight = viewportHeight - VIEWPORT_PADDING * 2;

  const offsetLeft =
    Math.round((targetWidth - bboxWidth) / 2 + VIEWPORT_PADDING - minLeft) +
    (extraOffset.left ?? 0);
  const offsetTop =
    Math.round((targetHeight - bboxHeight) / 2 + VIEWPORT_PADDING - minTop) +
    (extraOffset.top ?? 0);

  for (const part of diagram.parts) {
    part.left = (part.left ?? 0) + offsetLeft;
    part.top = (part.top ?? 0) + offsetTop;
  }

  return JSON.stringify(diagram);
}
