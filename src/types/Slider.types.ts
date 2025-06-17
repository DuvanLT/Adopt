export interface SliderProps<T = any> {
  slides: T[];
  SlideComponent?: (props: { slide: T }) => JSX.Element;
  styles: { [key: string]: string };
}
