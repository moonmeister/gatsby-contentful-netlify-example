import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

const typography = new Typography(kirkhamTheme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
