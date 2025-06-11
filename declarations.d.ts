// To declare types for modules and files that TypeScript does not recognize

declare module "*.glsl" {
    const file: string;
    export default file;
}
