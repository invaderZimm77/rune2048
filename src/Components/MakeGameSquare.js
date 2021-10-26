const MakeGameSquare = (squaresNum, { props }) => {
  props.setGameSquareValue(0);
  props.setGameSquarePosition = { squaresNum };
  //   setGameSquareValue(0);
  //   setGameSquarePosition={squaresNum};

  console.log("skunk but rug");
  return props;
};
export default MakeGameSquare();
