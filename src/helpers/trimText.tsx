type SliceTextProps = {
  text: string;
  charAt?: number;
};

export const sliceText = ({ text, charAt = 150 }: SliceTextProps) =>
  text.length > charAt ? `${text.slice(0, charAt)}...` : text;
