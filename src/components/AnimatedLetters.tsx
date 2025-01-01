import "./AnimatedLetters.scss";
interface Props {
  letterClass: string;
  strArray: string[];
  idx: number;
}
const AnimatedLetters = ({ letterClass, strArray, idx }: Props) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span key={i + char} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
